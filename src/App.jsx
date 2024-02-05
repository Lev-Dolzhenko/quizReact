import Task from "./components/Task";
import Cover from "./components/Cover";

import { useState } from "react";
import { questions } from "./assets/questions";

function App() {
  const [step, setStep] = useState(0);
  const [corret, setCorrect] = useState(0);
  const [history, setHistory] = useState(Array(questions.length).fill(null));

  const question = questions[step];

  const onClickUnset = () => {
    setHistory([]);
    setStep(0);
    setCorrect(0);
  };

  const onClickChangeStep = (index) => {
    question.varints.map((variant) => {
      if (question.correct === index) {
        setCorrect(corret + 1);
      }
      setHistory((prevHistory) => {
        const updatedHistory = [...prevHistory];
        updatedHistory[step] = index;
        return updatedHistory;
      });
    });
    setStep(step + 1);
  };

  return (
    <>
      <div className="container">
        <div className="quiz__wrapper">
          {step !== questions.length && (
            <>
              <Task
                onClickChangeStep={onClickChangeStep}
                question={question}
                step={step}
              />
              <div className="quiz__wrapper_counter">
                <p>
                  Question {step + 1} of {questions.length}
                </p>
              </div>
            </>
          )}
          <Cover
            history={history}
            onClickUnset={onClickUnset}
            step={step}
            corret={corret}
            questions={questions}
          />
        </div>
      </div>
    </>
  );
}

export default App;
