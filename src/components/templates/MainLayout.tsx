import { FC, PropsWithChildren } from "react";
import { Header } from "../organisms/Header/Header";
import { Footer } from "../organisms/Footer/Footer";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};
