import { useEffect, useState } from "react";
import { ArticleProps, ApiResponse } from "../interfaces/articles";

interface UseFetchArticlesReturn {
  articles: ArticleProps[];
  isLoading: boolean;
  error: string | null;
}

export default function useFetchArticles(): UseFetchArticlesReturn {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/articles?populate[cover][populate]=*&populate[blocks][populate]=*&populate[category][populate]=*"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result: ApiResponse = await response.json();
        setArticles(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { articles, isLoading, error };
}
