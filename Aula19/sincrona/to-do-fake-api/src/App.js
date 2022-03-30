import './App.css';

import { useEffect, useState } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

// import data from './data';

function App() {
  const [toDos, setToDos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    getToDos();
  }, []);

  // GET
  async function getToDos() {
    setLoading(true);
    try {
      const data = await fetch('http://localhost:3000/api/toDo');
      const { toDos } = await data.json();
      setToDos(toDos);

      console.log(toDos);
    } catch (error) {
      alert(`There was an error connecting to the server`);
    }
    setLoading(false);
  }

  // POST
  async function handleSubmit(event) {
    event.preventDefault();

    if(!title || !description || !date) {
      alert('Please fill in all fields!');
    } else {
      // alert('Fields correctly filled out');
      const body = {
        title,
        description,
        status: false,
        date
      };

      try {
        await fetch('http://localhost:3000/api/toDo', {
          method: 'POST',
          body: JSON.stringify(body)
        });
        alert('Successfully registered!');
        getToDos();
      } catch (error) {
        alert('Error when registering To Do');
      }
    };
  }

  // DELETE
  async function deleteToDo(id) {
    try {
      await fetch(`http://localhost:3000/api/toDo/${id}`, {
        method: "DELETE"
      });
      alert('Successfully deleted To Do');
      getToDos();
    } catch (error) {
      alert('Error when deleting To Do');
    }; 
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>To Do List - 2.0</h1>
        <div className="inputs">
          <label>
            <span>Title</span>
            <input 
              placeholder="Title" 
              value={title} 
              onChange={(event) => setTitle(event.target.value)} 
            />
          </label>
          <label>
            <span>Description</span>
            <input 
              placeholder="Description" 
              value={description} 
              onChange={(event) => setDescription(event.target.value)} 
            />
          </label>
          <div className="row">
            <label>
              <span>Date</span>
              <input 
                type="date" 
                placeholder="Date" 
                value={date} 
                onChange={(event) => setDate(event.target.value)} 
              />
            </label>
          </div>
        </div>
        <div className="container-buttons">
          <button type="submit">Save</button>
          <button>Clear</button>
        </div>
      </form>
      <ul>
        { !loading && toDos.map((toDo) => (
          <li>
            <div>
              <h2>{toDo.title}</h2>
              <p>{toDo.description}</p>
              <p>{toDo.date}</p>
            </div>
            <div className="container-buttons">
              <FiEdit size={20} color="#444" />
              <FiTrash size={20} color="#444" onClick={() => deleteToDo(toDo.id)} />
            </div>
          </li>
        ))}
        { loading && <h3>Loading data...</h3> }
      </ul>
    </div>
  );
}

export default App;