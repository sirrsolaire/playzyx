export const handleRateIcon = (rate) => {
  const setIcon = {
    exceptional: "game-icons:supersonic-arrow",
    recommended: "icon-park-outline:good-two",
    meh: "vaadin:meh-o",
    skip: "icon-park-outline:bad-two",
  };

  return setIcon[rate] || null;
};
