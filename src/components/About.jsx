function About() {
  const skills = [
    { name: 'HTML', width: '70%', desc: '造点破烂' },
    { name: 'C/C++', width: '30%', desc: '能看懂就好' },
    { name: 'PHP', width: '40%', desc: '会改别人写好的' },
    { name: 'Node.js', width: '85%', desc: '会写一点点' },
    { name: '复制/粘贴', width: '85%', desc: '我事CV工程师' },
    { name: '运维能力', width: '95%', desc: '诶这个我熟!' },
    { name: '创新能力', width: '5%', desc: '这个真没有' },
    { name: '喵喵叫(?)', width: '100%', desc: '喵喵喵喵喵~' }
  ];

  return (
    <div className="ch about">
      <div className="container">
        <h2 className="chtitle">
          Who am <span>BLxcwg666</span>？
        </h2>
        <div className="clear">
          <div className="introduct">
            <img className="avatar" src="https://cdn.xcnya.cn/imgs/head1x2.webp" alt="Avatar" />
            <p style={{ paddingTop: '1em' }}>👋 Hi, Here!</p>
            <p>你好,这里是 BLxcwg666(小陈网管),16 y.o(?),是学生,热爱计算机互联网事业,对新事物充满好奇</p>
            <p>
              一望无际的迷雾中,有人在寻找光明!很高兴遇到你,我们一直在耕耘这么一片简单的土壤,虽然没有尽善尽美,但以初见雏形。
              <br />
              <br />
              十年前我们仰望星空,十年后我们将俯视大地,未来的天空,必将为我们留下一片灿烂的曙光!
            </p>
            <div className="chatbox">
              <div className="line loading">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <ul className="skill clear">
            {skills.map((skill, index) => (
              <li key={index}>
                <p>{skill.name}</p>
                <div className="progress">
                  <div style={{ width: skill.width }}></div>
                  <span>{skill.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;

