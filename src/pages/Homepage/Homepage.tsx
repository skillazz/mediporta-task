import { useEffect } from "react";
import { getTags } from "../../services/stackexchange.tags";
import { Alert, CircularProgress } from "@mui/material";
import styles from "./Homepage.module.scss";
import { TableWithFilters } from "../../components/organisms/TableWithFilters/TableWithFilters";
import { Order, SortBy } from "../../types/Filters";
import { useTagsContext } from "../../context/TagsContext";

export const Homepage = () => {
	const { error, loading, tags, setLoading, setTags, setError } =
		useTagsContext();

	useEffect(() => {
		const fetchTags = async () => {
			setLoading(true);
			try {
				const params = new URLSearchParams(window.location.search);
				const { tags } = await getTags({
					sort: params.has("sort")
						? (params.get("sort") as SortBy)
						: SortBy.POPULAR,
					order: params.has("order")
						? (params.get("order") as Order)
						: Order.DESC
				});
				setTags(tags);
				setLoading(false);
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				}
				setLoading(false);
			}
		};

		fetchTags();
	}, [window.location.search]);

	return (
		<section className={styles.wrapper}>
			{error && (
				<Alert severity="error" className={styles.error}>
					Error: {error}
				</Alert>
			)}
			{loading && <CircularProgress color="inherit" size={150} />}
			{tags && tags.length > 0 && <TableWithFilters rows={tags} />}
		</section>
	);
};
