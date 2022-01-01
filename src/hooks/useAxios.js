import { useState } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [responses, setResponses] = useState();
  async function addResponseData(url) {
    const res = await axios.get(url);
    setResponses((responses) => [...responses, res.data]);
  }
  const clearResponses = () => setResponses([])
  return [responses, addResponseData, clearResponses];
};

export default useAxios;
