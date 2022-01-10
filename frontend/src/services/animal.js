import axios from "axios";
import { BASE_URL } from "../constants/url";

// CREATE NEW ANIMAL
export const createAnimal = (body, clear, setIsLoading) => {
  axios
    .post(`${BASE_URL}/create`, body)
    .then((res) => {
      alert(res.data);
      clear();
      setIsLoading(false);
    })
    .catch((err) => {
      alert(err.response);
      setIsLoading(false);
    });
};

// DELETE ANIMAL
export const deleteAnimal = (id, getData) => {
  axios
    .delete(`${BASE_URL}/delete/${id}`)
    .then((res) => {
      alert(res.data);
      getData();
    })
    .catch((err) => {
      alert(err.response);
    });
};

// EDIT ANIMAL
export const updateAnimal = (id, body, clear, setIsLoading, getData, setEdition) => {
  axios
    .put(`${BASE_URL}/update/${id}`, body)
    .then((res) => {
      alert(res.data);
      setIsLoading(false);
      getData();
      setEdition(false)
      clear();
    })
    .catch((err) => {
      alert(err.response);
      setIsLoading(false);
    });
};
