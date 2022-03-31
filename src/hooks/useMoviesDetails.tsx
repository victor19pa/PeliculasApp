import React from 'react'
import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';

interface MovieDetails {
  cast: Cast[];
  isLoading: Boolean;
  movieFull?: MovieFull;
}

export const useMoviesDetails = ( movieId: number) => {

  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  });

  const getMovieDetails =  async() => {
    // https://api.themoviedb.org/3/movie/696806?api_key=aa672f3fce5d4ef4b7c137359c0cd250&language=en-US&page=1
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

    const [ movieDetailsResponse, castPromiseResponse] = await Promise.all([ movieDetailsPromise, castPromise]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResponse.data,
      cast: castPromiseResponse.data.cast
    })

  }

  useEffect(() => {
    getMovieDetails();
  }, [])
  
  return{
    ...state
  }
}