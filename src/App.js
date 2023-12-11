import { useState } from 'react';
import './App.css';


function App() {
  const[data,setUser]=useState(0)
  function incre(){
    setUser(data +1)
  }
  function decre(){
    setUser(data -1)
  }
  function reset(){
    setUser(0)
  }
  return (
    <div>
      <div className='container w-50 mt-5'>
        <table className='text-center container w-50'>
          <tr>
            <td colSpan={3} className='text-center'>{data}</td>
          </tr>
          <tr>
            <td><button onClick={incre} className='btn btn-success' type='button'>Increment</button></td>
            <td><button onClick={reset} className='btn btn-danger'>Reset</button></td>
            <td><button onClick={decre} className='btn btn-success'>Decrement</button></td>
          </tr>
        </table>

      </div>
 
    </div>
  );
}

export default App;
