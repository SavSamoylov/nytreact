import React from "react";
import API from "../api/api";
import "./Card.css";

class SearchResultCard extends React.Component {

  handleFavorite = (e) => {

    const articleId = e.target.getAttribute("data-id");

    const articleObj = {
      headline: e.target.getAttribute("data-title"),
      pub_date: e.target.getAttribute("data-date"),
      web_url: e.target.getAttribute("data-url")
    }

  API.saveArticle(articleObj)
    .then( (res) => {
      console.log(res)
      document.getElementById(articleId).remove();
    })
    .catch(err => console.log(err));

  }

  render() {
    return (
      <div className="card">
        <div className="card-header">Search Results</div>
        <div className="card-body" id="searchResults">
          {this.props.articles.length ? (
            <div>
              {this.props.articles.map((article, index) => (
                <div className="card resultCard" key={article._id} id={article._id}>
                  <div className="card-body">
                    <span className="badge badge-dark">{index + 1}</span>
                    <h4 className="card-title"><a href={article.web_url} target="_blank" className="card-link">{article.headline.main}</a></h4>
                    <h6 className="card-subtitle mb-2 text-muted">{article.pub_date}</h6>
                    <a href="#/" onClick={this.handleFavorite} data-id={article._id} data-title={article.headline.main} data-url={article.web_url} data-date={article.pub_date} className="btn btn-primary pull-right">Add to Favorites</a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No Results to Display</p>
          )}
        </div>
      </div>
    )
  }
}

export default SearchResultCard;
