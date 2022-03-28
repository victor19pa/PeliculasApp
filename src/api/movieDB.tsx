import axios from "axios";

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params:{
    api_key: 'aa672f3fce5d4ef4b7c137359c0cd250',
    language: 'en-US'
  }
})

export default movieDB;