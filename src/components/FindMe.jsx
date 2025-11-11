import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faBilibili, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen, faChartLine, faServer, faMusic } from '@fortawesome/free-solid-svg-icons';

function FindMe() {
  const mainLinks = [
    { 
      name: '我的博客!', 
      url: 'https://blog.xcnya.cn', 
      color: '#4a90e2',
      icon: faBookOpen
    },
    { 
      name: '网站统计', 
      url: 'https://analyze.xcnya.cn', 
      color: '#f5a623',
      icon: faChartLine
    },
    { 
      name: '服务器状态', 
      url: 'https://server.xcnya.cn', 
      color: '#7ed321',
      icon: faServer
    }
  ];

  const socialLinks = [
    {
      name: 'Telegram',
      url: 'https://t.me/xcnyacn',
      color: '#0088cc',
      icon: faTelegram
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/BLxcwg666',
      color: '#1da1f2',
      icon: faTwitter
    },
    {
      name: 'CloudMusic',
      url: 'https://music.163.com/#/user/home?id=1840090946',
      color: '#d43c33',
      icon: faMusic
    },
    {
      name: 'Bilibili',
      url: 'https://space.bilibili.com/409543366',
      color: '#fb7299',
      icon: faBilibili
    },
    {
      name: 'Github',
      url: 'https://github.com/BLxcwg666',
      color: '#24292e',
      icon: faGithub
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
                  <FontAwesomeIcon icon={link.icon} style={{ fontSize: '20px', color: '#ffffff' }} />
                  <span>
                    <p style={{ fontSize: '16px' }}>
                      <span>{link.name}</span>
                    </p>
                  </span>
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
                  <FontAwesomeIcon icon={link.icon} style={{ fontSize: '20px', color: '#ffffff' }} />
                  <span>{link.name}</span>
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

