export const sortDataWithTime = (arrData: any) => {
  return arrData.map((obj: any) => ({
    ...obj,
    data: obj.data.sort((a: any, b: any) => a["game_data"]?.time - b["game_data"]?.time),
  }));
};
