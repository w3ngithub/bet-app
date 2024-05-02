import { COMPLETED, PENDING } from "@/lib/constants";

export const getStatusColorCode = (status: string) => {
  if (status === PENDING) return "bg-yellow-400 !text-black";
  else if (status === COMPLETED) return "bg-green-500 text-white";
  else return "bg-red-700 text-white";
};
