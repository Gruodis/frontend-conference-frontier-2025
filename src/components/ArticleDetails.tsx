// components/ArticleDetail.tsx
import { useParams, Link } from 'react-router-dom';

//import { ArticleProps } from '../interfaces/articles';

/**
 * Functional component that displays the full details of a single article.
 * 
 * @component
 * @returns {JSX.Element} A JSX element representing the article details.
 * 
 * @example
 * <ArticleDetail />
 */
export default function ArticleDetail(): JSX.Element {
  // Extract the 'slug' parameter from the URL
  const { id } = useParams<{ id: string }>();
  
  // Find the article with the matching slug
//   const article: ArticleProps | undefined = data.find((item: ArticleProps) => item.slug === slug);
  
  // If article not found, display an error message
//   if (!article) {
//     return (
//       <div className="article-detail">
//         <h2>Article Not Found</h2>
//         <p>The article you are looking for does not exist.</p>
//         <Link to={`/articles/${article.id}`} className="back-link">Go Back to Articles</Link>
//       </div>
//     );
//   }
  
  return (
    <div className="article-detail">
        {id}
      {/* Article Title */}
      {/* <h1 className="article-title">{article.title}</h1> */}
      
      {/* Article Description */}
      {/* <p className="article-description">{article.description}</p> */}
      
      {/* Additional Article Details */}
      <p className="published-date">
        {/* Published on: {new Date(article.publishedAt).toLocaleDateString()} */}
      </p>
      
      {/* Back to Articles Link */}
      <Link to="/" className="back-link">← Back to Articles</Link>
    </div>
  );
};