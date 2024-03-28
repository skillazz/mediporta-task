import { useEffect, useState } from "react";
import { getTags } from "../../services/stackexchange.tags";
import { Tag } from "../../types/Tags";
import { Alert, CircularProgress } from "@mui/material";
import styles from "./Homepage.module.scss";

export const Homepage = () => {
	const [tags, setTags] = useState<Tag[]>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	useEffect(() => {
		const fetchTags = async () => {
			try {
				//currentPage, totalPages to be added
				const { tags } = await getTags();
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
	}, []);

	return (
		<section className={styles.wrapper}>
			{error && <Alert severity="error">Error: {error}</Alert>}
			{loading && <CircularProgress color="inherit" size={150} />}
			{tags && tags.length > 0 && (
				<ul>
					{tags.map((tag) => (
						<li key={tag.name}>
							{tag.name} - {tag.count} posts
						</li>
					))}
				</ul>
			)}
		</section>
	);
};
