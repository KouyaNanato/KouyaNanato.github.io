// Interface =====================================================================================
export interface ICurrentMember {
  id: number
  work_space_id: number
  name: string
  avatar_disp: string
}

// Reducer ========================================================================================
const CurrentMember = (state: ICurrentMember = {id: 0, work_space_id: 0, name: 'hoge', avatar_disp: ''}, action: any) => {
  switch (action.type) {
    case "FETCH_CURRENT_MEMBER_SUCCESS":
      return action.current_member
    default:
      return state
  }
}

export default CurrentMember
