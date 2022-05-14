import type { ITeamByConference, DataEntity } from "../typings";

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

export const fetchData = async (): Promise<any> => {
  const endpoint = `https://api.eliteprospects.com/v1/leagues/nhl/standings?offset=0&limit=50&sort=position&apiKey=${process.env.VUE_APP_API_KEY}`;
  const res = await fetch(endpoint);
  return res.json();
}