import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    getData();
  }, [url]);

  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert("Um error ocorreu, tente novamente");
        setError(error);
        setIsLoading(false);
      });
  };
  return [data, isLoading, error, getData];
};

export default useRequestData;
