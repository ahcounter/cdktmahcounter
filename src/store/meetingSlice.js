import { createSlice } from "@reduxjs/toolkit";

const meetingSlice = createSlice({
  name: 'meeting',
  initialState: {
    speakers: [],
  },
  reducers: {
    addSpeaker(state, action) {
      const newItem = action.payload;

      state.speakers.push({
        id: newItem.id,
        name: newItem.name,
        role: newItem.role,
        fillerwords: [],
      });
    },
    removeSpeaker(state, action) {
      const id = action.payload;
      state.speakers = state.speakers.filter((speaker) => speaker.id !== id);
    },
  },
});

export const meetingActions = meetingSlice.actions;

export default meetingSlice;
 