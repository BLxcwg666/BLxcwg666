import { useEffect, useState } from 'react';

function Friends() {
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://rua.xcnya.cn/api/v2/links/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('请求友链失败: ' + response.status);
      })
      .then(data => {
        if (data && data.data) {
          setLinks(data.data);
        }
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  return (
    <div className="gate ch">
      <div className="container links">
        <h2 className="chtitle">
          我的<span>好朋友</span>们
        </h2>
        <div className="clear" id="links">
          {error && <p style={{ color: 'rgba(255,255,255,0.6)' }}>加载友链失败</p>}
          {links.map((link, index) => (
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

