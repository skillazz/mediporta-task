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
	setTags: (tags: Tag[]) => void;
	setLoading: (loading: boolean) => void;
	setError: (error: string | null) => void;
}

const initialTagsContext: ITagsContext = {
	tags: undefined,
	loading: true,
	error: null,
	setTags: () => {},
	setLoading: () => {},
	setError: () => {}
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

	const value: ITagsContext = {
		tags,
		loading,
		error,
		setTags,
		setLoading,
		setError
	};

	return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>;
};
