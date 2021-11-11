import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';
const apiKey = '23515098-6ca4d9d130a27025c1d21d34d';

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios(
    `/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => response.data.hits);
};

export default { fetchImagesWithQuery };
