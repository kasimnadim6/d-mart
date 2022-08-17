import axios from 'axios';

const baseUrl = `https://dummyjson.com`;

export const getProducts = async () => {
  const result = await axios.get(`${baseUrl}/products`);
  return result && result?.data?.products;
};
