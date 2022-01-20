import React, { useEffect, useState } from "react";

interface Test {
  response?: any;
  error?: any;
  isLoading?: boolean;
}
const useFetch = () => {
  const [{ response, error, isLoading }, setState] = useState<Test>(() => ({
    response: null,
    error: null,
    isLoading: false,
  }));

  useEffect(() => {
    const fetchData = async () => {
      setState({ isLoading: true });

      try {
        const res = await fetch("https://fakestoreapi.com/carts", {});
        const json = await res.json();

        setState({ isLoading: false, response: json });
      } catch (error: any) {
        setState({ isLoading: false, error });
      }
    };

    fetchData();
  }, []);
  // console.log("hello");
  return { response, error, isLoading };
};

export { useFetch };
