import { useEffect, useState } from 'react';

function Intro() {
  const [slogan, setSlogan] = useState({ text: '坐和放宽...' });

  useEffect(() => {
    const slogans = [
      { text: "希望能成为有趣的人" },
      { text: "给时光以生命", sub: "给岁月以文明" },
      { text: "你好,请多指教" },
      { text: "一望无际的迷雾中,", sub: "有人在寻找光明!" },
      { text: "你所热爱的", sub: "就是你的生活" },
      { text: "当你在凝视着网页的时候", sub: "网页也正在凝视着你" },
      { text: "热爱……" },
      { text: "平凡的日常正奇迹的发生着" },
      { text: "敬畏之心!" },
      { text: "赞美之心!" },
      { text: "我很好奇!" }
    ];

    const randomIndex = Math.floor(Math.random() * slogans.length);
    setSlogan(slogans[randomIndex]);
  }, []);

  return (
    <div className="ch intro">
      <div className="container">
        <div className="hello">
          <h1 id="slogan">
            {slogan.text}
            {slogan.sub && (
              <>
                <br />
                {slogan.sub}
              </>
            )}
          </h1>
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

