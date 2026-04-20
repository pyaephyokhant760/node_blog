import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './View.css';

const View = () => {
    const { id } = useParams();

    // Mock data for the view
    const article = {
        title: "The Future of Web Design: Glassmorphism and Beyond",
        category: "Design Trends",
        author: "Pyae Phyo Khant",
        date: "March 28, 2026",
        readTime: "8 min read",
        heroImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000",
        authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150",
        content: `
            <p>The digital landscape is constantly evolving, and with it, the aesthetics that govern user interfaces. In recent years, one trend has emerged to captivate designers and users alike: glassmorphism. This design style, characterized by its semi-transparent, frosted glass-like appearance, brings a sense of depth, hierarchy, and modern elegance to the web.</p>
            
            <h3>Understanding the Core Principles</h3>
            <p>At its heart, glassmorphism relies on a few key CSS properties. The most crucial is <code>backdrop-filter: blur()</code>, which creates the signature frosted effect. When combined with a semi-transparent background color and subtle borders, the result is a layered, multidimensional interface.</p>
            
            <blockquote>"Good design is obvious. Great design is transparent—sometimes literally."</blockquote>
            
            <p>But glassmorphism isn't just about looks. When used correctly, it enhances usability. By blurring the background behind an element, we establish a clear visual hierarchy. The user's focus is naturally drawn to the content in the foreground, while the context of the underlying page remains subtly visible.</p>
            
            <h3>Implementing Rich Aesthetics</h3>
            <p>To truly elevate a UI, glassmorphism should be paired with other modern techniques. Consider vibrant, fluid gradients in the background to make the transparency pop. Add delicate, glowing drop shadows to lift elements off the page. The interplay of light, shadow, and translucency creates an interface that feels alive and premium.</p>
            
            <p>As we look to the horizon of web design, the principles of depth and realism will only grow stronger. It's time to build interfaces that aren't just functional, but genuinely beautiful.</p>
        `
    };

    return (
        <article className="view-container fade-in">
            {/* Hero Header */}
            <header className="view-hero" style={{ backgroundImage: `url(${article.heroImage})` }}>
                <div className="view-hero-overlay">
                    <div className="hero-content-wrapper">
                        <Link to="/" className="back-link">← Back to Insights</Link>
                        <span className="view-category">{article.category}</span>
                        <h1 className="view-title">{article.title}</h1>
                    </div>
                </div>
            </header>

            {/* Main Content Layout */}
            <div className="view-layout">
                {/* Floating Meta Bar (Sticky Sidebar on Desktop) */}
                <aside className="view-meta-sidebar">
                    <div className="meta-glass-card">
                        <div className="author-info">
                            <img src={article.authorAvatar} alt={article.author} className="author-avatar" />
                            <div>
                                <h4 className="author-name">{article.author}</h4>
                                <p className="author-role">Lead Designer</p>
                            </div>
                        </div>
                        
                        <div className="meta-details">
                            <div className="meta-item">
                                <span className="meta-label">Published</span>
                                <span className="meta-value">{article.date}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Read Time</span>
                                <span className="meta-value">{article.readTime}</span>
                            </div>
                        </div>

                        <div className="share-actions">
                            <h5 className="share-title">Share Article</h5>
                            <div className="share-buttons">
                                <button className="share-btn twitter" aria-label="Share on Twitter"><i className="bi bi-twitter"></i></button>
                                <button className="share-btn linkedin" aria-label="Share on LinkedIn"><i className="bi bi-linkedin"></i></button>
                                <button className="share-btn facebook" aria-label="Share on Facebook"><i className="bi bi-facebook"></i></button>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Article Body */}
                <main className="view-body">
                    <div 
                        className="prose"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                    
                    {/* Tags */}
                    <div className="article-tags">
                        <span className="tag">UI Design</span>
                        <span className="tag">CSS3</span>
                        <span className="tag">Trends</span>
                    </div>

                    {/* Author Bio Section at Bottom */}
                    <div className="author-bio-card">
                        <img src={article.authorAvatar} alt={article.author} className="bio-avatar" />
                        <div className="bio-text">
                            <h3>Written by {article.author}</h3>
                            <p>Crafting beautiful, intuitive digital experiences. Passionate about typography, grids, and the intersection of art and technology.</p>
                            <button className="follow-btn">Follow</button>
                        </div>
                    </div>
                </main>
            </div>
            
            {/* Related Articles Strip */}
            <section className="related-articles">
                <div className="related-container">
                    <h2 className="related-title">More to Explore</h2>
                    <div className="related-grid">
                        <Link to="/view/2" className="related-card">
                            <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=400" alt="Related" />
                            <div className="related-card-content">
                                <h4>Building Stunning UIs with Vanilla CSS</h4>
                            </div>
                        </Link>
                        <Link to="/view/3" className="related-card">
                            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400" alt="Related" />
                            <div className="related-card-content">
                                <h4>Sustainable Architecture in Modern Apps</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default View;
