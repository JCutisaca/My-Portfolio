const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    allProjects: [],
    projectsIds: []
}

export const projectSlice = createSlice({
    name: "allProjects",
    initialState,
    reducers: {
        getProjects: (state, action) => {
            state.allProjects = action.payload,
            state.projectsIds = action.payload.map(project => project.id);
        }
    }
})

export const { getProjects } = projectSlice.actions;

export default projectSlice.reducer;