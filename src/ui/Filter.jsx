function Filter({ children }) {
  return (
    <select className="mt-9 rounded-lg bg-second-color px-4 py-2 font-semibold text-white">
      {children}
    </select>
  );
}

export default Filter;
