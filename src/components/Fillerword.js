import { useDispatch } from "react-redux";
import { meetingActions } from "../store/meetingSlice";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Chip } from "@mui/material";
import { Stack } from "@mui/material";

function Fillerword(props) {
  const fillerwords = useSelector(
    (state) => state.meeting.speakers[props.speakerid].fillerwords
  );

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
    <div className="fillerword">
      <Stack direction="row">
        <Chip icon={<ArrowDownwardIcon />} onClick={minusHandler}></Chip>
        <Badge badgeContent={count} color="secondary">
          <Chip
            icon={<ArrowUpwardIcon />}
            onClick={plusHandler}
            label={props.word}
          ></Chip>
        </Badge>
      </Stack>
    </div>
  );
}

export default Fillerword;
