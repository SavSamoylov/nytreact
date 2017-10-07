import React from "react";
import "./Card.css"

class FavoritesCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Favorites</div>
        <div className="card-body">
          Fav Content
          {this.props.articles.length}
        </div>
      </div>
    )
  }
}

export default FavoritesCard;
