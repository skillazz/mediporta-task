import { Meta } from "@storybook/react";
import { Header } from "./Header";

export default {
	title: "Components/Header",
	component: Header
} as Meta;

export const Default = () => <Header />;

export const WithTitle = () => <Header title="Sample Title" />;
