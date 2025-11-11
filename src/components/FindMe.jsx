import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faBilibili, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen, faChartLine, faServer, faMusic } from '@fortawesome/free-solid-svg-icons';

function FindMe() {
  const mainLinks = [
    { 
      name: '我的博客!', 
      url: 'https://blog.xcnya.cn', 
      color: '#28a9e0',
      icon: faBookOpen
    },
    { 
      name: '网站统计', 
      url: 'https://analyze.xcnya.cn', 
      color: '#28a9e0',
      icon: faChartLine
    },
    { 
      name: '服务器状态', 
      url: 'https://server.xcnya.cn', 
      color: '#28a9e0',
      icon: faServer
    }
  ];

  const socialLinks = [
    {
      name: 'Telegram',
      url: 'https://t.me/xcnyacn',
      color: '#28a9e0',
      icon: faTelegram
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/BLxcwg666',
      color: '#28a9e0',
      icon: faTwitter
    },
    {
      name: 'CloudMusic',
      url: 'https://music.163.com/#/user/home?id=1840090946',
      color: '#f12d35',
      icon: faMusic
    },
    {
      name: 'Bilibili',
      url: 'https://space.bilibili.com/409543366',
      color: '#f9a2a8',
      icon: faBilibili
    },
    {
      name: 'Github',
      url: 'https://github.com/BLxcwg666',
      color: '#353535',
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
                  <FontAwesomeIcon icon={link.icon} style={{ width: '20px', height: '20px', color: '#ffffff' }} />
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
                  {link.svg ? link.svg : <FontAwesomeIcon icon={link.icon} style={{ width: '20px', height: '20px', color: '#ffffff' }} />}
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

