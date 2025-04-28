import './Genres.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function getData() {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}`
        );
        setGenres(response.data.genres.slice(0, 10)); 
      
    }

    getData();
  }, []);

  return (
    <div className="genres-container">
      {genres.map((genre) => (
        <Link to={`/genre/${genre.id}`} key={genre.id} className="genre-link">
          <div className="genre-card">
            <h1>{genre.name}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Genres;