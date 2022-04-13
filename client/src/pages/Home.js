import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Home() {

  const [movieTitle, setMovieTitle] = useState("");
  const [movie, setMovie] = useState({});
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setIsEmpty(Object.keys(movie).length === 0);
  }, [movie]);

  /* Search movie from OMDb API */
  const searchMovie = () => {
    let formattedMovieTitle = movieTitle.split(' ').join('+');
    axios.get(`http://localhost:3001/movies/search/${formattedMovieTitle}`).then((response) => {
      console.log(response.data);  
      setMovie(response.data);
    });
  }

  /* Add movie to the redis database */
  const addMovie = () => {

  }

  return (
    <Container>
      <div >
        <h1 className='text-align-center' style={{paddingTop: "2rem"}} >Search Movies From IMDb</h1>
        <Stack direction="horizontal" gap={3}>
          <Form.Control value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} className="me-auto" placeholder="Search for a movie title..." />
          <Button variant="secondary" onClick={searchMovie}>Search</Button>
        </Stack>
        <br />
        { isEmpty ? 
          <p>No movie searched or no movie was found...</p> : 
          <Card style={{ flexDirection: 'row'}}>
            <Card.Img variant="top" src={movie.Poster} alt={movie.Title + " movie poster"} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>
                <p>{movie.Plot}</p>
              </Card.Text>
              <Button variant='success' onClick={addMovie}>Add to list</Button>
            </Card.Body>
          </Card> }
          <br />
      </div>
    </Container>
  );
}

export default Home;