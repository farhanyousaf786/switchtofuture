import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blog';
import './Blog.css';

export default function BlogPage() {
  return (
    <main className="cb-main">

      <section className="cb-page-hero">
        <div className="cb-wrapper">
          <p className="cb-page-hero__tag">Thoughts</p>
          <h1 className="cb-page-hero__title">Blog</h1>
          <p className="cb-page-hero__sub">What we're thinking about</p>
        </div>
      </section>

      <section className="cb-blog-list">
        <div className="cb-wrapper">
          {blogPosts.map(post => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="cb-entry">
              <div className="cb-entry__grid">
                <div className="cb-entry__thumb">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="cb-entry__body">
                  <div className="cb-entry__meta">
                    <span className="cb-entry__cat">{post.category}</span>
                    <span className="cb-entry__date">{post.date}</span>
                    <span className="cb-entry__read">{post.readTime}</span>
                  </div>
                  <h2 className="cb-entry__title">{post.title}</h2>
                  <p className="cb-entry__excerpt">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
