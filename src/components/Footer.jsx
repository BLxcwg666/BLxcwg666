import { useEffect, useState } from 'react';

function Footer() {
  const [runtime, setRuntime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const start = new Date('2019-7-25'); // Start date
      let diff = now - start; // Time difference in milliseconds

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      diff -= years * (1000 * 60 * 60 * 24 * 365);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);

      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);

      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);

      const seconds = Math.floor(diff / 1000);

      setRuntime(
        `已在风雨中度过 ${years} 年 ${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`
      );
    };

    // Initial call
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="footer ch" style={{ textAlign: 'center' }}>
      <div className="container">
        <h3>NekoRua</h3>
        <p>「命に嫌われている」</p>
        <br />
        <p className="c">
          Copyright © 2019-2025 BLxcwg666
          <br />
          <a href="https://icp.gov.moe/?keyword=20222120" target="_blank" rel="noopener noreferrer">
            萌ICP备20222120号
          </a>
          &nbsp;·&nbsp;
          <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">
            闽ICP备2021004171号-7
          </a>
          <br />
          <span id="runtime">{runtime}</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;

