export const createTumbnail = (url) => {
  const id = url.split("/")[3];

  const thumbnailUrl = "http://img.youtube.com/vi/" + id + "/0.jpg";

  return thumbnailUrl;
};

export const createEmbed = (url) => {
  const id = url.split("/")[3];

  const embedUrl = "https://www.youtube.com/embed/" + id + "?autoplay=1";

  return embedUrl;
};
