export const lockMainScroll = (): void => {
  document.body.classList.add("no-scroll");
};

export const unlockMainScroll = (): void => {
  document.body.classList.remove("no-scroll");
};
