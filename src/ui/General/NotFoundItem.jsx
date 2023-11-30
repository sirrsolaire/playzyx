function NotFoundItem({ gameName, title }) {
  return (
    <div className="mx-auto mt-10 w-fit rounded-lg bg-game-info px-8 py-6">
      <p className="text-center text-3xl font-semibold">
        No {title} Found for {gameName}
      </p>
    </div>
  );
}

export default NotFoundItem;
