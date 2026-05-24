import React from 'react';
import './Blog.css';

const Blog = () => {
    const featuredPost = {
        title: "The Future of Web Design: Glassmorphism and Beyond",
        category: "Design Trends",
        date: "March 28, 2026",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200",
        excerpt: "Explore the profound impact of glassmorphism and modern aesthetic principles on user interface design."
    };

    const recentPosts = [
        {
            id: 1,
            title: "Mastering React 19: New Hooks and Features",
            category: "Engineering",
            date: "March 26, 2026",
            image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800",
            readTime: "5 min read"
        },
        {
            id: 2,
            title: "Building Stunning UIs with Vanilla CSS",
            category: "Frontend",
            date: "March 22, 2026",
            image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800",
            readTime: "8 min read"
        },
        {
            id: 3,
            title: "Sustainable Architecture in Modern Apps",
            category: "Architecture",
            date: "March 18, 2026",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
            readTime: "12 min read"
        },
        {
            id: 4,
            title: "Elevating User Experience through Animations",
            category: "UX Design",
            date: "March 15, 2026",
            image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800",
            readTime: "6 min read"
        }
    ];

    return (
        <div className="blog-container">
            {/* Hero Section */}
            <header className="blog-hero">
                <div className="hero-content">
                    <span className="hero-badge">Welcome to the Future</span>
                    <h1 className="hero-title">Insights for the <span>Modern Web</span></h1>
                    <p className="hero-subtitle">
                        Immerse yourself in articles covering the latest trends, deep-dives into engineering, and beautiful design patterns.
                    </p>
                    <div className="hero-actions">
                        <button className="btn-primary">Explore Articles</button>
                        <button className="btn-secondary">Subscribe</button>
                    </div>
                </div>
            </header>

            <div className="blog-main-grid">
                {/* Main Content Area */}
                <div className="blog-content">
                    {/* Featured Post */}
                    <section className="featured-section">
                        <h2 className="section-title">Editor's Pick</h2>
                        <div className="featured-card">
                            <div className="featured-image-wrapper">
                                <img src={featuredPost.image} alt="Featured" className="featured-image" />
                                <div className="featured-overlay">
                                    <span className="post-category">{featuredPost.category}</span>
                                    <h3 className="featured-title">{featuredPost.title}</h3>
                                    <p className="featured-excerpt">{featuredPost.excerpt}</p>
                                    <div className="post-meta">
                                        <span>{featuredPost.date}</span>
                                        <button className="read-more">Read Full Story →</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Recent Posts Grid */}
                    <section className="recent-section">
                        <h2 className="section-title">Recent Publications</h2>
                        <div className="posts-grid">
                            {recentPosts.map(post => (
                                <article key={post.id} className="post-card">
                                    <div className="post-card-image">
                                        <img src={post.image} alt={post.title} />
                                        <span className="post-category-badge">{post.category}</span>
                                    </div>
                                    <div className="post-card-content">
                                        <h4 className="post-title">{post.title}</h4>
                                        <div className="post-card-meta">
                                            <span>{post.date}</span>
                                            <span>Comment : 56</span>
                                            <span className="dot-separator">•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <aside className="blog-sidebar">
                    <div className="sidebar-widget newsletter-widget">
                        <h3>Stay Up to Date</h3>
                        <p>Get the latest articles delivered right to your inbox, beautifully formatted.</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your pristine email..." className="newsletter-input" required />
                            <button type="submit" className="btn-primary w-100">Subscribe</button>
                        </form>
                    </div>

                    <div className="sidebar-widget topics-widget">
                        <h3>Discover Topics</h3>
                        <div className="topics-list">
                            <span className="topic-tag">Engineering</span>
                            <span className="topic-tag">Design Trends</span>
                            <span className="topic-tag">UX/UI</span>
                            <span className="topic-tag">Architecture</span>
                            <span className="topic-tag">Productivity</span>
                            <span className="topic-tag">Case Studies</span>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Blog;
