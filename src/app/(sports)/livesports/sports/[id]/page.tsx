"use client";
import { useParams } from "next/navigation";

const LiveSportDetailPage = () => {
  const { id } = useParams();
  return <div className="text-white">Live Detail of Sport Id {id}</div>;
};

export default LiveSportDetailPage;
