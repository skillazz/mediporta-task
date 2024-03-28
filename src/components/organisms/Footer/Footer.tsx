import { DateTime } from "ts-luxon";

export const Footer = () => {
	const currentYear = DateTime.now().toFormat("yyyy");
	const copyrightSymbol = `\u00A9`;

	return <footer>{copyrightSymbol + currentYear}</footer>;
};
