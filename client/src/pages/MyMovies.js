import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

function MyMovies() {
  
  /* Get all movies from the redis database */

  /* Delete movie from the redis database */
  
  return (
    <Container>
    <h1 style={{paddingTop: "2rem"}}>My Movies</h1>
      <Stack direction="horizontal" gap={3}>
        <Form.Control className="me-auto" placeholder="Search..." />
        <Button variant="secondary">Submit</Button>
      </Stack>
    </Container>
  )
}

export default MyMovies;