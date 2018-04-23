// import { IMember } from "./work_space_items"

// Interface =====================================================================================
// export interface IScheduleEvent {
//   id: number
//   work_space_id: number
//   name: string
//   started_at: any
//   ended_at: any
//   location: string
//   description: string
//   color: string
//   same_space_public_level: string
//   other_space_public_level: string
//   category: string
//   members: IMember[]
//   owners: IMember[]
//   glimpse: boolean
//   read_only: boolean
// }

// Reducer ========================================================================================
// const ScheduleEvents = (state: IScheduleEvent[] = [], action: any) => {
//   switch (action.type) {
//     case "FETCH_MEMBERS_EVENTS_SUCCESS":
//       return [].concat(
//         action.members_events.schedule_events.filter((c: any) => !!c.id),
//       )
//     case "FETCH_SCHEDULE_EVENT_SUCCESS":
//       return [].concat(
//         state.filter((c: any) => c.id !== action.schedule_event.id),
//         action.schedule_event,
//       )
//     case "UPDATE_SCHEDULE_EVENT_SUCCESS":
//       return [].concat(
//         state.filter((c: any) => c.id !== action.id),
//         [action.schedule_event].filter((c: any) => !!c.id),
//       )
//     case "DELETE_SCHEDULE_EVENT_SUCCESS":
//       return [].concat(
//         state.filter((c: any) => c.id !== action.id),
//       )
//     default:
//       return state
//   }
// }

// export default ScheduleEvents
