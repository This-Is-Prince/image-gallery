const convertLikes = (likes: number) => {
  if (likes < 1000) {
    return likes + "";
  } else {
    return (likes / 1000).toFixed(1) + "k";
  }
};

export { convertLikes };
