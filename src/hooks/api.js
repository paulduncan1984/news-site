import { useState, useEffect } from "react";
import axios from "axios";

// URL Breakdown
const BASE_URL = "http://api.mediastack.com/v1/news";
// const API_Key = "345803611733cf291d2316a675055baa";
// const API_Key = `${process.env.REACT_APP_MEDIASTACK_API_KEY}`;
const COUNTRIES = "gb";

function useMediaStackSearchResults(queryText) {
  const [results, setResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoaded(false);
    axios
      .get(BASE_URL, {
        params: {
          access_key: process.env.REACT_APP_MEDIASTACK_API_KEY,
          countries: COUNTRIES,
          keywords: queryText,
        },
      })
      .then((res) => {
        setResults(res.data.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err);
      });
  }, [queryText]);
  return { results, isLoaded, error };
} // EO searchResults

function useDefaultNewsfeed() {
  const [article, setArticle] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoaded(false);
    axios
      .get(BASE_URL, {
        params: {
          access_key: process.env.REACT_APP_MEDIASTACK_API_KEY,
          countries: COUNTRIES,
        },
      })
      .then((res) => {
        setArticle(res.data.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return { article, isLoaded, error };
} // EO default newsfeed

export { useMediaStackSearchResults, useDefaultNewsfeed };
