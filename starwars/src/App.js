import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import StarWarsCard from './components/StarWarsCard';

const App = () => {
  const [ data, setData ] = useState( [] );

  useEffect( () => {
    Axios.get( 'https://swapi.co/api/people/' )
      .then( res => setData( res.data.results ) )
      .catch( err => console.log( err ) );
  }, []);

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <Container>
        <Row>
          {data.map(person => {
            return (
              <Col xs='6' sm='6' md='4' lg='4' xl='3'>
                <StarWarsCard personData={person} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default App;
