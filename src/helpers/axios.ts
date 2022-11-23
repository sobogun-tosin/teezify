import axios from "axios";
import * as API from "../config";

const Axios = axios.create({
  baseURL: API.baseURL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DEEZER_SECRET_KEY}`,
  },
});

export default Axios;
