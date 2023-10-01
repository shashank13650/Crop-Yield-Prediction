import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar';
import CropForm from './components/CropForm';
import './App.css';


const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <CropForm />
      </Container>
    </div>
  );
};

export default App;
