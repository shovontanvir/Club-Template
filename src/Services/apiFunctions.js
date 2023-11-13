import axios from "axios";

const liveApiUrl = import.meta.env.VITE_REACT_APP_API_LIVE_URL;

const liveImageUrl = import.meta.env.VITE_REACT_APP_IMAGE_API_LIVE_URL;

const dummyUrl = import.meta.env.VITE_REACT_APP_API_DUMMY_URL

const token = localStorage.getItem("token");



// function to get data from api using axios
export const getApiData = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${dummyUrl}/${url}`, {
        headers: {
          Authorization: `${localStorage.getItem("access_token")}`
        }
      } )
      .then((response) => {
        resolve(response.data);

      })
      .catch(reject);
  });
};



// function to post data to api using axios
export const postApiData = async (url, data) => {

  // axios
  //     .post(`${dummyUrl}/${url}`, data, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`
  //       }
  //     } )

  return new Promise((resolve, reject) => {
    axios
      .post(`${dummyUrl}/${url}`, data, {
        headers: {
          Authorization: `${localStorage.getItem("access_token")}`
        }
      } )
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
};


// function to post data to api using axios
export const loginFunc = async (url, data) => {

  return new Promise((resolve, reject) => {
    // console.log(apiUrl + "/" + url);
    axios
      .post(`${liveApiUrl}/${url}`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
};

// function to update data using axios
export const putApiData = (url, taskId, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(apiUrl + "/" + taskId + ".json", { data })
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
};

// function to delete data using axios
export const deleteApiData = (url, taskId) => {
  axios({
    url: url + taskId + ".json",
    method: "DELETE",
  });
};
