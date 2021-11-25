
import { useState } from "react";
import { useDispatch } from "react-redux";
import { meetingActions } from "../store/meetingSlice";

function Addfillerword(props) {
  const dispatch = useDispatch();

  const [newFillerword, setNewFillerword] = useState("");

  function changeNewFillerwordHandler(event) {
    setNewFillerword(event.target.value);
  }

  function addNewFillerwordHandler() {
    if (newFillerword !== "") {
      dispatch(
        meetingActions.addNewFillerword({
          id: props.speakerid,
          newFillerword: newFillerword,
        })
      );
      setNewFillerword("");
    }
  }

  return (
    <div className="speaker">
      <div>
        <input
          type="text"
          value={newFillerword}
          onInput={changeNewFillerwordHandler}
        />
        <button onClick={addNewFillerwordHandler}>Add word</button>
      </div>
    </div>
  );
}

export default Addfillerword;
