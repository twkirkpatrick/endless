import axios from "axios";
const ENDPOINT =
  "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge";

export const getSteps = async () => {
  try {
    const res = await axios.get(ENDPOINT);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
