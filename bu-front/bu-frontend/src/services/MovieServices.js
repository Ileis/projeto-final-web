import axios from "axios";

export class MovieService {
  static serverURL = `http://localhost:9000`;

  static getAllMovies() {
    let dataURL = `${this.serverURL}/movies`;
    return axios.get(dataURL);
  }

  static getMovie(movieId) {
    let dataURL = `${this.serverURL}/movies/${movieId}`;
    return axios.get(dataURL);
  }

  static createMovie(movie) {
    let dataURL = `${this.serverURL}/movies/`;
    return axios.post(dataURL, movie);
  }

  static updateMovie(movie, movieId) {
    let dataURL = `${this.serverURL}/movies/${movieId}`;
    return axios.put(dataURL, movie);
  }

  static deleteMovie(movieId) {
    let dataURL = `${this.serverURL}/movies/${movieId}`;
    return axios.delete(dataURL);
  }

  static getAllGenres() {
    let dataURL = `${this.serverURL}/genres`;
    return axios.get(dataURL);
  }

  static getGenre(movie) {
    let genreId = movie.genreId;
    let dataURL = `${this.serverURL}/genres/${genreId}`;
    return axios.get(dataURL);
  }

  static getAllGroups() {
    let dataURL = `${this.serverURL}/groups`;
    return axios.get(dataURL);
  }

  static getGroup(movie) {
    let groupId = movie.groupId;
    let dataURL = `${this.serverURL}/groups/${groupId}`;
    return axios.get(dataURL);
  }
}
