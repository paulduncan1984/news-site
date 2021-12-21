import { useState, useEffect } from "react";
import axios from "axios";

///////////////////// URL Breakdown

const BASE_URL = "http://api.mediastack.com/v1/news";
const COUNTRIES = "gb";
const GEO_BASE_URL = "https://geolocation-db.com/json/";
const API_KEY_GEO = process.env.REACT_APP_GEO_API_KEY;
const API_KEY_MS = process.env.REACT_APP_MEDIASTACK_API_KEY;

///////////////////// Hook for default News feed with Geolocation (App.js)

function useDefaultNewsfeed() {
  // State for rendering articles
  const [article, setArticle] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  // State for geolocation
  const [location, setLocation] = useState(null);

  // Async fetch for country_code

  const fetchLocationURL = GEO_BASE_URL + API_KEY_GEO;

  useEffect(() => {
    async function fetchLocation() {
      const request = await axios.get(fetchLocationURL);
      console.log(request.data.country_code);
      setLocation(request.data.country_code);
    }
    fetchLocation();
  }, [fetchLocationURL]);

  // Axios get for article data, taking in 'location' variable to URL

  const fetchArticleUrl = `http://api.mediastack.com/v1/news?countries=${location}&access_key=${API_KEY_MS}`;

  // ***** Question for Luke or Milo:  Ask why this doesn't work - attempting to pass in the URL as a variable so I can use it as a dependency in useEffect

  /*
  const fetchArticleUrlParams = BASE_URL, {
          params: {
            access_key: process.env.REACT_APP_MEDIASTACK_API_KEY,
            countries: location,
          },
        };
  */

  useEffect(() => {
    async function fetchArticleData() {
      setIsLoaded(false);
      const articleRequest = await axios.get(fetchArticleUrl);
      console.log(articleRequest);
      setArticle(articleRequest.data.data);
      setIsLoaded(true);
      return articleRequest;
    }
    fetchArticleData();
  }, [fetchArticleUrl]);

  return { article, isLoaded, error, location };
} // EO default newsfeed

///////////////////// Hook for SearchResults

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

///////////////////// Hook for CountryFilter

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
