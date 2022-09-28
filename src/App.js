import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './component/Countries/Countries';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
   </div>
  );

  function LoadCountries(){
    const [countries, setCountries] = useState([])
    useEffect( () =>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    },[])
    return(
      <div>
        <h3>Visiting all the country of the world!!</h3>
        <h4>Countries: {countries.length}</h4>
      </div>
    )
  }
}

export default App;
