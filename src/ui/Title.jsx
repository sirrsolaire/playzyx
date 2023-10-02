export const Title = ({ title, subTitle }) => {
  return (
    <div className="smallTb:flex smallTb:flex-col smallTb:self-start">
      <h1 className="text-center text-4xl font-bold text-white  tablet:text-7xl ">
        {title}
      </h1>
      <p className="mt-1.5 text-center text-white tablet:self-start">
        {subTitle}
      </p>
    </div>
  );
};
