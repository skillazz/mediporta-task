import { Typography } from "@mui/material";
import { Logo } from "../../atoms/Logo/Logo";
import styles from "./Header.module.scss";
import { FC } from "react";
import { NavItem } from "../../atoms/NavItem/NavItem";

interface IProps {
	title?: string;
}

export const Header: FC<IProps> = ({ title }) => {
	return (
		<header className={styles.header}>
			<Logo />
			{title && (
				<Typography variant="body1" component="p" className={styles.title}>
					{title}
				</Typography>
			)}
			<nav>
				<ul>
					<NavItem></NavItem>
				</ul>
			</nav>
		</header>
	);
};
