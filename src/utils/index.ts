export const attachUrlParams = (paramsToAdd: Record<string, string>) => {
	const urlParams = new URLSearchParams(window.location.search);
	for (const key in paramsToAdd) {
		urlParams.set(key, paramsToAdd[key]);
	}
	const newUrlParamsString = urlParams.toString();
	window.history.replaceState(
		undefined,
		"",
		`${window.location.pathname}?${newUrlParamsString}`
	);
	return newUrlParamsString;
};
