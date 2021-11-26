import { useDispatch } from "react-redux";
import { meetingActions } from "../store/meetingSlice";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ListSubheader from "@mui/material/ListSubheader";
import CloseIcon from "@mui/icons-material/Close";

function Speakerdetails(props) {
  const dispatch = useDispatch();

  function nameChangeHandler(event) {
    dispatch(
      meetingActions.updateSpeakerName({
        id: props.id,
        name: event.target.value,
      })
    );
  }

  function nameChangeHandlerSelected(event) {
    dispatch(
      meetingActions.updateSpeakerName({
        id: props.id,
        name: event.target.textContent,
      })
    );
  }

  function roleChangeHandler(event) {
    dispatch(
      meetingActions.updateSpeakerRole({
        id: props.id,
        role: event.target.value,
      })
    );
  }

  function deleteSpeakerHandler() {
    dispatch(
      meetingActions.deleteSpeaker({
        id: props.id,
      })
    );
  }

  const autofillnames = [
    "Satyanarayana Murty Munukutla",
    "Rohith Kumar Rapolu",
    "Ranjita Thakur",
    "Chitra Yesodharan",
    "Spandana Satpathy",
    "Govind Krishna Somani",
    "Radha Ponnekanti",
    "Gopi Perumalla",
  ].sort();

  return (
    <div>
      <Stack spacing={4}>
        <Stack spacing={2} alignItems="flex-end">
          <div>
            <Button
              endIcon={<CloseIcon />}
              variant="outlined"
              color="error"
              onClick={deleteSpeakerHandler}
            ></Button>
          </div>
        </Stack>
        <Stack spacing={2}>
          <Autocomplete
            freeSolo
            options={autofillnames}
            onInputChange={nameChangeHandler}
            onChange={nameChangeHandlerSelected}
            inputValue={props.name || ""}
            renderInput={(params) => (
              <TextField {...params} type="text" label="Name" fullWidth />
            )}
          />

          <FormControl>
            <InputLabel>Role</InputLabel>
            <Select defaultValue="" label="Role" onChange={roleChangeHandler}>
              <ListSubheader color="primary">Role Payers</ListSubheader>
              <MenuItem value={"Sergeant at Arms (SAA)"}>
                Sergeant at Arms (SAA)
              </MenuItem>
              <MenuItem value={"Timer"}>Timer</MenuItem>
              <MenuItem value={"Grammarian"}>Grammarian</MenuItem>
              <MenuItem value={"General Evaluator"}>General Evaluator</MenuItem>
              <MenuItem value={"Toast Master of the Day (TMOD)"}>
                Toast Master of the Day (TMOD)
              </MenuItem>
              <MenuItem value={"Table Topics Master (TTM)"}>
                Table Topics Master (TTM)
              </MenuItem>

              <ListSubheader color="primary">Prepared Speeches</ListSubheader>
              <MenuItem value={"Speaker 1"}>Speaker 1</MenuItem>
              <MenuItem value={"Speaker 2"}>Speaker 2</MenuItem>
              <MenuItem value={"Speaker 3"}>Speaker 3</MenuItem>

              <ListSubheader color="primary">
                Prepared Speech Evaluations
              </ListSubheader>
              <MenuItem value={"Evaluator 1"}>Evaluator 1</MenuItem>
              <MenuItem value={"Evaluator 2"}>Evaluator 2</MenuItem>
              <MenuItem value={"Evaluator 3"}>Evaluator 3</MenuItem>

              <ListSubheader color="primary">
                Table Topic Speakers
              </ListSubheader>
              <MenuItem value={"Table Topic Speaker 1"}>
                Table Topic Speaker 1
              </MenuItem>
              <MenuItem value={"Table Topic Speaker 2"}>
                Table Topic Speaker 2
              </MenuItem>
              <MenuItem value={"Table Topic Speaker 3"}>
                Table Topic Speaker 3
              </MenuItem>
              <MenuItem value={"Table Topic Speaker 4"}>
                Table Topic Speaker 4
              </MenuItem>
              <MenuItem value={"Table Topic Speaker 5"}>
                Table Topic Speaker 5
              </MenuItem>
              <MenuItem value={"Table Topic Speaker 6"}>
                Table Topic Speaker 6
              </MenuItem>
              <MenuItem value={"Table Topic Speaker 7"}>
                Table Topic Speaker 7
              </MenuItem>
              <MenuItem value={"Table Topic Speaker 8"}>
                Table Topic Speaker 8
              </MenuItem>
              <MenuItem value={"Table Topic Speaker 9"}>
                Table Topic Speaker 9
              </MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
    </div>
  );
}

export default Speakerdetails;
