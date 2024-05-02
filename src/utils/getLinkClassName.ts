//generate class name for link based on current pathname
export const getLinkClassName = (linkPath: string, pathname: string) => {
  return `h-full  items-center border-b-2 text-textWhite-400 flex ${
    pathname === linkPath
      ? "text-white border-textYellow"
      : "hover:text-greenBg-200 border-transparent "
  }`;
};
