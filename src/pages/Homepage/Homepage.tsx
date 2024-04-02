import { ChangeEvent, useEffect } from "react";
import { getTags } from "../../services/stackexchange.tags";
import { Alert, CircularProgress } from "@mui/material";
import styles from "./Homepage.module.scss";
import { TableWithFilters } from "../../components/organisms/TableWithFilters/TableWithFilters";
import { Order, SortBy } from "../../types/Filters";
import { useTagsContext } from "../../context/TagsContext";
import { useSearchParams } from "react-router-dom";
import { Stack, Pagination } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DEFAULT_ITEMS_PER_PAGE } from "../../constants";

export const Homepage = () => {
	const {
		error,
		loading,
		tags,
		setLoading,
		setTags,
		setError,
		totalItems,
		setTotalItems
	} = useTagsContext();
	const [searchParams, setSearchParams] = useSearchParams();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const currentPage = searchParams.has("page")
		? Number(searchParams.get("page"))
		: 1;
	const pageSize = searchParams.has("pagesize")
		? String(searchParams.get("pagesize"))
		: DEFAULT_ITEMS_PER_PAGE.toString();
	const totalPages = Math.ceil(Number(totalItems) / Number(pageSize));

	const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
		event.preventDefault();
		setSearchParams((prevParams: URLSearchParams) => {
			const newParams = new URLSearchParams(prevParams.toString());
			newParams.set("page", page.toString());
			return newParams;
		});
	};

	useEffect(() => {
		const fetchTags = async () => {
			setLoading(true);
			try {
				const { tags, totalItems } = await getTags({
					sort: searchParams.has("sort")
						? (searchParams.get("sort") as SortBy)
						: SortBy.POPULAR,
					order: searchParams.has("order")
						? (searchParams.get("order") as Order)
						: Order.DESC,
					page: String(currentPage),
					pagesize: pageSize
				});

				setTags(tags);
				setTotalItems(totalItems);
				setLoading(false);
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				}
				setLoading(false);
			}
		};

		fetchTags();
	}, [searchParams]);

	useEffect(() => {
		if (loading) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [loading]);

	return (
		<section className={styles.wrapper}>
			{error && (
				<Alert severity="error" className={styles.error}>
					Error: {error}
				</Alert>
			)}

			{loading && (
				<div className={`${styles.overlay} ${loading ? styles.visible : ""}`}>
					<CircularProgress
						color="inherit"
						size={150}
						className={styles.loader}
					/>
				</div>
			)}
			{tags && tags.length > 0 && (
				<>
					<TableWithFilters rows={tags} />
					<Stack spacing={2} direction="row" justifyContent="flex-end">
						<Pagination
							count={totalPages}
							variant="outlined"
							shape="rounded"
							siblingCount={isMobile ? -2 : undefined}
							page={currentPage}
							onChange={handlePageChange}
						/>
					</Stack>
				</>
			)}
		</section>
	);
};
