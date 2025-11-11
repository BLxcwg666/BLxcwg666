import { useEffect, useState } from 'react';

function Intro() {
  const [slogan, setSlogan] = useState({ text: '坐和放宽...' });
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const slogans = [
      { text: "世界不完美", sub: "但依旧值得被记录" },
      { text: "你好奇的地方", sub: "就是你要去的方向" },
      { text: "人生没有F5", sub: "但可以Ctrl+S" },
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
      { text: "我很好奇!" },
      { text: "路还很长", sub: "但风也正轻轻吹着" },
      { text: "与其追问意义", sub: "不如先点亮自己" },
      { text: "此刻的微光", sub: "也是光" },
      { text: "在代码与梦之间", sub: "总要有人继续写下去" },
      { text: "思考，是灵魂的呼吸" },
      { text: "写给未来的commit", sub: "别忘了加注释" },
      { text: "Bug只是伪装成问题的朋友" },
      { text: "404不是终点", sub: "只是另一种开始" },
      { text: "世界在运行中", sub: "别轻易终止进程" },
      { text: "梦想加载中…", sub: "请稍候" },
      { text: "生活没有IDE", sub: "只能手动debug" },
      { text: "if(希望) { continue; }" },
      { text: "try { tomorrow(); } catch(e) { retry(); }" },
      { text: "在0和1的缝隙里", sub: "藏着无限可能" },
      { text: "编译时光", sub: "运行梦想" },
      { text: "即使是最小的margin", sub: "也值得被认真对待" },
      { text: "像素虽小", sub: "却能构成整个世界" },
      { text: "保持异步", sub: "但不要失去同步的勇气" },
      { text: "有些错误不是bug", sub: "而是feature" },
      { text: "在递归的尽头", sub: "是base case的温柔" },
      { text: "不要停止pull", sub: "生活需要不断merge" },
      { text: "每个console.log", sub: "都是对世界的轻声诉说" },
      { text: "即使内存有限", sub: "也要为美好留出空间" },
      { text: "在git push之前", sub: "记得先pull这个世界" },
      { text: "生活没有完美算法", sub: "但可以有优雅的启发式" },
      { text: "当代码成为诗", sub: "bug也会变成韵脚" },
      { text: "保持好奇心", sub: "那是你的inner child" },
      { text: "在无尽的scroll中", sub: "寻找那个关键的viewport" }
    ];

    const getRandomSlogan = () => {
      const randomIndex = Math.floor(Math.random() * slogans.length);
      return slogans[randomIndex];
    };

    setSlogan(getRandomSlogan());

    const interval = setInterval(() => {
      setFade(false);
      
      setTimeout(() => {
        setSlogan(getRandomSlogan());
        setFade(true);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ch intro">
      <div className="container">
        <div className="hello">
          <h1 id="slogan" className={fade ? 'fade-in' : 'fade-out'}>
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
            libxcnya.so の Catnest
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Intro;

