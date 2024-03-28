import { FC, HTMLAttributes, ReactNode } from "react";

interface IProps extends HTMLAttributes<HTMLSelectElement> {
	children: ReactNode;
}

export const Section: FC<IProps> = ({ children, ...props }) => {
	return <section {...props}>{children}</section>;
};
