import React, { useState, useEffect } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';

const API_URL = `https://api.tvmaze.com/search/shows?q=all`
function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        setMovies(data);
      })



  }, [])


  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/home">SHOW TIME </Navbar.Brand>
          <Navbar.Brand href="/home">Trending</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{ maxHeight: '100px' }}
              navbarScroll></Nav>

            <Form className="d-flex" autoComplete="off">
              <FormControl
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}>

              </FormControl>
              {/* <Button variant="secondary" type="submit">Search</Button> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        {movies.length !== 0 ? (
          <div className="container">
            <div className="grid">
              {
                movies.filter(e =>
                  e.show.name.toLowerCase().includes(query))

                  .map((movieReq, index) =>
                    <MovieBox key={index} movieReq={movieReq} />)
                    }
            </div>
          </div>
        ) : (
          <h2>Sorry !! No Movies Found</h2>
        )}
      </div>
    </>

  );
}

export default App;
