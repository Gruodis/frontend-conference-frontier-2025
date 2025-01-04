import { ArticleProps } from "../interfaces/articles";
import { Link } from "react-router-dom";

/**
 * Functional component that displays the details of a single article.
 *
 * @component
 * @param {ArticleProps} props - The properties containing article details.
 * @returns {JSX.Element} A JSX element representing the article.
 *
 * @example
 * <Article
 *   id={6}
 *   documentId="hd5c4254uxizvj7y5xeoxufz"
 *   title="A bug is becoming a meme on the internet"
 *   description="How a bug on MySQL is becoming a meme on the internet"
 *   slug="a-bug-is-becoming-a-meme-on-the-internet"
 *   createdAt="2025-01-03T17:55:15.905Z"
 *   updatedAt="2025-01-03T18:26:13.952Z"
 *   publishedAt="2025-01-03T18:26:13.958Z"
 * />
 */

export default function Article({
  id,
  title,
  description,
  slug,
  publishedAt,
  cover,
}: ArticleProps): JSX.Element {
  console.log(cover);
  return (
    <article
      className="article flex max-w-[800px] gap-4 p-4 my-4 
    border border-gray-700"
    >
      <div>
        <img
          src={`http://localhost:1337${cover.formats.thumbnail.url}`}
          //   height={cover.height}
          alt=""
        />
      </div>
      <div>
        {/* Article Title */}
        <h2 className="article-title">{title}</h2>

        {/* Article Description */}
        <p className="article-description">{description}</p>

        {/* Read More Link */}
        <Link to={`/article/${id}`} className="read-more">
          Read More →
        </Link>

        {/* Published Date */}
        <p className="published-date">
          Published on: {new Date(publishedAt).toLocaleDateString()}
        </p>
      </div>

      {/* Horizontal rule to separate articles */}
      <hr />
    </article>
  );
}
