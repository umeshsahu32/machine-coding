import axios from "axios";

const fetchItem = async (url) => {
  try {
    const result = await axios.get(url);
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const debounce = (fn, delay) => {
  if (typeof fn !== "function") {
    throw new Error(`Not a valid function ${fn}`);
  }

  if (typeof delay != "number" || delay < 0) {
    throw new Error(`Not a valid delay ${delay}`);
  }

  let timeout;
  return (...args) => {
    return new Promise((resolve) => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(async () => {
        const data = await fn(...args);
        resolve(data);
      }, delay);
    });
  };
};

const debounceQuery = debounce(fetchItem, 1000);

export { debounceQuery };
