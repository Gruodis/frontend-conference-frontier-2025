import {useEffect, useState} from 'react';


export default function fetchArticles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1337/api/articles/")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);
  return articles;
}