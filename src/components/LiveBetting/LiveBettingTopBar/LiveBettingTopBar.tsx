"use client";
import React, { useState } from "react";
import LiveBettingIconButton from "../LiveBettingButton/LiveBettingIconButton";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { sportsData } from "@/data/sportsData";

const LiveBettingTopBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleMouseEnter = () => {
    setIsVisible(true);
  };
  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex justify-center items-center relative w-full group "
    >
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full relative"
      >
        <CarouselContent className="flex gap-2 flex-row pl-4">
          {sportsData.map((item: any, index) => (
            <LiveBettingIconButton
              title={item.title}
              icon={item.icon}
              key={item.id}
              id={item.id}
              isActive={item.isActive || false}
            />
          ))}
        </CarouselContent>

        <CarouselPrevious
          className={`group/Previous bg-background left-0 absolute hover:bg-background text-textWhite-300/70 hover:text-white border-0 h-full rounded-[0px] cursor-pointer`}
        >
          <MdArrowBackIosNew
            size={20}
            className={`${
              isVisible ? "visible" : "hidden"
            } transition-all duration-[600ms] ease group-hover/Previous:scale-110`}
          />
        </CarouselPrevious>
        <CarouselNext
          className={`group/Next bg-background right-0 absolute hover:bg-background] text-textWhite-300/70 hover:text-white border-0 h-full rounded-[0px] cursor-pointer`}
        >
          <MdArrowForwardIos
            size={20}
            className={`${
              isVisible ? "visible" : "hidden"
            } group-hover/Next:scale-110 transition-all duration-[600ms] ease`}
          />
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default LiveBettingTopBar;

//dummy data
const dummyData = [
  { title: "Football", isActive: true, icon: "dutchFootball" },
  { title: "BasketBall", isActive: false, icon: "basketBall" },
  { title: "Rugby", isActive: false, icon: "rugby" },
  { title: "Tennis", isActive: false, icon: "tennis" },
  { title: "Horse Racing", isActive: false, icon: "horseRacing" },
  { title: "Cricket", isActive: false, icon: "cricket" },
  { title: "Moto Racing", isActive: false, icon: "motoRacing" },
  { title: "Darts", isActive: false, icon: "darts" },
  { title: "Volleyball", isActive: false, icon: "volleyball" },
  { title: "Handball", isActive: false, icon: "handBall" },
  { title: "Ice Hockey", isActive: false, icon: "iceHockey" },
  { title: "MMA", isActive: false, icon: "mma" },
  { title: "Golf", isActive: false, icon: "golf" },
  { title: "Boxing", isActive: false, icon: "boxing" },
  { title: "Casino", isActive: false, icon: "dices" },
  { title: "Virtual Sports", isActive: false, icon: "virtualSports" },
  { title: "Indy", isActive: false, icon: "indy" },
  { title: "Bowl", isActive: false, icon: "bowl" },
  { title: "Squash", isActive: false, icon: "squash" },
  { title: "Surfing", isActive: false, icon: "surfing" },
  { title: "Cycling", isActive: false, icon: "cycling" },
  { title: "Curling", isActive: false, icon: "curling" },
  { title: "Waterpolo", isActive: false, icon: "waterPolo" },
  { title: "Badminton", isActive: false, icon: "badminton" },
  { title: "Rally", isActive: false, icon: "rally" },
];
