import Speaker from "./Speaker";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { meetingActions } from "../store/meetingSlice";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Speakergrid(props) {
  const speakers = useSelector((state) => state.meeting.speakers);
  const dispatch = useDispatch();

  function addSpeakerHandler() {
    dispatch(
      meetingActions.addSpeaker({
        name: "",
        role: "",
        fillerwords: [
          {
            word: "Ah",
            count: 0,
          },
          {
            word: "Um",
            count: 0,
          },
          {
            word: "So",
            count: 0,
          },
          {
            word: "And",
            count: 0,
          },
          {
            word: "Like",
            count: 0,
          },
          {
            word: "You know",
            count: 0,
          },
          {
            word: "I mean",
            count: 0,
          },
        ],
      })
    );
  }

  return (
    <Grid container spacing={3} margin={3}>
      {speakers.map((speaker, index) => (
        <Grid item>
          <Box sx={{ boxShadow: 5, p: 3, width: 320 }}>
            <Speaker
              id={index}
              name={speaker.name}
              role={speaker.role}
              fillerwords={speaker.fillerwords}
            />
          </Box>
        </Grid>
      ))}
      <Grid item>
        <Box sx={{ p: 3, width: 320 }}>
          <Button size="large" variant="outlined" onClick={addSpeakerHandler}>
            Add Speaker{" "}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Speakergrid;
