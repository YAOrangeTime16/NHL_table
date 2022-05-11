import type { ITeamByConference, DataEntity } from "../typings"

export const listTeamsByCategory = (teamlist: DataEntity[]): ITeamByConference => {
  const teamByConference: ITeamByConference
 = {
    western: [],
    eastern: [],
  }

  teamlist.map(item => {
    switch(item.group) {
      case "Pacific Division":
      case "Central Division":
        teamByConference.western = [...teamByConference.western, item];
        break;
      case "Atlantic Division":
      case "Metropolitan Division":
        teamByConference.eastern = [...teamByConference.eastern, item];
        break;
      default:
        break;
    }
  })

  return teamByConference;
}

