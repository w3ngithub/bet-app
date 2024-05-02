const HeaderText = ({
  heading,
  headerStyle,
}: {
  heading: string;
  headerStyle?: string;
}) => {
  return (
    <h1
      className={`my-4 text-xl max-semi-lg:text-lg font-bold text-white ${headerStyle}`}
    >
      {heading}
    </h1>
  );
};

export default HeaderText;
