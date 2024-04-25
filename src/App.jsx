import './App.css'
// import { useRef } from 'react'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import { useEffect, useState } from 'react'

function App() {
  const { movies: mappedMovies } = useMovies()
  // const inputRef = useRef()
  const { query, setQuery } = useState()
  const { error, setError } = useState(null)
 
  const handleSubmit = (event) => {
    event.preventDefault()
    // const {query} = Object.fromEntries(
    //   new window.FormData(event.target)
    // )  
    console.log({ query })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startWith(' ')) return
    setQuery(newQuery)
  }

  useEffect(() => {
    if(query===''){
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if(query.match(/^d+$/)){
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (query.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [query])

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas-p.tecnica</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' type="text" placeholder='Avengers, star wars, the matrix ..' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>

    </div >
  )
}
export default App
