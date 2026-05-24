import React, { useState } from "react";
import "./Comment.css"; // CSS ဖိုင်လမ်းကြောင်း မှန်အောင် သတိပြုပါ

const CommentPage = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "အောင်ကျော်",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      date: "2 hours ago",
      text: "ဒီပို့စ်လေးက တကယ်ကို အသုံးဝင်ပါတယ်။ နောက်လည်း ဒီလိုနည်းပညာအကြောင်းအရာတွေ အများကြီး မျှဝေပေးပါဦးခင်ဗျာ။"
    },
    {
      id: 2,
      author: "Thiri Shwe",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      date: "1 day ago",
      text: "UI Design လေးက ရှင်းလင်းပြီး ဖတ်ရတာ အရမ်းအဆင်ပြေတယ်။ စာရေးသားပုံကို သဘောကျမိပါတယ်!"
    }
  ]);

  const [newComment, setNewComment] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) {
      setShowError(true);
      return;
    }
    
    setShowError(false);
    const commentObject = {
      id: Date.now(),
      author: "ဧည့်သည်တော်",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
      date: "Just now",
      text: newComment
    };

    setComments([commentObject, ...comments]);
    setNewComment("");
  };

  return (
    <div className="app-wrapper">
      {/* --- Dark Navigation Bar --- */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <span className="logo">NEXUS</span>
            <ul className="nav-links">
              <li>Products</li>
              <li>Solutions</li>
              <li>Developers</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="nav-right">
            <span className="login-link">Log In</span>
            <div className="search-box">
              <input type="text" placeholder="Search Bar" />
              {/* FaSearch အစား ရိုးရိုး 🔍 အသုံးပြုထားပါတယ် */}
              <span className="search-icon">🔍</span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Main Content Section --- */}
      <main className="main-content">
        <div className="comment-card-container">
          <h3 className="discussion-title">Discussion ({comments.length})</h3>

          {/* Comment Form */}
          <form onSubmit={handleSubmit} className="comment-input-form">
            <div className="form-main-row">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80" 
                alt="User profile" 
                className="user-avatar active-user"
              />
              <div className="textarea-wrapper">
                <textarea
                  placeholder="သင့်အတွေးများကို သင့်ကိုယ်တိုင်ပြန်ပြောပါ..."
                  value={newComment}
                  onChange={(e) => {
                    setNewComment(e.target.value);
                    if(e.target.value) setShowError(false);
                  }}
                  className="main-textarea"
                />
                
                {/* Custom Tooltip Validation Message */}
                {showError && (
                  <div className="custom-error-tooltip">
                    ⚠️ Please fill out this field.
                  </div>
                )}

                {/* Text Formatting Toolbar (Pure HTML Tags) */}
                <div className="toolbar-and-btn">
                  <div className="text-formatter-bar">
                    <button type="button" title="Bold"><b>B</b></button>
                    <button type="button" title="Italic"><i style={{fontFamily: 'serif', fontWeight: 'bold'}}>I</i></button>
                    <button type="button" title="Link">🔗</button>
                    <button type="button" title="Image">🖼️</button>
                    <button type="button" title="Bullet List">📋</button>
                    <button type="button" title="Code">&lt;/&gt;</button>
                  </div>
                  <button type="submit" className="post-btn">Post Comment</button>
                </div>
              </div>
            </div>
          </form>

          {/* Comment List */}
          <div className="comments-display-list">
            {comments.map((comment) => (
              <div key={comment.id} className="single-comment-box">
                <img src={comment.avatar} alt={comment.author} className="user-avatar" />
                <div className="comment-details">
                  <div className="comment-user-meta">
                    <span className="author-name">{comment.author}</span>
                    <span className="time-posted">
                      <span style={{ marginRight: '4px' }}>🕒</span> {comment.date}
                    </span>
                  </div>
                  <p className="actual-comment-text">{comment.text}</p>
                  <div className="comment-actions-bar">
                    <button type="button" className="action-btn">
                      <span style={{ marginRight: '4px' }}>↩️</span> Reply
                    </button>
                    <button type="button" className="action-btn">
                      <span style={{ marginRight: '4px' }}>👍</span> Like
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CommentPage;