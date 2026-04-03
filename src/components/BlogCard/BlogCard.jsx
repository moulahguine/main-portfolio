import Link from "next/link";
import { FiCalendar, FiClock } from "react-icons/fi";
import "./BlogCard.scss";

function BlogCard({ blog }) {
  const { slug, title, description, publishDate, readTime, tags } = blog;

  return (
    <Link href={`/blogs/${slug}`} className="blog-card">
      <article className="blog-card__content">
        {/* Title */}
        <h3 className="blog-card__title">{title}</h3>

        {/* Description */}
        <p className="blog-card__description">{description}</p>

        {/* Meta row: tags, date, read time */}
        <div className="blog-card__meta">
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="blog-card__tags">
              {tags.map((tag) => (
                <span key={tag} className="blog-card__tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Date and read time */}
          <div className="blog-card__info">
            <span className="blog-card__date">
              <FiCalendar size={14} aria-hidden="true" role="img" />
              {publishDate}
            </span>
            <span className="blog-card__read-time">
              <FiClock size={14} aria-hidden="true" role="img" />
              {readTime}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default BlogCard;
