import ReactDOM from "react-dom/client";
import { Homepage } from "./pages/Homepage/Homepage.tsx";
import "./assets/styles/main.scss";
import { StrictMode } from "react";
import "@fontsource/roboto";
import { MainLayout } from "./components/templates/MainLayout.tsx";
import { TagsProvider } from "./context/TagsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<TagsProvider>
			<MainLayout>
				<Homepage />
			</MainLayout>
		</TagsProvider>
	</StrictMode>
);
