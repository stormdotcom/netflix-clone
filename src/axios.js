import {baseURL} from "./Const/constant";
import axios from "axios"
const instance = axios.create({
    baseURL: baseURL,

  });

  export default instance;