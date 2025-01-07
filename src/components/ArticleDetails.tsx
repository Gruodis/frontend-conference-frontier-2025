// components/ArticleDetail.tsx
import { useParams, Link } from "react-router-dom";
import { ArticleProps } from "../interfaces/articles";

interface ArticleDetailProps {
  articles: ArticleProps[];
}

/**
 * Functional component that displays the full details of a single article.
 *
 * @component
 * @returns {JSX.Element} A JSX element representing the article details.
 *
 * @example
 * <ArticleDetail />
 */
export default function ArticleDetail({
  articles,
}: ArticleDetailProps): JSX.Element {
  // Fetch articles from the API
  // Extract the 'slug' parameter from the URL
  const { id } = useParams<{ id: string }>();

  const article = articles.find((article) => article.id.toString() === id);

  return (
    <article className="article-detail">
      {id}
      {article?.id}
      {article?.title}
      {article?.blocks.map((block) => {
        console.log(block);
        // if (block.__component === "shared.rich-text") {
        //   return <div key={block.id}> {block.body}</div>;
        // }
        if (block.__component === "shared.media") {
          const imageUrl = block.file.url;
          console.log("Image URL:", imageUrl); // Debug line
          //   return (
          //     <img
          //       key={block.id}
          //       src={`${import.meta.env.VITE_STRAPI_URL}${imageUrl}`}
          //       alt={block.file?.attributes.alternativeText || "none"}
          //       className="w-full h-auto my-8 rounded-lg"
          //     />
          //   );
        }
        return null;
      })}

      {/* Article Title */}
      {/* <h1 className="article-title">{article.title}</h1> */}

      {/* Article Description */}
      {/* <p className="article-description">{article.description}</p> */}

      {/* Additional Article Details */}
      <p className="published-date">
        {/* Published on: {new Date(article.publishedAt).toLocaleDateString()} */}
      </p>

      {/* Back to Articles Link */}
      <Link to="/" className="back-link">
        ← Back to Articles
      </Link>
    </article>
  );
}
