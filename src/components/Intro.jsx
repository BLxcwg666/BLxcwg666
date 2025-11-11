import { useEffect, useState } from 'react';

function Intro() {
  const [slogan, setSlogan] = useState('坐和放宽...');

  useEffect(() => {
    const slogans = [
      "希望能成为有趣的人",
      "给时光以生命<br>给岁月以文明",
      "你好,请多指教",
      "一望无际的迷雾中,<br>有人在寻找光明!",
      "你所热爱的<br>就是你的生活",
      "当你在凝视着网页的时候<br>网页也正在凝视着你",
      "热爱……",
      "平凡的日常正奇迹的发生着",
      "敬畏之心!",
      "赞美之心!",
      "我很好奇!"
    ];

    const randomIndex = Math.floor(Math.random() * slogans.length);
    setSlogan(slogans[randomIndex]);
  }, []);

  return (
    <div className="ch intro">
      <div className="container">
        <div className="hello">
          <h1 id="slogan" dangerouslySetInnerHTML={{ __html: slogan }}></h1>
          <h2>
            <div className="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
            BLxcwg666 の Catnest
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Intro;

