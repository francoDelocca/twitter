import "./Tweets.css";
import Data from "../MOCK_DATA.json";
import logo from "../logo.svg";
import CreateTweetButton from "../CreateTweetButton/CreateTweetButton";

function template() {
  return (
      <div>
        <div className="tweet-category">
          <h2>Novedades</h2>
        </div>
        <div className="tweets-body">
          {
            Data.map((tweet, i) =>(
                <div className="tweet-body">
                    <div className="tweet-wrapper">
                        <div className="tweet-poster">
                            <img src={logo} className="tweet-poster-img" alt="logo"/>
                        </div>
                        <div className="tweet-content">
                            <span className="tweet-poster-fullName">{tweet.full_name}</span> <span className="tweet-poster-nickname">@{tweet.nickname}</span>
                            <p className="tweet-content-text">{tweet.body}</p>
                        </div>
                    </div>
                    <div className="tweet-info">
                        <span className="tweet-date">{tweet.created}</span> <span>via</span> <span className="tweet-info-method">{tweet.device}</span>
                    </div>
                </div>
            ))
          }
        </div>

          <CreateTweetButton/>

      </div>
  );
}

export default template;
