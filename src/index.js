import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FavouritesPage from "./components/subpages/FavouritesPage";
import Recipe from "./components/subpages/Recipe";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/favourites",
		element: <FavouritesPage />,
	},
	{
		path: "/recipe/:title/:recipeId/:difficulty", // Dodajemy parametr "title" do ścieżki
		element: <Recipe />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ThemeProvider theme={theme}>
	<RouterProvider router={router}>
		<BrowserRouter>
			{" "}
			{/* Dodajemy BrowserRouter na najwyższym poziomie */}
			{router}
		</BrowserRouter>
	</RouterProvider>
	</ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
