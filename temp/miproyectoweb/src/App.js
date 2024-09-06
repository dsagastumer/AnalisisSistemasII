import React, { useState, useEffect } from 'react'; 
import 'whatwg-fetch'; 
import logo from './logo.svg'; 
import './App.css'; 
 
function App() { 
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  // Estado para manejar errores
  const [showPosts, setShowPosts] = useState(false); // Estado para mostrar/ocultar los posts


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
        setError('Error al cargar los datos, intentelo más tarde.');
        setLoading(false); 
      } 
    }; 
    fetchData(); 
  },[]); 

  const handleButtonClick = () => {
    alert("¡Botón presionado!")
  };

  const togglePosts = () => {
    setShowPosts(!showPosts);
  };

  return (
    <div>
      <header className='App'>
        <h1>BIENVINIDO A MI PROYECTO WEB</h1>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/products">Producto</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </nav>
        <img src={logo} className='App-logo' alt="logo" />
      </header>

      <main className="App-main">
        <h2>Inicio de página</h2>
        <p>Este es el contenido de la página</p>
        <button onClick={handleButtonClick}>Presioname!</button>

        {/*Botón para mostrar y ocultar los posts*/}
        <button onClick={togglePosts}>
          {showPosts ? "Ocultar Posts": "Mostrar Posts"}
        </button>

        {error && <p style={{color: 'red'}}>{error}</p>}

        {showPosts &&(
          <div>
            <h3>POSTS DESDE LA API</h3>
            {loading ? (
              <p>Cargando Datos...</p>
            ) : (
              <ul>
                {data.map(item => (
                  <li key={item.id}>
                    <h3>{item.id}</h3>
                    <p>{item.body}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
 
 