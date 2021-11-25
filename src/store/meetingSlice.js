import { createSlice } from "@reduxjs/toolkit";

const meetingSlice = createSlice({
  name: "meeting",
  initialState: {
    club: "CDK Hyderabad Toastmasters",
    meetingid: 1,
    speakers: [],
  },
  reducers: {
    updateClubName(state, action) {
      state.club = action.payload.name;
    },

    updateMeetingnumber(state, action) {
      state.meetingid = action.payload.meetingid;
    },

    addSpeaker(state, action) {
      const newItem = action.payload;

      state.speakers.push({
        name: newItem.name,
        role: newItem.role,
        fillerwords: newItem.fillerwords,
      });
    },
    deleteSpeaker(state, action) {
      state.speakers.splice(action.payload.id, 1);
    },
    updateSpeakerName(state, action) {
      state.speakers[action.payload.id].name = action.payload.name;
    },

    updateSpeakerRole(state, action) {
      state.speakers[action.payload.id].role = action.payload.role;
    },

    addNewFillerword(state, action) {
      const existing = state.speakers[action.payload.id].fillerwords.filter(
        (element) => element.word === action.payload.newFillerword
      );

      if (existing.length === 0) {
        state.speakers[action.payload.id].fillerwords.push({
          word: action.payload.newFillerword,
          count: 0,
        });
      }
    },

    plusFillerwordcount(state, action) {
      state.speakers[action.payload.id].fillerwords.forEach((element) => {
        if (action.payload.word === element.word) {
          element.count = element.count + 1;
        }
      });
    },

    minusFillerwordcount(state, action) {
      state.speakers[action.payload.id].fillerwords.forEach((element) => {
        if (action.payload.word === element.word) {
          if (element.count > 0) {
            element.count = element.count - 1;
          }
        }
      });
    },
  },
});

export const meetingActions = meetingSlice.actions;

export default meetingSlice;
