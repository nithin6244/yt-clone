import axios from "axios";

const KEY = "AIzaSyAmd-cwy9GONbPbx1kIjuJqrvja7UhhJTU";

export const youtubeApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY,
  },
});
