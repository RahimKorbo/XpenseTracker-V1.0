import Axios from "axios";
import { fetchTxnURL } from "./Constants";

export function fetchTxn(json) {
  return Axios.request({
    method: "POST",
    data: json,
    url: fetchTxnURL,
    headers: { "Content-Type": "application/json" },
  })
  .then(res => res)
}