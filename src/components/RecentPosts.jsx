import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function RecentPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ref, isVisible] = useScrollAnimation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Use proxy in development, direct URL in production
        const apiUrl = import.meta.env.DEV
          ? '/api/v2/posts?page=1&size=6&sortOrder=1'
          : 'https://rua.xcnya.cn/api/v2/posts?page=1&size=6&sortOrder=1';

        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status}`);
        }

        const data = await response.json();
        if (data && data.data) {
          setPosts(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch posts:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Format date to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  // Get text excerpt
  const getExcerpt = (text, maxLength = 80) => {
    if (!text) return '暂无摘要...';
    const cleanText = text.replace(/#+/g, '').replace(/\n/g, ' ').trim();
    return cleanText.length > maxLength 
      ? cleanText.substring(0, maxLength) + '...' 
      : cleanText;
  };

  return (
    <div ref={ref} className={`posts ch scroll-animate ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="chtitle">
          最近的<span>文章</span>
        </h2>
        
        {loading && (
          <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', padding: '2em 0' }}>
            加载中...
          </p>
        )}
        
        {error && (
          <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', padding: '2em 0' }}>
            加载文章失败
          </p>
        )}
        
        {!loading && !error && (
          <div className="posts-grid">
             {posts.map((post) => (
               <a 
                 key={post.id} 
                 href={`https://blog.xcnya.cn/posts/${post.category.slug}/${post.slug}`} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="post-card"
               >
                <div className="post-header">
                  <h3 className="post-title">{post.title}</h3>
                  <div className="post-meta">
                    <span className="post-date">{formatDate(post.created)}</span>
                    {post.category && (
                      <>
                        <span className="separator">·</span>
                        <span className="post-category">{post.category.name}</span>
                      </>
                    )}
                  </div>
                </div>
                <p className="post-excerpt">{getExcerpt(post.text)}</p>
                <div className="post-footer">
                  {post.tags && post.tags.length > 0 && (
                    <div className="post-tags">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="tag">#{tag}</span>
                      ))}
                    </div>
                  )}
                  {post.count && (
                    <div className="post-stats">
                      <span>阅读 {post.count.read}</span>
                      {post.count.like > 0 && (
                        <>
                          <span className="separator">·</span>
                          <span>点赞 {post.count.like}</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
        
        <div style={{ textAlign: 'center', marginTop: '2em' }}>
          <a 
            href="https://blog.xcnya.cn/posts" 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-more-btn"
          >
            查看更多文章 →
          </a>
        </div>
      </div>
    </div>
  );
}

export default RecentPosts;

