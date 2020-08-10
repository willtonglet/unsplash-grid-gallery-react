import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 5Ag0JXICFOpOFfiYhX4xvZzJFkO2xNkZR-9cPKF3KZo",
  },
});
