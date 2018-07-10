export default (state = {}, action) => {
  const { names, location, issue, timeOpen, id } = action;
  let newState;
  switch (action.type) {
  case 'ADD_TICKET':
    newState = Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
