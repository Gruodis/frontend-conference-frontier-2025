/**
 * Interface representing the structure of an individual Article.
 *
 * @interface ArticleProps
 * @property {number} id - Unique identifier for the article.
 * @property {string} documentId - Document identifier.
 * @property {string} title - Title of the article.
 * @property {string} description - Brief description of the article.
 * @property {string} slug - URL-friendly identifier for the article.
 * @property {string} createdAt - ISO timestamp when the article was created.
 * @property {string} updatedAt - ISO timestamp when the article was last updated.
 * @property {string} publishedAt - ISO timestamp when the article was published.
 */

interface Categories {
  id: number;
  name: string;
  description?: string;
  slug: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface ImageFormats {
  thumbnail: ImageFormat;
  large?: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
}

interface CoverImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface FileAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface BaseBlock {
  id: number;
  __component: string;
}

interface RichTextBlock extends BaseBlock {
  __component: "shared.rich-text";
  body: string;
}

interface QuoteBlock extends BaseBlock {
  __component: "shared.quote";
  title: string;
  body: string;
}

interface MediaBlock extends BaseBlock {
  __component: "shared.media";
  file: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: ImageFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface SliderBlock extends BaseBlock {
  __component: "shared.slider";
  files: Array<{
    id: number;
    documentId: string;
    attributes: FileAttributes;
  }>;
}
type Block = RichTextBlock | QuoteBlock | MediaBlock | SliderBlock;

export interface ArticleProps {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: CoverImage;
  category: Categories;
  blocks: Block[];
}

/**
 * Interface representing the structure of the API response from fetchArticles().
 *
 * @interface ApiResponse
 * @property {ArticleProps[]} data - Array of Article objects.
 * @property {Meta} meta - Metadata containing pagination information.
 */
export interface ApiResponse {
  data: ArticleProps[];
  meta: Meta;
}

/**
 * Interface representing pagination details in the API response.
 *
 * @interface Meta
 * @property {Pagination} pagination - Object containing pagination info.
 */
interface Meta {
  pagination: Pagination;
}

/**
 * Interface representing pagination information.
 *
 * @interface Pagination
 * @property {number} page - Current page number.
 * @property {number} pageSize - Number of articles per page.
 * @property {number} pageCount - Total number of pages.
 * @property {number} total - Total number of articles.
 */
interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
