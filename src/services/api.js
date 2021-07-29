import axios from "axios";

const api = () => {
  axios.create({
    baseURL: "https://kabit-api.herokuapp.com/",
    timeout: 1000,
  });
};

export default api;
