import { combineReducers } from "redux"
// import { reducer as formReducer } from "redux-form"
// import CurrentMember, { ICurrentMember } from "./current_member"
// import errors from "./errors"
// import Holiday, { IHoliday } from "./holiday"
// import ScheduleEvents, { IScheduleEvent } from "./schedule_events"
// import WorkSpaceItems, { IWorkSpaceItem } from "./work_space_items"
// import WorkSpaceMembers, { IWorkSpaceMember } from "./work_space_members"

// Interface ======================================================================================
interface IScheduleState {
  hoge: string
  fuga: boolean
  // work_space_members: IWorkSpaceMember[]
  // schedule_events: IScheduleEvent[]
  // work_space_items: IWorkSpaceItem[]
  // errors: any
}

// Reducer ========================================================================================
export const hoge = (state: string = "", action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export const fuga = (state: boolean = false, action: any) => {
  switch (action.type) {
    default:
      return false
  }
}

// Initial State ==================================================================================
export const initialState: IScheduleState = {
  fuga: false,
  hoge: "hoge"
  // work_space_members: [],
  // schedule_events: [],
  // work_space_items: [],
  // errors: {},
}

// ================================================================================================

const scheduleReducers = combineReducers({
  fuga,
  hoge
  // current_member: CurrentMember,
  // work_space_members: WorkSpaceMembers,
  // schedule_events: ScheduleEvents,
  // work_space_items: WorkSpaceItems,
  // holiday: Holiday,
  // errors,
  // form: formReducer,
})

export default scheduleReducers
