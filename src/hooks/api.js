import { useState, useEffect } from "react";
import axios from "axios";

// URL Breakdown
const BASE_URL = "http://api.mediastack.com/v1/news";
const COUNTRIES = "gb";

// Hook for SearchResults

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

// Hook for default News feed (App.js)

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

// Hook for CountryFilter

function useCountryFilter(countryCode) {
  const [country, setCountry] = useState("");
  const [countryResults, setCountryResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoaded(false);
    axios
      .get(BASE_URL, {
        params: {
          access_key: process.env.REACT_APP_MEDIASTACK_API_KEY,
          countries: countryCode,
        },
      })
      .then((res) => {
        setCountryResults(res.data.data);
        setIsLoaded(true);
        setCountry(countryCode);
      })
      .catch((err) => {
        setError(err);
      });
  }, [countryCode]);

  return { country, countryResults, isLoaded, error, setCountry };
}

export { useMediaStackSearchResults, useDefaultNewsfeed, useCountryFilter };
