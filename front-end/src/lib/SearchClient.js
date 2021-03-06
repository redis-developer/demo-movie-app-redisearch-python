import axios from "axios";

const pythonRestApiServer =
  process.env.VUE_APP_SEARCH_API_PYTHON || "http://localhost:8087";

const resolveServer = () => pythonRestApiServer;

export const SearchClient = {
  async status() {
    return "OK";
  },

  async search(queryString, page, perPage, sortBy, server) {
    let restServer = resolveServer(server);

    let offset = perPage * page;
    let limit = perPage;

    let url = `${restServer}/api/1.0/movies/search?q=${encodeURIComponent(
      queryString
    )}&offset=${offset}&limit=${limit}`;

    // add sort by if present
    if (sortBy) {
      let sortOptions = sortBy.split(":");
      url =
        url + `&sortby=${sortOptions[0]}&ascending=${sortOptions[1] === "asc"}`;
    }

    console.log(`Calling (${server}) : ${url}`);

    return axios.get(url);
  },

  async getMovieGroupBy(server, field) {
    let restServer = resolveServer(server);

    let url = `${restServer}/api/1.0/movies/group_by/${field}`;
    console.log(`Calling (${server}) : ${url}`);
    return axios.get(url);
  },

  async getMovie(server, id) {
    let restServer = resolveServer(server);

    let url = `${restServer}/api/1.0/movies/${id}`;
    console.log(`Calling (${server}) : ${url}`);
    return axios.get(url);
  },

  async updateMovie(server, id, movie) {
    let restServer = resolveServer(server);
    let url = `${restServer}/api/1.0/movies/${id}`;
    return axios.post(url, movie);
  },

  async getMovieComment(server, movieId) {
    let restServer = resolveServer(server);
    let url = `${restServer}/api/1.0/movies/${movieId}/comments`;
    console.log(`Calling ${url}`);
    return axios.get(url);
  },

  async saveNewComment(server, movieId, comment) {
    let restServer = resolveServer(server);
    let url = `${restServer}/api/1.0/movies/${movieId}/comments`;
    console.log(`Calling POST ${url}`);
    return axios.post(url, comment);
  },

  async deleteCommentById(server, commentId) {
    let restServer = resolveServer(server);
    let url = `${restServer}/api/1.0/comments/${commentId}`;
    console.log(`Calling DELETE ${url}`);
    return axios.delete(url);
  },
};
