import axios from "axios";

export default{

  searchArticles: (topic, startYear, endYear) => {

    var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" +
    topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231";

    return axios.get(queryURL);
  },

  saveArticle: (articleObj) => {

      const obj = articleObj;

      return axios.post("/api/save", obj)

  },

  loadFavorites: () => {

    return axios.get("/api/save")

  }
}
