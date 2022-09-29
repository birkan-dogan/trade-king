import axios from "axios";
const TOKEN = "ccqpuo2ad3ic1teksus0ccqpuo2ad3ic1teksusg";
export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN,
  },
});
