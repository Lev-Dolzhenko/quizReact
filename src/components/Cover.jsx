import unSucces from "./../assets/error.svg";
import succes from "./../assets/check.svg";
import arrowOpen from "./../assets/arrowOpen.svg";
import arrowClose from "./../assets/arrowClose.svg";

import { useState } from "react";

function Cover({ questions, corret, step, onClickUnset, history }) {
  const [isAnswers, setIsAnswers] = useState(false);
  const onClickAnswers = () => {
    setIsAnswers((prev) => !prev);
  };
  return (
    <>
      <div className={`cover ${step === questions.length ? "show" : "hide"}`}>
        <div className="cover__image">
          <img src={corret <= 3 ? unSucces : succes} alt="succes" />
        </div>
        <div className="cover__text">
          <p>
            You answered correct on {corret} of {questions.length}
          </p>
        </div>
        <div className="cover__button">
          <button onClick={onClickUnset}>Close</button>
        </div>
        <div className="cover__button_arrow">
            <strong>Answers</strong>
          <button onClick={onClickAnswers}>
            <img src={isAnswers ? arrowClose : arrowOpen} alt="arrow" />
          </button>
        </div>
        {isAnswers && (
          <div className="cover__answers">
            <ul>
              {questions.map((question, index) => (
                <li key={question.varints[question.correct]}>
                  Correct answer: {question.varints[question.correct]} <br />
                  <p>Your answer: {question.varints[history[index]]}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Cover;
