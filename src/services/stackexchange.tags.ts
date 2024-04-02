import axios from "axios";
import { Tag } from "../types/Tags";
import { v4 as uuid } from "uuid";
import { Order, SortBy } from "../types/Filters";
import { DEFAULT_ITEMS_PER_PAGE } from "../constants";

const API_BASE_URL = "https://api.stackexchange.com/2.3";

interface IParams {
	order?: Order;
	sort?: SortBy;
	pagesize?: string;
	page?: string;
	filter?: string;
	site?: string;
}

interface TagsResponseData {
	tags: Tag[];
	currentPage: number;
	totalItems: number;
}

export const getTags = async ({
	order = Order.DESC,
	sort = SortBy.POPULAR,
	page = "1",
	pagesize = String(DEFAULT_ITEMS_PER_PAGE),
	filter = "!nNPvSNVZBz",
	site = "stackoverflow"
}: IParams = {}): Promise<TagsResponseData> => {
	try {
		const params = new URLSearchParams({
			order,
			sort,
			page,
			pagesize,
			filter,
			site
		});
		const response = await axios.get(`${API_BASE_URL}/tags?${params}`);
		const tagsWithId = response.data.items.map((item: Tag) => ({
			id: uuid(),
			...item
		}));
		return {
			tags: tagsWithId,
			currentPage: response.data.page,
			totalItems: response.data.total
		};
	} catch (error) {
		throw new Error("Failed to fetch tags from StackOverflow API");
	}
};
