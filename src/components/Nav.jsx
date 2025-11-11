import { Fragment } from 'react';

function Nav() {
  const navItems = [
    { name: '首页', url: 'https://www.xcnya.cn', active: true },
    { name: '博客', url: 'https://blog.xcnya.cn', active: false },
    { name: '归档', url: 'https://blog.xcnya.cn/timeline', active: false },
    { name: '留言', url: 'https://blog.xcnya.cn/talk.html', active: false }
  ];

  return (
    <nav>
      {navItems.map((item, index) => (
        <Fragment key={index}>
          {index > 0 && <a className="clip"></a>}
          <a 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={item.active ? 'active' : ''}
          >
            {item.name}
          </a>
        </Fragment>
      ))}
    </nav>
  );
}

export default Nav;

