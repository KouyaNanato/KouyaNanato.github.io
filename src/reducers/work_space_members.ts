// Interface =====================================================================================
export interface IWorkSpaceMember {
  id: number
  name: string
  avatar_disp: string
  personality_ids: number[]
}

// Reducer ========================================================================================
const WorkSpaceMembers = (state: IWorkSpaceMember[] = [], action: any) => {
  switch (action.type) {
    case "FETCH_MEMBERS_EVENTS_SUCCESS":
      return [].concat(
        action.members_events.work_space_members,
      ).sort((a: IWorkSpaceMember, b: IWorkSpaceMember) => a.id - b.id)
    default:
      return state
  }
}

export default WorkSpaceMembers
