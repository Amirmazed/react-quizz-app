import React from 'react';

const Quiz = () => {
    const questions = [
      {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris',
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Mars',
      },
      {
        question: 'What is the largest ocean in the world?',
        options: ['Atlantic Ocean', 'Arctic Ocean', 'Indian Ocean', 'Pacific Ocean'],
        answer: 'Pacific Ocean',
      },
      // Add more questions here
    ];
  
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  
    const handleAnswer = (questionIndex, optionIndex) => {
      const updatedAnswers = [...answers];
      updatedAnswers[questionIndex] = questions[questionIndex].options[optionIndex];
      setAnswers(updatedAnswers);
    };
  
    const calculateScore = () => {
      let score = 0;
      for (let i = 0; i < questions.length; i++) {
        if (answers[i] === questions[i].answer) {
          score++;
        }
      }
      return score;
    };
  
    const score = calculateScore();
  
    return (
      <div>
        <h1>Quiz</h1>
        <p>Score: {score}</p>
  
        {questions.map((question, index) => (
          <div key={index}>
            <h2>{question.question}</h2>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  onClick={() => handleAnswer(index, optionIndex)}
                  className={answers[index] === option ? 'selected' : ''}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
  
        <ToastContainer />
      </div>
    );
  };
  

export default test;