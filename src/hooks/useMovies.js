// esta function es un Custom Hooks
import responseMovies from '../mocks/with-results.json'

export function useMovies(){
    const movies = responseMovies.Search
    const mappedMovies=movies?.map(movie=>({
      id: movie.imdbID,
      title:movie.Title,
      year:movie.Year,
      poster:movie.Poster,
      type:movie.Type
    }))
    return { movies: mappedMovies}
}
