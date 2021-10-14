import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDirectorySelection = createSelector(
    [selectDirectory],
    directory => directory.sections
)