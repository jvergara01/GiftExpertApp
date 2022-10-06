import axios from "axios";
export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=AlivoMVTiZsE0S17Dr3iWoPFeQVmUa9Y&q=${category}&limit=10`;

  const resp = await axios.get(url).then(({ data }) => data);

  const gifs = resp.data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
