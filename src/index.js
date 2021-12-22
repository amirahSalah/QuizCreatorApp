import ReactDOM from 'react-dom'
import React from 'react'
import Quiz from './Components/Quiz'
import QuizNew from './Components/QuizNew';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1 className="text-center appTitle">Welcome To Quiz Creator</h1>
        <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="Quiz" element={<QuizNew />} />
            <Route path="Quiz/:id" element={<QuizNew />} />
        </Routes> 
      </div>
    </BrowserRouter>
  )
}

export default App
const rootElement = document.getElementById("root");
ReactDOM.render(<App></App>, rootElement);