export const TopGameTitle = ({ data }) => {
  return (
    <h2 className="mt-2 text-center text-4xl font-bold leading-none tablet:text-left tablet:text-[72px]">
      {data?.name}
    </h2>
  );
};
