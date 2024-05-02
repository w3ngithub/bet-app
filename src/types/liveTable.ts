export type GameData = {
  id: string;
  sport_id: string;
  time: string;
  time_status: string;
  league: {
    id: string;
    name: string;
    cc: string;
  };
  home: {
    id: string;
    name: string;
    image_id: string;
    cc: string;
  };
  away: {
    id: string;
    name: string;
    image_id: string;
    cc: string;
  };
  ss: string | null;
  scores?: {
    [key: string]: {
      home: string;
      away: string;
    };
  };
  bet365_id: string;
  timer: {
    tm: number;
    ts: number;
    tt: string;
    ta: number;
    md: number;
  };
};

type OddData = {
  id: string;
  home_od: string;
  draw_od: string;
  away_od: string;
  ss: null | string;
  time_str: null | string;
  add_time: string;
};

export type ResultData = {
  sport_id: string;
  data: {
    game_data: GameData;
    odd_data: OddData;
  }[];
};

export type CustomResultData = {
  game_data: GameData;
  odd_data: OddData;
};
