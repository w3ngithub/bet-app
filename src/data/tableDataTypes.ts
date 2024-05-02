type Odds = {
  id: string;
  odds: string;
  name: string;
};

type FullTimeResult = {
  id: string;
  name: string;
  odds: Odds[];
};

type Main = {
  updated_at: string;
  sp: {
    full_time_result: FullTimeResult;
  };
};

type OddData = {
  FI: string;
  event_id: string;
  main: Main;
};

type GameEntity = {
  id: string;
  name: string;
};

type GameData = {
  id: string;
  time: string;
  time_status: string;
  league: GameEntity;
  home: GameEntity;
  away: GameEntity;
  ss: string | null;
};

export type DataEntry = {
  game_data: GameData;
  odd_data: OddData;
};

export type ResultEntry = {
  sport_id: string;
  data: DataEntry[];
};
