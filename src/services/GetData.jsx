import axios from "axios";

const GetData = async (extUrl) => {
  return await axios.get(`${process.env.REACT_APP_BASE_URL}` + extUrl);
};

export default GetData;
