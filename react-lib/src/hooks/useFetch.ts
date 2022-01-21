import React, { useEffect, useState } from "react";
import { useButtonContext } from "../context";

const useFetch = () => {
  const { list, loadList } = useButtonContext();

  const loadTheList = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/carts", {});
      const json = await res.json();
      loadList(json);
    } catch (error: any) {
      loadList([]);
    }
  };
  return { list, loadTheList };
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
