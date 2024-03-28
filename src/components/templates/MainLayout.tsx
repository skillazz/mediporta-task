import { FC, PropsWithChildren } from "react";
import { Header } from "../organisms/Header/Header";
import { Footer } from "../organisms/Footer/Footer";
import { CONTENT } from "../../content";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header title={CONTENT.headerTitle} />
			{children}
			<Footer />
		</>
	);
};
