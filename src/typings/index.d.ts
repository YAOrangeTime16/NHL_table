
interface Meta {
  generatedAt: string;
  offset: number;
  limit: number;
  totalRecords: number;
}
interface Links {
  first: string;
  last: string;
  prev?: null;
  next?: null;
}
interface DataEntity {
  id: number;
  season: Season;
  team: Team;
  teamName: string;
  leagueName: string;
  group: string;
  position: string;
  medalClass?: null;
  playoffMedalClass?: null;
  stats: Stats;
  postseason?: null;
  info?: null;
}
interface Season {
  slug: string;
  startYear: number;
  endYear: number;
}
interface Team {
  id: number;
  name: string;
  status: string;
  league: League;
  teamType: string;
  teamClass: string;
  country: Country;
  continent: string;
  _links?: (string)[] | null;
}
interface League {
  slug: string;
  name: string;
  teamClass: string;
  leagueLevel: string;
  country?: null;
  continent: string;
  _links?: (string)[] | null;
}
interface Country {
  slug: string;
  name: string;
  _links?: (string)[] | null;
}
interface Stats {
  GP: number;
  W: number;
  L: number;
  T?: null;
  OTW: number;
  OTL: number;
  PTS: number;
  GF: number;
  GA: number;
  GD: number;
  PPG: number;
}

export interface ITeamList {
  _meta: Meta;
  _links: Links;
  data?: (DataEntity)[] | null;
}


export interface ITeamByConference {
  western: (DataEntity)[];
  eastern: (DataEntity)[];
}