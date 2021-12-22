import React, { useState, useEffect } from 'react';
import {QuizData} from './QuizData';
import { Link } from "react-router-dom";


function Quiz() {

    const [list, setList] = useState([]);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        setList(QuizData)
    },[]);

    return (
        <div>
            <div className="text-center">
            <Link to="/Quiz" className="btn btn-lg btn-info">Create New Quiz</Link>
            </div>
            <ul className="quizList">                    
                {list.map((quiz)=>
                <li key={quiz.id}>
                    <div className="row">
                        <div className="col-12 col-sm-9 quizInfo">
                            <h3>{quiz.title}</h3>
                            <p>{quiz.description}</p>
                            <a href={quiz.url} target="_blank" rel="noreferrer">Related Video</a>
                        </div>
                        <div className="col-12 col-sm-3 quizAction">
                            <p>Final Score: <b>{quiz.score ? quiz.score : "not scored yet"}</b></p>
                            <Link to={`/Quiz/${quiz.id}`} className="btn btn-sm btn-info">Edit</Link>
                        </div>
                    </div>
                </li>
                )}              
            </ul>
            
        </div>
    )
}

export default Quiz
