function Task({ question, step, onClickChangeStep }) {
  return (
    <div className="task">
      <h2 className="task__question">{question.title}</h2>
      <ul className="task__answers">
        {question.varints.map((variant, index) => (
          <li className="task__answer" key={variant}>
            <button onClick={() => onClickChangeStep(index)}>{variant}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
