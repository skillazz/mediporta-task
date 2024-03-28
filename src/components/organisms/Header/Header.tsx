import { Logo } from "../../atoms/Logo/Logo";
import styles from "./Header.module.scss";

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
		</header>
	);
};
