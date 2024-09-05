import React,{useState,useEffect} from 'react'; 
import 'whatwg-fetch'; 
import logo from './logo.svg'; 
import './App.css'; 
 
 
function App() { 
  const [data,setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
 
  useEffect(() => { 
    const fetchData = async () => { 
      try{ 
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
        const result= await response.json(); 
        console.log(result); 
        setData(result); 
        setLoading(false); 
      }catch(error){ 
        console.log('error',error); 
        setLoading(false); 
      } 
    }; 
    fetchData(); 
  },[]); 
 
  return ( 
    <div className="App"> 
      <header className="App-header"> 
        <h1>BIENVENIDO A MI PROYECTO WEB</h1> 
       <nav> 
          <ul> 
            <li><a href="/">Inicio</a></li> 
            <li><a href="/products">productos </a></li> 
            <li><a href="/contact">Contacto</a></li> 
          </ul> 
             
        </nav> 
        <img src={logo} className="App-logo" alt="logo" /> 
        <p> 
          Edit <code>src/App.js</code> and save to reload. 
        </p> 
        <a 
          className="App-link" 
          href="/" 
          target="_blank" 
          rel="noopener noreferrer" 
        > 
          Aprende React 
        </a> 
      </header> 
      <main> 
        <h2>Inicio de pagina</h2> 
        <p>Este es el contenido de la pagina</p> 
        <button onClick={()=> alert("boton presionado")}>Presioname</button> 
        <h3>POST DESDE LA API</h3> 
        {loading ?( 
           <p>Cargando Datos...</p>  
        ): ( 
          <ul> 
            {data.map(item=> ( 
              <li key={item.id}> 
                <h3>{item.title}</h3> 
                <p>{item.body}</p> 
              </li> 
            ))} 
          </ul> 
        )} 
      </main> 
    </div> 
  ); 
} 
 
export default App;