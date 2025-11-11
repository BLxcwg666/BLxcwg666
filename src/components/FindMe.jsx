function FindMe() {
  const mainLinks = [
    { name: '我的博客!', url: 'https://blog.xcnya.cn', color: '#28a9e0' },
    { name: '网站统计', url: 'https://analyze.xcnya.cn', color: '#28a9e0' },
    { name: '服务器状态', url: 'https://server.xcnya.cn', color: '#28a9e0' }
  ];

  const socialLinks = [
    {
      name: 'Telegram',
      url: 'https://t.me/xcnyacn',
      color: '#28a9e0',
      svg: (
        <svg t="1685262390472" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M512 16C238 16 16 238 16 512s222 496 496 496 496-222 496-496S786 16 512 16z m243.6 339.8l-81.4 383.6c-6 27.2-22.2 33.8-44.8 21l-124-91.4-59.8 57.6c-6.6 6.6-12.2 12.2-25 12.2l8.8-126.2 229.8-207.6c10-8.8-2.2-13.8-15.4-5l-284 178.8-122.4-38.2c-26.6-8.4-27.2-26.6 5.6-39.4l478.2-184.4c22.2-8 41.6 5.4 34.4 39z" fill="#ffffff"></path>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/BLxcwg666',
      color: '#28a9e0',
      icon: 'icon-twitter'
    },
    {
      name: 'CloudMusic',
      url: 'https://music.163.com/#/user/home?id=1840090946',
      color: '#f12d35',
      svg: (
        <svg t="1685262595298" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M628.8 4.8c28.8-6.4 59.2-6.4 84.8 0 32 6.4 62.4 22.4 88 43.2 9.6 6.4 19.2 16 22.4 28.8 8 16 8 35.2-6.4 52.8-9.6 12.8-22.4 22.4-38.4 25.6-12.8 3.2-25.6 0-38.4-6.4-6.4-3.2-9.6-9.6-16-12.8-16-9.6-35.2-19.2-56-19.2-12.8 0-25.6 9.6-35.2 19.2-9.6 9.6-12.8 22.4-9.6 35.2 6.4 25.6 12.8 52.8 19.2 78.4 49.6 3.2 100.8 16 144 43.2 43.2 25.6 78.4 59.2 110.4 97.6 25.6 32 46.4 72 56 110.4 12.8 43.2 16 88 12.8 134.4-3.2 35.2-9.6 75.2-22.4 107.2-32 84.8-91.2 160-169.6 208-56 35.2-120 59.2-188.8 65.6-46.4 6.4-91.2 6.4-137.6-3.2-94.4-16-182.4-62.4-248-131.2-65.6-65.6-113.6-153.6-131.2-244.8-14.4-67.2-14.4-136 3.2-204.8 19.2-81.6 59.2-160 116.8-222.4 49.6-49.6 104-91.2 169.6-116.8 6.4-3.2 12.8-6.4 19.2-6.4 16-3.2 32 0 43.2 9.6 16 12.8 25.6 32 22.4 52.8-3.2 19.2-16 38.4-35.2 46.4-65.6 22.4-123.2 68.8-163.2 123.2-35.2 49.6-62.4 107.2-68.8 169.6-9.6 62.4 0 123.2 19.2 179.2 32 84.8 94.4 156.8 172.8 195.2 49.6 25.6 100.8 38.4 156.8 35.2 46.4 0 88-6.4 131.2-22.4 35.2-12.8 72-32 100.8-59.2 25.6-22.4 49.6-52.8 68.8-84.8 9.6-16 16-32 22.4-52.8 12.8-52.8 16-107.2 0-156.8-16-35.2-43.2-75.2-75.2-104-16-12.8-28.8-25.6-49.6-35.2-16-9.6-32-12.8-49.6-19.2 12.8 46.4 22.4 91.2 35.2 137.6 3.2 9.6 3.2 22.4 6.4 32 3.2 46.4-16 94.4-46.4 131.2-28.8 32-68.8 59.2-110.4 65.6-46.4 9.6-97.6 0-137.6-25.6-38.4-22.4-65.6-62.4-81.6-104-9.6-22.4-12.8-49.6-12.8-75.2-3.2-56 12.8-110.4 43.2-156.8 35.2-56 94.4-91.2 156.8-110.4-3.2-16-9.6-35.2-12.8-52.8-12.8-38.4-9.6-81.6 9.6-116.8 9.6-19.2 22.4-35.2 38.4-52.8 22.4-11.2 44.8-24 67.2-30.4m-150.4 414.4c-16 16-28.8 38.4-32 62.4-3.2 22.4-3.2 43.2 0 65.6 6.4 22.4 16 46.4 38.4 62.4 16 9.6 35.2 12.8 56 9.6 35.2-6.4 62.4-38.4 65.6-75.2 0-9.6-3.2-16-6.4-25.6-12.8-49.6-25.6-97.6-38.4-147.2-33.6 9.6-59.2 25.6-83.2 48z" fill="#ffffff"></path>
        </svg>
      )
    },
    {
      name: 'Bilibili',
      url: 'https://space.bilibili.com/409543366',
      color: '#f9a2a8',
      icon: 'icon-bilibili'
    },
    {
      name: 'Github',
      url: 'https://github.com/BLxcwg666',
      color: '#353535',
      icon: 'icon-github'
    }
  ];

  return (
    <div className="find ch">
      <div className="container links">
        <h2 className="chtitle">
          我<span>出没的地方</span>？
        </h2>
        <div className="clear col-3">
          {mainLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              <div className="item">
                <div className="bg" style={{ backgroundColor: link.color }}></div>
                <div className="inner">
                  <span>{link.name}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="clear">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              <div className="item">
                <div className="bg" style={{ backgroundColor: link.color }}></div>
                <div className="inner">
                  {link.svg ? link.svg : <i className={link.icon}></i>}
                  <span>
                    {link.svg ? (
                      <p style={{ fontSize: '16px' }}>
                        <span>{link.name}</span>
                      </p>
                    ) : (
                      link.name
                    )}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FindMe;

