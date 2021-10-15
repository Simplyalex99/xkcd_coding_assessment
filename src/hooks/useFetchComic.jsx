import React, { useReducer, useEffect } from "react";
import axios from "axios";
export const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};
const CORS_PROXY = "https://aqueous-peak-38061.herokuapp.com/";
const BASE_URL = "//xkcd.com"; // format to use as proxy request
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { data: [], loading: true };

    case ACTIONS.GET_DATA:
      return { ...state, loading: false, data: action.payload.data };

    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}

const useFetchComic = (params) => {
  const [state, dispatch] = useReducer(reducer, { data: [], loading: true });

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    const url = `${CORS_PROXY}${BASE_URL}/${params}`;
    console.log(url);
    axios
      .get(url, {
        headers: {
          mode: "cors",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": true,
          "Access-Control-Allow-Methods":
            "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        },
      })
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { data: res.data } });
      })

      .catch((error) => {
        dispatch({ type: ACTIONS.ERROR, payload: { error } });
      });
  }, [params]);

  return state;
};

export default useFetchComic;
