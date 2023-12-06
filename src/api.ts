import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const Api = axios.create({
  baseURL: "http://localhost:1337/v1", // Default URL, which will be defined as soon as we get the env variables
  headers,
});

export default Api;
