import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-node-server.herokuapp.com",
});

export default instance;
