import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button';
import axios from 'axios';

const QuizApp = () => {
    const [quizList, setQuizList] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(0);

    const decodeHtml = (html) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                const response = await axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple');
                const data = response.data.results;
                const formattedData = data.map((quiz) => ({
                    question: decodeHtml(quiz.question),
                    correct_answer: decodeHtml(quiz.correct_answer),
                    incorrect_answers: quiz.incorrect_answers.map(ans => decodeHtml(ans)),
                    all_answers: [decodeHtml(quiz.correct_answer), ...quiz.incorrect_answers.map(ans => decodeHtml(ans))].sort(() => Math.random() - 0.5),
                }));
                setQuizList(formattedData);
            }
            catch(error){
                console.error('Error fetching quiz data:', error);
            }
        };

        fetchQuizData();
    }, []);

  return (
    <div className='flex flex-col justify-center items-center w-full min-h-screen py-8 text-white gap-10'>
      <h1 className='text-4xl font-bold'>Quiz</h1>
      <div className='w-3/5 flex flex-col gap-4'>
        {quizList.length > 0 ? (
            quizList.map((quiz, length) => (
                <div key={length} className='flex flex-col gap-4 bg-gray-500/40 px-10 py-8 rounded-lg'>
                    <h2 className='text-2xl font-bold'>{quiz.question}</h2>
                    <div className='flex flex-col gap-4'>
                        {quiz.all_answers.map((answer, index) => (
                            <Button key={index} onClick={() => {
                                if(!selectedAnswers[length]){
                                    setSelectedAnswers(prev => ({...prev, [length]:answer}));
                                    if(answer === quiz.correct_answer){
                                        setScore(prev => prev + 1);
                                    }
                                }
                            }} className={`rounded-sm px-4 py-6 cursor-pointer 
                                ${selectedAnswers[length] === answer
                                  ? answer === quiz.correct_answer
                                    ? 'bg-green-500' // correct
                                    : 'bg-red-500' // wrong
                                  : 'bg-gray-400/10'}
                                `}>
                                {answer}
                            </Button>
                        ))}
                    </div>

                </div>
            ))
        ) : (
            <div>Loading...</div>
        )}
      </div>
      {quizList.length > 0 && (
  <div className='text-xl font-semibold'>
    Score: {score} / {quizList.length}
  </div>
)}

    </div>
  )
}

export default QuizApp
