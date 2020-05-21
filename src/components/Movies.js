import React from 'react'
import { MovieItem } from './MovieItem';
import {state} from '../../movies'

export const Movies = () => {
  
    return (
      <div className="card-deck">
        {state.movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
}