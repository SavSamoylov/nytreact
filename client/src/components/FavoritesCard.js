import React from "react";
import API from "../api/api";
import "./Card.css";

class FavoritesCard extends React.Component {

  handleDelete = (e) => {

    const articleId = e.target.getAttribute("data-id");

    const articleObj = {
      id: articleId,
    };


    API.deleteFavorites(articleObj)
      .then( (res) => {
        console.log(res)
        document.getElementById(articleId).remove();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">Favorites</div>
        <div className="card-body">
          {this.props.articles.length ? (
            <div>
              {this.props.articles.map((article, index) => (
                <div className="card resultCard" key={article._id} id={article._id}>
                  <div className="card-body">
                    <span className="badge badge-dark">{index + 1}</span>
                    <h4 className="card-title"><a href={article.url} target="_blank" className="card-link">{article.title}</a></h4>
                    <h6 className="card-subtitle mb-2 text-muted">{article.date}</h6>
                    <a href="#/" onClick={this.handleDelete} data-id={article._id} className="btn btn-danger btn-sm">Delete Favorites</a>
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

export default FavoritesCard;
