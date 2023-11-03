// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import WebGL from './WebGL/index';
import React from 'react';
import WebGLExample from './WebGL/WebGLExample';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Container = styled.div`
`;

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      checked: false,
    }

  }
  render(){
    return (
      <AppWrapper>
        <Container>
          <WebGL />
        </Container>
      </AppWrapper>
    );
  }
}
