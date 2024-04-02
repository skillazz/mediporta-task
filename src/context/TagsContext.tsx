import {
	createContext,
	FC,
	PropsWithChildren,
	useContext,
	useState
} from "react";
import { Tag } from "../types/Tags";

interface ITagsContext {
	tags: Tag[] | undefined;
	loading: boolean;
	error: string | null;
	totalItems: number | undefined;
	setTags: (tags: Tag[]) => void;
	setLoading: (loading: boolean) => void;
	setError: (error: string | null) => void;
	setTotalItems: (totalPages: number) => void;
}

const initialTagsContext: ITagsContext = {
	tags: undefined,
	loading: true,
	error: null,
	totalItems: undefined,
	setTags: () => {},
	setLoading: () => {},
	setError: () => {},
	setTotalItems: () => {}
};

const TagsContext = createContext<ITagsContext>(initialTagsContext);

export const useTagsContext = (): ITagsContext => {
	const context = useContext(TagsContext);
	if (!context) {
		throw new Error("useTagsContext must be used within a TagsProvider");
	}
	return context;
};
export const TagsProvider: FC<PropsWithChildren> = ({ children }) => {
	const [tags, setTags] = useState<Tag[] | undefined>(initialTagsContext.tags);
	const [loading, setLoading] = useState<boolean>(initialTagsContext.loading);
	const [error, setError] = useState<string | null>(initialTagsContext.error);
	const [totalItems, setTotalItems] = useState<number | undefined>(
		initialTagsContext.totalItems
	);

	const value: ITagsContext = {
		tags,
		loading,
		error,
		totalItems,
		setTags,
		setLoading,
		setError,
		setTotalItems
	};

	return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>;
};
