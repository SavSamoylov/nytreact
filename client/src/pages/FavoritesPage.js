import React from "react";
import API from "../api/api";
import {FavoritesCard} from "../components"

class FavoritesPage extends React.Component {
  constructor(){
    super();

    this.state = {
      articles: [],
    }

  };

  componentDidMount(){
    this.handleLoadArticles();
  }

  handleLoadArticles = () => {
    console.log("QUERYING")
    API.loadFavorites()
    .then( (res) => {
      console.log(res.data)
      this.setState({
        articles: res.data
      })
    })
    .catch(err => console.log(err));

  }


  render() {
    return (
      <div>
        <FavoritesCard articles={this.state.articles} />
      </div>
    )
  }
}

export default FavoritesPage;
