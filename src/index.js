import ReactDOM from 'react-dom'
import React from 'react'
import Quiz from './Components/Quiz'
import './styles.css';

function App() {
  return (
    <div className="App container">
      <h1 className="text-center">Welcome To React</h1>
      
      <Quiz/>
    </div>
  )
}

export default App
const rootElement = document.getElementById("root");
ReactDOM.render(<App></App>, rootElement);