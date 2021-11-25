import { useState } from "react";

function Fillerword(props) {
  const [wordcount, updateCounter] = useState(0);

  function plusHandler() {
    updateCounter(wordcount + 1);
  }

  function minusHandler() {
    updateCounter(wordcount - 1);
  }

  return (
    <div className='fillerword'>
      <button onClick={minusHandler}>⬇</button>
      <button onClick={plusHandler}>
        {"⬆" + props.word + "(" + wordcount + ")"}
      </button>
    </div>
  );
}

export default Fillerword;
