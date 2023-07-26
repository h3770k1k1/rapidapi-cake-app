import "./App.css";
import RecipePage from "./components/RecipePage";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
	const url = "https://the-birthday-cake-db.p.rapidapi.com/";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "803d7d600emshe3481c95cd86cf9p11480cjsn6465da821ec9",
			"X-RapidAPI-Host": "the-birthday-cake-db.p.rapidapi.com",
		},
	};

	const fetchData = async () => {
		try {
			const response = await fetch(url, options);
			const result = await response.json();

			console.log(result);
		} catch (error) {
			console.error(error);
		}
	};

	const handleButtonClick = () => {
		fetchData();
	};

	return (
		
		<div className="App"><Navbar/>
		{/*<button id="myButton" onClick={handleButtonClick}>	button
			</button>*/}
		<SearchBar/>
			<RecipePage />
		</div>
	);
}

export default App;
