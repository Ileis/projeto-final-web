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
}

export class CommentService {
  static serverURL = `http://127.0.0.1:1337`;

  // Comments
  static getAllComments() {
    let dataURL = `${this.serverURL}/api/comments`;
    return axios.get(dataURL);
  }

  static getComment(commentId) {
    let dataURL = `${this.serverURL}/api/comments/${commentId}`;
    return axios.get(dataURL);
  }

  static createComment(comment) {
    let dataURL = `${this.serverURL}/api/comments/`;
    return axios.post(dataURL, comment);
  }

  static updateComment(comment, commentId) {
    let dataURL = `${this.serverURL}/api/comments/${commentId}`;
    return axios.put(dataURL, comment);
  }

  static deleteComment(commentId) {
    let dataURL = `${this.serverURL}/api/comments/${commentId}`;
    return axios.delete(dataURL);
  }
}
