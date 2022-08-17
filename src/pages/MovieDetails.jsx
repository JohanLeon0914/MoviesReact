import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../util/httpClient';
import styles from './MovieDetails.module.css'

export function MovieDetails() {

  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    get("movie/" + movieId).then((data) => {
      setMovie(data)
     })  
}, [movieId]);
  
  //PARA EVITAR QUE LA PRIMERA VER QUE SE EJECUTE EL MODULO NO CARGE UNA PELICULA NULL
  if(!movie) { 
    return null
  }

  const imagenUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return( 
    <div className={styles.detailsContainer}>
        <img className={styles.col + " " + styles.movieImage}
         src={imagenUrl}
        alt={movie.title} />
        <div className={styles.col + " " + styles.MovieDetails}>
          <p className='styles.firstItem'>
            <strong>Title:</strong> {movie.title}
          </p>
          <p>
           <strong>Genres: </strong>
           {movie.genres.map((genre) => genre.name ).join(', ')} {/*Para que los elementos del arreglo se separen con coma y espacio*/}
          </p>
          <p>
            <strong>Description:</strong> {movie.overview}
          </p>
        </div>
    </div>
    )
}