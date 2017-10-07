import React from "react";
import "./Card.css"

class FavoritesCard extends React.Component {
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
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No Favorites to Display</p>
          )}
        </div>
      </div>
    )
  }
}

export default FavoritesCard;
