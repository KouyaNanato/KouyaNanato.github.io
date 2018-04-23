// Reducer ========================================================================================
const errors = (state: any = {}, action: any) => {
  switch (action.type) {
    case "@@redux-form/INITIALIZE":
      return {}
    case "CREATE_SCHEDULE_EVENT_FAILED":
      return action.errors
    case "UPDATE_SCHEDULE_EVENT_FAILED":
      return action.errors
    case "DELETE_SCHEDULE_EVENT_FAILED":
      return action.errors
    default:
      return state
  }
}

export default errors
