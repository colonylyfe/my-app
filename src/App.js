// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import WebGL from './WebGL/index';
import React from 'react';

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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
