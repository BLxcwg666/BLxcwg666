import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Friends() {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ref, isVisible] = useScrollAnimation();

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        // Use proxy in development, direct URL in production
        const apiUrl = import.meta.env.DEV
          ? '/api/v2/links/all'
          : 'https://rua.xcnya.cn/api/v2/links/all';

        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch links: ${response.status}`);
        }

        const data = await response.json();
        if (data && data.data) {
          setLinks(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch links:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  return (
    <div ref={ref} className={`gate ch scroll-animate ${isVisible ? 'visible' : ''}`}>
      <div className="container links">
        <h2 className="chtitle">
          我的<span>好朋友</span>们
        </h2>
        <div className="clear" id="links">
          {loading && <p style={{ color: 'rgba(255,255,255,0.6)' }}>加载中...</p>}
          {error && <p style={{ color: 'rgba(255,255,255,0.6)' }}>加载友链失败</p>}
          {!loading && !error && links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              <div className="item">
                <div className="avatar">
                  <img src={link.avatar} alt={link.name} />
                </div>
                <div className="inner">
                  <h5>{link.name}</h5>
                  <p>{link.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Friends;

