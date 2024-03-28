import { ParsedUrlQuery, encode, decode } from "querystring";

export const attachUrlParams = (paramsToAdd: ParsedUrlQuery) => {
	const currentUrlParams = decode(window.location.search.substring(1));
	const mergedParams = {
		...currentUrlParams,
		...paramsToAdd
	};
	for (let key in mergedParams) {
		if (mergedParams[key] === undefined) delete mergedParams[key];
	}
	return encode(mergedParams);
};
