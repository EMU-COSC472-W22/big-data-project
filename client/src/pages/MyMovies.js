import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyMovies() {

  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState({});
  const [isEmpty, setIsEmpty] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setIsEmpty(movieList.length === 0);
  }, [movieList]);
  
  /* Get all movies from the redis database */
  useEffect(() => {
    // if (count > 0) {
      axios.get('http://localhost:3001/movies/list').then((response) => {
        const rawList = response.data;
        let newList = [];
        if (rawList !== null) {
          rawList.forEach(element => newList.push(JSON.parse(element)));
          console.log(newList)
          setCount(newList.length);
          setMovieList(newList);
        }
      });
    // }
    
  }, [count])

  /* Delete movie from the redis database */
  const deleteMovie = (index) => {
    axios.delete("http://localhost:3001/movies/delete", { data: { item: movieList[index] } }).then((response) => {
      console.log(response.data);
    });
    
    let newCount = count - 1;
    setCount(newCount);

    let tempArray = [...movieList];
    const deletedIndex = movieList[index];
    if (deletedIndex > -1) {
      tempArray.splice(deletedIndex, 1);
    }
    setMovieList(tempArray);
  }

  return (
    <Container>
    <h1 style={{paddingTop: "2rem"}}>My Movies</h1>
      <Stack direction="horizontal" gap={3}>
      </Stack>
      { isEmpty ? 
        <p>No movies in the list</p> :
        <Row xs={1} sm={2} md={3} lg={4} className="g-5">
        {  movieList.map((value, index) => {
            return (
              
                <Col>
                  <Card>
                    <Card.Img variant="top" src={value.Poster} alt={value.Title + " movie poster"} />
                    <Card.Body>
                      <Card.Title>{value.Title}</Card.Title>
                      <Card.Text>
                        <p>{value.Plot}</p>
                      </Card.Text>
                      <Button variant='danger' onClick={() => deleteMovie(index)}>Delete</Button>
                    </Card.Body>
                  </Card>
                </Col>
              
            )
          })}
        </Row>
        }
      
    </Container>
  )
}

export default MyMovies;