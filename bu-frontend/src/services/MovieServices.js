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

  static createMovie(movie, token) {
    let dataURL = `${this.serverURL}/api/movies`;
    return axios.post(dataURL, movie,
       {
          headers:{
            Authorization: `Bearer ${token}`,
          }
        }
      );
  }

  static updateMovie(movie, movieId, token) {
    let dataURL = `${this.serverURL}/api/movies/${movieId}`;
    return axios.put(dataURL, movie, 
      {
      headers:{
        Authorization: `Bearer ${token}`,
      }
    });
  }

  static deleteMovie(movieId, token) {
    let dataURL = `${this.serverURL}/api/movies/${movieId}`;
    return axios.delete(dataURL,
      {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      });
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

  static deleteComment(commentId, token) {
    let dataURL = `${this.serverURL}/api/comments/${commentId}`;
    return axios.delete(dataURL, 
      {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      }
      );
  }
}

export class UserService {
  static serverURL = `http://127.0.0.1:1337`;

  static createUser(user){
    let dataURL = `${this.serverURL}/api/auth/local/register`;
    return axios.post(dataURL, user);
  }

  static loginUser(user){
    let dataURL = `${this.serverURL}/api/auth/local`;
    return axios.post(dataURL, user);
  }

  // static getMe(token){
  //   let dataURL = `${this.serverURL}/api/users/me`;
  //   return axios.get(dataURL, {
  //     headers:{
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  // }
}