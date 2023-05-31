import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './CardDetails.css'

const CardDetails = () => {
    const [score, setScore] = useState(0)
    const card = useLoaderData();
    console.log(card.data)
    
    const questionsTotal = card.data.questions;
    //console.log(questionsTotal)
   

    const questionList = questionsTotal.map(question => {
        const questionContent = question.question.replace(/<[^>]+>/g, '');
        return {
          ...question,
          question: questionContent
        };
        
      });
    console.log(questionList);

    // const handleClick = (opn) => {
    //     console.log(opn)


    //     for (let i = 0; i < questionList.length; i++) {
    //       const correctAnswer = questionList[i].correctAnswer;
    //       if (opn === correctAnswer) {
    //         toast.success('Correct!');
    //         setScore(score+1);
    //         break;
    //       } else {
    //         toast.error('Incorrect!', {
    //             closeOnEscape: true,
    //             closeOnClick: true,
    //           });
            
    //       }
    //     }
    // }

    const handleClick = (opn) => {
      let isCorrect = false;
  
      for (let i = 0; i < questionList.length; i++) {
        const correctAnswer = questionList[i].correctAnswer;
        if (opn === correctAnswer) {
          isCorrect = true;
          break;
        }
      }
  
      if (isCorrect) {
        toast.success('Correct!');
        setScore(score + 1);
      } else {
        toast.error('Incorrect!', {
          closeOnEscape: true,
          closeOnClick: true,
        });
      }
  };
    
    return (
        <div>
            <div className='notiText'>
                <h1>Quiz of {card.data.name}</h1>
                <h2>Your score is: {score}</h2>
            </div>
            <div>
                {questionList.map((question, index) => (
                <div key={index} className='Qbox'>
                    <p>
                    Quiz {index + 1}: {question.question}
                    </p>
                    <div className='questionUl'>
                    {question.options.map((option, optionIndex) => (
                        <button onClick={() => handleClick(option)} className='optnBtn' key={optionIndex}>{option}</button>
                    ))}
                    
                    </div>
                </div>
                ))}
            </div>
            <ToastContainer />
  
        </div>
    );
};

export default CardDetails;