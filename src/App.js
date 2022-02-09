import React from 'react';
import './App.scss';
import './scss/styles.scss'
import Header from './header';
import'./css/styles.css'
import About from './about';
import Services from './services';
import Skills from './skills';
import Footer from './footer';
import "bootstrap/dist/css/bootstrap.min.css";




class App extends React.Component{
  constructor(){
    console.log('constructor')
    super();

  }
  componentDidMount() {
    // CALLING APIS
    console.log("DID MOUNT");
  }
  render() {
    console.log("RENDER");
    return (
      <div>
  <Header> </Header>
  <About></About>
  <Skills></Skills>

  <Services></Services>
  <Footer></Footer>
      </div>
    )
  } 
}

// function App() {
//   return (
//     <div className="App">
//         <h1> Hello </h1>
//         <head className="App-header"/>
      
//     </div>
//   );
// }

export default App;
