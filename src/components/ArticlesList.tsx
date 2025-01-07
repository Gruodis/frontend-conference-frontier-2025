import { useEffect, useState } from "react";
import Article from "./Article";
import { ArticleProps, ApiResponse } from "../interfaces/articles";

/**
 * Functional component that fetches and displays a list of articles.
 *
 * @component
 * @returns {JSX.Element} A JSX element containing the list of articles.
 *
 * @example
 * <ArticlesList />
 */

export default function ArticlesList(): JSX.Element {
  const [articles, setArticles] = useState<ArticleProps[]>([]);

  // State to handle loading status
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // State to handle error messages
  const [error, setError] = useState<string | null>(null);

  /**
   * Asynchronous function to fetch articles from the API.
   * It updates the state based on the response or any errors encountered.
   */
  const fetchArticles = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch(
        //"http://localhost:1337/api/articles?populate=cover&populate=category&populate=blocks"

        "http://localhost:1337/api/articles?populate[cover][populate]=*&populate[blocks][populate]=*&populate[category][populate]=*"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result: ApiResponse = await response.json();
      //console.log(result.data);

      // Update the articles state with the fetched data
      setArticles(result.data);

      // Optionally, handle pagination using result.meta.pagination
    } catch (err: any) {
      // Update the error state with the error message
      setError(err.message || "An unexpected error occurred");
    } finally {
      // Update the loading state to false regardless of success or failure
      setIsLoading(false);
    }
  };

  /**
   * useEffect hook to fetch articles when the component mounts.
   */
  useEffect(() => {
    fetchArticles();
  }, []);

  /**
   * Render loading state.
   */
  if (isLoading) {
    return <p>Loading articles...</p>;
  }

  /**
   * Render error state.
   */
  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(articles.map((article: ArticleProps) => article));

  /**
   * Render the list of articles.
   */
  return (
    <section className="articles-list">
      {/* Section Header */}
      <h1 className="section-header">Latest Articles</h1>

      {/* Check if there are articles to display */}
      {articles.length === 0 ? (
        <p>No articles available.</p>
      ) : (
        <div className="articles-container">
          {articles.map((article: ArticleProps) => (
            <Article key={article.id} {...article} />
          ))}
        </div>
      )}
    </section>
  );
}
