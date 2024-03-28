import axios from "axios";

const API_BASE_URL = "https://api.stackexchange.com/2.3";

interface IParams {
	order?: string;
	sort?: string;
	site?: string;
	filter?: string;
}

export const getTags = async ({
	order = "desc",
	sort = "popular",
	site = "stackoverflow",
	filter = "!nNPvSNVZBz"
}: IParams = {}): Promise<any> => {
	try {
		const params = new URLSearchParams({ order, sort, site, filter });
		const response = await axios.get(`${API_BASE_URL}/tags?${params}`);
		return response.data.items;
	} catch (error) {
		throw new Error("Failed to fetch tags from StackOverflow API");
	}
};
