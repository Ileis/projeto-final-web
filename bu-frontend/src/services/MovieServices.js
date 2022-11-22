import axios from "axios";

export class MovieService {
  static serverURL = `http://127.0.0.1:1337`;

  // Movies
  static getAllMovies() {
    let dataURL = `${this.serverURL}/api/movies`;
    return axios.get(dataURL);
  }

  static getMovie(movieId) {
    let dataURL = `${this.serverURL}/api/movies/${movieId}`;
    return axios.get(dataURL);
  }

  static createMovie(movie) {
    let dataURL = `${this.serverURL}/api/movies`;
    return axios.post(dataURL, movie);
  }

  static updateMovie(movie, movieId) {
    let dataURL = `${this.serverURL}/api/movies/${movieId}`;
    return axios.put(dataURL, movie);
  }

  static deleteMovie(movieId) {
    let dataURL = `${this.serverURL}/api/movies/${movieId}`;
    return axios.delete(dataURL);
  }

  // Genres
  static getAllGenres() {
    let dataURL = `${this.serverURL}/genres`;
    return axios.get(dataURL);
  }

  static getGenre(movie) {
    let genreId = movie.genreId;
    let dataURL = `${this.serverURL}/genres/${genreId}`;
    return axios.get(dataURL);
  }

  // Groups
  static getAllGroups() {
    let dataURL = `${this.serverURL}/groups`;
    return axios.get(dataURL);
  }

  static getGroup(movie) {
    let groupId = movie.groupId;
    let dataURL = `${this.serverURL}/groups/${groupId}`;
    return axios.get(dataURL);
  }

  // Comments
  static getAllComments() {
    let dataURL = `${this.serverURL}/comments`;
    return axios.get(dataURL);
  }

  static getComment(commentId) {
    let dataURL = `${this.serverURL}/comments/${commentId}`;
    return axios.get(dataURL);
  }

  static createComment(comment) {
    let dataURL = `${this.serverURL}/comments/`;
    return axios.post(dataURL, comment);
  }

  static updateComment(comment, commentId) {
    let dataURL = `${this.serverURL}/comments/${commentId}`;
    return axios.put(dataURL, comment);
  }

  static deleteComment(commentId) {
    let dataURL = `${this.serverURL}/comments/${commentId}`;
    return axios.delete(dataURL);
  }
}
