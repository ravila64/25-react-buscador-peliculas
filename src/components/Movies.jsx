/* eslint-disable react/prop-types */
// Esto es un componente
function ListOfMovies({ movies }) {
    return (
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )
}

function noMoviesResults () {
    return (
        <p>No se encontraron Peliculas para esta busqueda</p>
    )
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0
    return (
        hasMovies
        ? <ListOfMovies movies={movies} />
        : <noMoviesResults />
    )
}
