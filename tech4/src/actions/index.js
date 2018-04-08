export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
//remember: an object with a type property is an action.
//remember: has to be wired up to React
