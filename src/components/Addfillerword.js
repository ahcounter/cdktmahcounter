import { useState } from "react";
import { useDispatch } from "react-redux";
import { meetingActions } from "../store/meetingSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";

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
    <div>
      <Stack direction="row">
        <TextField
          type="text"
          size="small"
          value={newFillerword}
          onInput={changeNewFillerwordHandler}
        />
        <Button
          size="small"
          variant="contained"
          onClick={addNewFillerwordHandler}
        >
          Add word
        </Button>
      </Stack>
    </div>
  );
}

export default Addfillerword;
