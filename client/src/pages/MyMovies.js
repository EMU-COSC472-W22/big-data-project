import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

function MyMovies() {
  
  /* Get all movies from the redis database */

  /* Delete movie from the redis database */
  const [movie, setMovie] = useState({});
  const deleteMovie = () => {
    axios.delete('http://localhost:3001/movies/delete/' , { movie: movie}).then((response) => {
      console.log(response.data);
    });
  }


  return (
    <Container>
    <h1 style={{paddingTop: "2rem"}}>My Movies</h1>
      <Stack direction="horizontal" gap={3}>
      </Stack>
      <button onClick={deleteMovie}>"Delete"</button>
    </Container>
  )
}

export default MyMovies;