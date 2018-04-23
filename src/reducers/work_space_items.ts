// Interface =====================================================================================
// export interface ICategory {
//   id: number
//   name: string
// }

// export interface IMember {
//   id: number
//   name: string
//   avatar_disp: string
//   position?: number
// }

// export interface IWorkSpaceItem {
//   work_space_id: number
//   categories: ICategory[]
//   members: IMember[]
// }

// Reducer ========================================================================================
// const WorkSpaceItems = (state: IWorkSpaceItem[] = [], action: any) => {
//   const workSpaceId = window.APP.workSpaceId
//   const otherState = state.filter((c: any) => c.work_space_id !== Number(workSpaceId))

//   switch (action.type) {
//     case "FETCH_ITEM_SUCCESS":
//       return [].concat(
//         otherState,
//         action.item,
//       )
//     default:
//       return state
//   }
// }

// export default WorkSpaceItems
