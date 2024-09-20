import './App.css';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import { useState, useEffect } from 'react';


//document.body.innerHTML = '<div id="root2"></div>';       // Essa linha APAGA todo o html para renderizar o novo conteudo, não usar caso for reaproveitar o HTML existente
const root = createRoot(document.getElementById('root2'));
root.render(<h1>Hello, world from the frontend</h1>);

function App() {

  const [people, setPeople] = useState([]);

  useEffect(() =>{
    axios.get('/api').then(res => setPeople(res.data));
  }, [])

  return people.map((p, index) => {
    return ( 
      <div>
          <p key={index}>{p.id} {p.name} {p.age}</p>
      </div>  // Comentario para teste
    )
  } )
}


export default App;
