import React, { useEffect, useState } from "react";
import { useButtonContext } from "../context";

const useFetch = () => {
  const { list, loadList } = useButtonContext();
  const [isLoading, setIsLoading] = useState(false);

  const loadTheList = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://fakestoreapi.com/carts", {});
      const json = await res.json();
      setIsLoading(true);
      loadList(json);
    } catch (error: any) {
      loadList([]);
      setIsLoading(true);
    }
  };
  return { list, loadTheList, isLoading };
};

export { useFetch };

// const [{ response, error, isLoading }, setState] = useState<Test>(() => ({
//   response: null,
//   error: null,
//   isLoading: false,
// }));

// interface Test {
//   response?: any;
//   error?: any;
//   isLoading?: boolean;
// }

// useEffect(() => {
//   const fetchData = async () => {
//     // setState({ isLoading: true });

//     try {
//       const res = await fetch("https://fakestoreapi.com/carts", {});
//       const json = await res.json();
//       loadList(json);

//       // setState({ isLoading: false, response: json });
//     } catch (error: any) {
//       // setState({ isLoading: false, error });
//     }
//   };

//   fetchData();
// }, []);
