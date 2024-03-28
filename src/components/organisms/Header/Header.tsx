import { Typography } from "@mui/material";
import { Logo } from "../../atoms/Logo/Logo";
import styles from "./Header.module.scss";
import { FC } from "react";
import { DateTime } from "ts-luxon";

interface IProps {
	title?: string;
}

export const Header: FC<IProps> = ({ title }) => {
	const currentYear = DateTime.now().toFormat("yyyy");
	const copyrightSymbol = `\u00A9`;
	return (
		<header className={styles.header}>
			<Logo />
			{title && (
				<Typography variant="body1" component="p" className={styles.title}>
					{title}
				</Typography>
			)}

			<span className={styles.date}>{copyrightSymbol + currentYear}</span>
		</header>
	);
};
