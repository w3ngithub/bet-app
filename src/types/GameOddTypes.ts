export type Odd = {
  id: string;
  odds: string;
  header?: string;
  name: string;
  team?: string;
  handicap?: string;
};

export type BettingCategory = {
  id: string;
  name: string;
  odds: Odd[];
};

export type BettingSpecial = {
  updated_at: string;
  sp: { [key: string]: BettingCategory };
};

export type Result = {
  FI: string;
  event_id: string;
  asian_lines: BettingSpecial;
  goals: BettingSpecial;
  half: BettingSpecial;
  main: BettingSpecial;
  minutes: BettingSpecial;
  others: BettingSpecial[];
  schedule: {
    updated_at: string;
    sp: {
      main: { odds: string }[];
    };
  };
  specials: {
    updated_at: string;
    sp: {
      specials: BettingCategory;
      to_score_in_half: BettingCategory;
      to_score_a_penalty: BettingCategory;
      to_miss_a_penalty: BettingCategory;
    };
  };
};

export type ApiResponse = {
  success: number;
  results: Result[];
};
