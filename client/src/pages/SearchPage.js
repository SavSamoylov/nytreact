import React from "react";
import API from "../api/api";
import {SearchCard, SearchResultCard} from "../components";

class SearchPage extends React.Component {
  constructor(){
    super();

    this.state = {
      articles: [],
      searchTerm: "",
      startYear: "",
      endYear: "",
    }

  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSearchSubmit = (e) => {

    e.preventDefault();

    console.log("Clicked")

    API.searchArticles(this.state.searchTerm, this.state.startYear, this.state.endYear)
    .then( res => {
      this.setState({
        articles: res.data.response.docs,
      })
      console.log(res.data.response.docs)
    })
    .catch(err => console.log(err));

  };

  render() {
    return (
      <div>
        <SearchCard articles={this.state.articles} searchTerm={this.state.searchTerm} startYear={this.state.startYear} endYear={this.state.endYear} handleInputChange={this.handleInputChange} handleSearchSubmit={this.handleSearchSubmit}/>
        <SearchResultCard articles={this.state.articles} />
      </div>
    )
  }
}

export default SearchPage;
