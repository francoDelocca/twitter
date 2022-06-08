import './App.css';
import Tweets from "../Tweets/Tweets";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import Register from "../Register/Register";
import CreateTweetModal from "../CreateTweetModal/CreateTweetModal";

function App() {
  return (
    <div className="App">
        <Header/>
        <SearchBar/>
        <CreateTweetModal/>
        {/*<Tweets/>*/}
        {/*<Register/>*/}

    </div>
  );
}

export default App;
