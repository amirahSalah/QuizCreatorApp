import React, { useState, useEffect } from 'react';
import {QuizData} from './QuizData';
import { useNavigate } from 'react-router-dom';

function QuizNew() {
    const navigate = useNavigate();
     const [quiz, setQuiz] = useState(
         {
            "id": null,
            "title": "",
            "description": "",
            "url": "",
            "created": "",
            "modified": "",
            "score": 5,
            "questions_answers": [
              {
                "id": 1,
                "text": "",
                "feedback_false": "",
                "feedback_true": "",
                "answer_id": null,
                "answers": []   
              }
            ]
        }
     );

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        //if url have quiz id >> fill the state with quiz data
    },[]);

    //handle all changes
    const onTitleChange = e => {
        let newObj = {...quiz};
        newObj.title = e.target.value; 

        setQuiz(newObj);
    };
    const onDescChange = e => {
        let newObj = {...quiz};
        newObj.description = e.target.value;
        setQuiz(newObj);
    };
    const onURLChange = e => {
        let newObj = {...quiz};
        newObj.url = e.target.value;
        setQuiz(newObj);
    };
    const onScoreChange = e => {
        let newObj = {...quiz};
        newObj.score = e.target.value; 
        setQuiz(newObj);
    };

    function onQuesChange(quesId, event){
        let newObj = {...quiz};
        let value = event.target.value;
        newObj.questions_answers.map(function(question){
            if(question.id === quesId){
                question.text = value;
            }     
            return question  ;
        }); 
        setQuiz(newObj);
    }
    function onFBTChange(quesId, event){
        let newObj = {...quiz};
        let value = event.target.value;
        newObj.questions_answers.map(function(question){
            if(question.id === quesId){
                question.feedback_true = value;
            }     
            return question  ;
        }); 
        setQuiz(newObj);
    }
    function onFBFChange(quesId, event){
        let newObj = {...quiz};
        let value = event.target.value;
        newObj.questions_answers.map(function(question){
            if(question.id === quesId){
                question.feedback_false = value;
            }     
            return question  ;
        }); 
        setQuiz(newObj);
    }

    
    
    //add new question
    const questionHandler= (() => {
        //create helper array for not editing state directly
        let clonedQuiz = {...quiz};
        
        //create new question to be added
        let newQuestion = {
            "id": 0,
            "text": "",
            "feedback_false": "",
            "feedback_true": "",
            "answer_id": null,
            "answers": []   
        }

        //get the last question id to add new sequenced id for the new question
        let lastQuestion = clonedQuiz.questions_answers.slice(-1)[0];
        newQuestion.id = lastQuestion.id + 1;
        clonedQuiz.questions_answers.push(newQuestion);

        //finally set state with new one
        setQuiz(clonedQuiz);
    })
    
    
    
    //quiz submit
    const quizHandler= (() => {
        let quizToBeSaved = {...quiz};
        console.log("QuizData");
        console.log(QuizData);
        console.log("QuizData.length");
        console.log(QuizData.length);
        let lastQuiz = QuizData.slice(-1);
        console.log(lastQuiz.length);
        if (lastQuiz.length === 0){
            //my data is empty
            //this will be the first quiz to save
            quizToBeSaved.id = 1;     
        }else{
            lastQuiz = QuizData[QuizData.length-1];
            console.log("lastQuiz.id");
            console.log(lastQuiz.id);
            quizToBeSaved.id = lastQuiz.id + 1;
            
        }
        console.log("quizToBeSaved");
        console.log(quizToBeSaved);
        setQuiz(quizToBeSaved);
        console.log("quiz");
        console.log(quiz);
        QuizData.push(quizToBeSaved);
        console.log("QuizData");
        console.log(QuizData);
        navigate('/');
    });
    
    return (
        <div className='row'>
            
            
                <form key={['quiz', Math.random].join('_')} className='col-12 col-sm-6 offset-sm-3'>
                    <div className="form-group">
                        <label htmlFor="qTitle">Quiz Title</label>
                        <input type="text" className="form-control" id="qTitle" placeholder="Enter title" value={quiz.title} onChange={onTitleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="qDescription">Quiz Description</label>
                        <input type="text" className="form-control" id="qDescription" aria-describedby="qHelp" placeholder="Enter description" value={quiz.description} onChange={onDescChange}/>
                        <small id="qHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="qUrl">Quiz url</label>
                        <input type="text" className="form-control" id="qUrl" placeholder="Enter youtube url" value={quiz.url} onChange={onURLChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="qScore">Quiz Score</label>
                        <input type="number" className="form-control" id="qScore" placeholder="2" min='5' max='10' value={quiz.score} onChange={onScoreChange}/>
                    </div>
                    {quiz.questions_answers.map((question)=>
                        <div key={question.id} className="questionContainer">
                            <div className="form-group">
                                <label htmlFor="qTxt">Question {question.id}</label>
                                <input type="text" className="form-control" id="qTxt" placeholder="Enter question" value={question.text} onChange={onQuesChange.bind(this, question.id)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="qFBT">Question feedback when answer true</label>
                                <input type="text" className="form-control" id="qFBT" placeholder="Enter True Feedback" value={question.feedback_true} onChange={onFBTChange.bind(this, question.id)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="qFBF">Question feedback when answer false</label>
                                <input type="text" className="form-control" id="qFBF" placeholder="Enter False Feedback" value={question.feedback_false} onChange={onFBFChange.bind(this, question.id)}/>
                            </div>
                        </div>
                    )}
                    <button type="button" className="btn-block btn btn-sm btn-info" onClick={questionHandler}>+ Add question</button>


                    <button type="button" className="btn btn-primary" onClick={quizHandler}>Submit</button>
                </form>
            

                
        
        </div>
    )
}

export default QuizNew
