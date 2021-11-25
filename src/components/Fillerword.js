import { useDispatch } from "react-redux";
import { meetingActions } from "../store/meetingSlice";
import { useSelector } from "react-redux";

function Fillerword(props) {

  const fillerwords = useSelector((state) => state.meeting.speakers[props.speakerid].fillerwords);
  
  const count = fillerwords.filter(
    (fillerword) => fillerword.word === props.word
  )[0].count;

  const dispatch = useDispatch();

  function plusHandler() {
      dispatch(
      meetingActions.plusFillerwordcount({
        id: props.speakerid,
        word: props.word,
      })
    );
  }

  function minusHandler() {
    dispatch(
      meetingActions.minusFillerwordcount({
        id: props.speakerid,
        word: props.word,
      })
    );
  }

  return (
    <div className='fillerword'>
      <button onClick={minusHandler}>⬇</button>
      <button onClick={plusHandler}>
        {"⬆" + props.word + "(" + count + ")"}
      </button>
    </div>
  );
}

export default Fillerword;
