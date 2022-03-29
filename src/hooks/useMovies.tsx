import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBMoviesResponse } from "../interfaces/movieInterface";


export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
  const [pelicularPopulares, setPelicularPopulares] = useState<Movie[]>([]);

  const getMovies = async () => {
    const respNowPlaying = await movieDB.get<MovieDBMoviesResponse>('/now_playing');
    const respPopular = await movieDB.get<MovieDBMoviesResponse>('/popular');

    setPeliculasEnCine(respNowPlaying.data.results);
    setPelicularPopulares(respPopular.data.results);

    setIsLoading(false);
  }
  useEffect(() => {
    getMovies()
  }, [])

  return {
    peliculasEnCine,
    pelicularPopulares,
    isLoading,
  }
}

