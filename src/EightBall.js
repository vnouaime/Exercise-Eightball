import React, {useState} from 'react'
import answers from './answers'
import './EightBall.css'

const EightBall = (props) => {
    const genAnswer = () => {
       const randomIdx = Math.floor(Math.random() * answers.length)
       return answers[randomIdx]
    }
    const [answer, setAnswer] = useState({
        msg: "Think of a question", 
        color: "black"
    });

    function handleClick(evt) {
        setAnswer(genAnswer())
    }

    return (
        <>
            <div 
            className="EightBall"
            onClick={handleClick}
            style={{ backgroundColor: answer.color }}>
            {answer.msg}
            </div>
        </>
    )
}

export { EightBall }