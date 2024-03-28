import ReactDOM from "react-dom/client";
import { Homepage } from "./pages/Homepage.tsx";
import "./assets/styles/main.scss";
import { StrictMode } from "react";
import "@fontsource/roboto";
import { MainLayout } from "./components/templates/MainLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<MainLayout>
			<Homepage />
		</MainLayout>
	</StrictMode>
);
