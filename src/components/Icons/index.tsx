import React from "react";
import {
  Star,
  Dices,
  BarChart2,
  Nut,
  ChevronRight,
  ChevronDown,
  Check,
  Menu,
  X,
} from "lucide-react";
import {
  GiBasketballBall,
  GiAmericanFootballBall,
  GiBoxingGlove,
  GiCricketBat,
  GiDart,
  GiHorseHead,
  GiSteeringWheel,
  GiShuttlecock,
  GiBowlingStrike,
  GiCurlingStone,
  GiTennisRacket,
  GiVolleyballBall,
} from "react-icons/gi";
import {
  MdOutlineSportsBaseball,
  MdOutlineSportsTennis,
  MdSportsGolf,
  MdSportsMotorsports,
  MdSportsScore,
  MdSurfing,
  MdSportsEsports,
} from "react-icons/md";
import { FaHandPaper, FaHockeyPuck, FaMotorcycle } from "react-icons/fa";
import { TbBallFootball, TbSportBillard } from "react-icons/tb";
import {
  LiaBicycleSolid,
  LiaTableTennisSolid,
  LiaVolleyballBallSolid,
} from "react-icons/lia";
import { IoTennisballSharp } from "react-icons/io5";
import { IoMdFootball } from "react-icons/io";
import { FaPersonSkiing } from "react-icons/fa6";
import { PiDogFill } from "react-icons/pi";
import { BiFootball } from "react-icons/bi";
import { CiDollar, CiBaseball } from "react-icons/ci";

type Props = {
  name: string;
  size?: number;
  fill?: string;
  color?: string;
  stroke?: string;
  iconStyle?: string;
  onClick?: () => void;
};

const Icons = ({ name, size = 18, iconStyle, onClick }: Props) => {
  const getIcon = (iconName: String) => {
    switch (iconName) {
      case "dutchFootball":
        return IoMdFootball;
      case "basketBall":
        return GiBasketballBall;
      case "rugby":
        return GiAmericanFootballBall;
      case "tennis":
        return IoTennisballSharp;
      case "horseRacing":
        return GiHorseHead;
      case "motoRacing":
        return FaMotorcycle;
      case "cricket":
        return GiCricketBat;
      case "darts":
        return GiDart;
      case "volleyball":
        return LiaVolleyballBallSolid;
      case "handBall":
        return TbBallFootball;
      case "iceHockey":
        return FaHockeyPuck;
      case "mma":
        return FaHandPaper;
      case "golf":
        return MdSportsGolf;
      case "boxing":
        return GiBoxingGlove;
      case "indy":
        return MdSportsScore;
      case "virtualSports":
        return Nut;
      case "cycling":
        return LiaBicycleSolid;
      case "bowl":
        return GiBowlingStrike;
      case "squash":
        return GiTennisRacket;
      case "skiing":
        return FaPersonSkiing;
      case "surfing":
        return MdSurfing;
      case "tableTennis":
        return LiaTableTennisSolid;
      case "snooker":
        return TbSportBillard;
      case "dollar":
        return CiDollar;
      case "indoorFootball":
        return BiFootball;
      case "greyhoundRacing":
        return PiDogFill;
      case "motorCycles":
        return MdSportsMotorsports;
      case "lacrosse":
        return MdOutlineSportsTennis;
      case "bandy":
        return MdOutlineSportsBaseball;
      case "rally":
        return GiSteeringWheel;
      case "badminton":
        return GiShuttlecock;
      case "waterPolo":
        return GiVolleyballBall;
      case "curling":
        return GiCurlingStone;
      case "baseBall":
        return CiBaseball;
      case "eSports":
        return MdSportsEsports;
      case "menu":
        return Menu;
      case "x":
        return X;
      case "dices":
        return Dices;
      case "star":
        return Star;
      case "barChart2":
        return BarChart2;
      case "arrowRight":
        return ChevronRight;
      case "arrowDown":
        return ChevronDown;
      case "check":
        return Check;
      default:
        return null;
    }
  };

  const IconComp = getIcon(name);
  return (
    IconComp && (
      <IconComp
        size={size}
        // color={color}
        // fill={fill}
        // stroke={stroke}
        className={iconStyle}
        onClick={onClick}
      />
    )
  );
};

export default Icons;
