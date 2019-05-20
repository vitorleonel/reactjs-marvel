import axios from "axios";
import md5 from "js-md5";

const publicKey = process.env.MARVEL_PUBLIC_KEY;
const privateKey = process.env.MARVEL_PRIVATE_KEY;

const instance = axios.create({
  baseURL: "https://gateway.marvel.com"
});

instance.interceptors.request.use(config => {
  const timestamp = Number(new Date());
  const hash = md5.create();

  hash.update(timestamp + privateKey + publicKey);

  config.params = {
    ...config.params,
    apikey: publicKey,
    ts: timestamp,
    hash: hash.hex()
  };

  return config;
});

export default instance;
