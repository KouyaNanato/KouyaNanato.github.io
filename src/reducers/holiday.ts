// Interface =====================================================================================
export interface IHoliday {
  any?: any
}

// Reducer ========================================================================================
const Holiday = (state: IHoliday = {}, action: any) => {
  switch (action.type) {
    case "FETCH_HOLIDAY_SUCCESS":
      return action.holiday
    default:
      return state
  }
}

export default Holiday
