import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5,
  faJava,
  faJs, 
  faReact, 
  faNodeJs, 
  faPhp, 
  faPython,
  faDocker, 
  faGitAlt,
  faLinux
} from '@fortawesome/free-brands-svg-icons';
import { 
  faServer, 
  faDatabase, 
  faTerminal,
  faCopy,
  faCat
} from '@fortawesome/free-solid-svg-icons';
import { SiTypescript } from 'react-icons/si';

function About() {
  const techStack = [
    { name: 'HTML/CSS', icon: faHtml5, color: '#e34f26', desc: '造点破烂', isFontAwesome: true },
    { name: 'JavaScript', icon: faJs, color: '#f7df1e', desc: '会写亿点点', isFontAwesome: true },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', desc: '哎呀能用就行', isFontAwesome: false },
    { name: 'React', icon: faReact, color: '#61dafb', desc: '组件拼装师', isFontAwesome: true },
    { name: 'Node.js', icon: faNodeJs, color: '#339933', desc: '会写一点点', isFontAwesome: true },
    { name: 'Java', icon: faJava, color: '#E76F00', desc: '弹簧靴 & 方块人领域低手', isFontAwesome: true },
    { name: 'PHP', icon: faPhp, color: '#777bb4', desc: '会改别人写好的', isFontAwesome: true },
    { name: 'Python', icon: faPython, color: '#3776ab', desc: '能看懂就好', isFontAwesome: true },
    { name: 'Docker', icon: faDocker, color: '#2496ed', desc: '容器搬运工', isFontAwesome: true },
    { name: 'Linux', icon: faLinux, color: '#fcc624', desc: '诶这个我熟!', isFontAwesome: true },
    { name: 'Git', icon: faGitAlt, color: '#f05032', desc: 'commit && push', isFontAwesome: true },
    { name: 'Database', icon: faDatabase, color: '#4479a1', desc: '增删改查', isFontAwesome: true },
    { name: 'DevOps', icon: faServer, color: '#7ed321', desc: '运维能力MAX', isFontAwesome: true },
    { name: 'Terminal', icon: faTerminal, color: '#4ec9b0', desc: '命令行战士', isFontAwesome: true },
    { name: 'CV大法', icon: faCopy, color: '#f5a623', desc: 'Ctrl+C/V', isFontAwesome: true },
    { name: '喵喵叫', icon: faCat, color: '#ff69b4', desc: '喵喵喵喵喵~', isFontAwesome: true }
  ];

  return (
    <div className="ch about">
      <div className="container">
        <h2 className="chtitle">
          Who am <span>libxcnya.so</span>？
        </h2>
        <div className="clear">
          <div className="introduct">
            <img className="avatar" src="https://cdn.xcnya.cn/imgs/head1x2.webp" alt="Avatar" />
            <p style={{ paddingTop: '1em' }}>👋 Hi, Here!</p>
            <p>你好，这里是 libxcnya.so (a.k.a BLxcwg666), 16 y.o (?)，是学生，热爱计算机互联网事业，对新事物充满好奇</p>
            <p>
              一望无际的迷雾中，有人在寻找光明！很高兴遇到你，我们一直在耕耘这么一片简单的土壤，虽然没有尽善尽美，但以初见雏形。
              <br />
              <br />
              十年前我们仰望星空，十年后我们将俯视大地，未来的天空，必将为我们留下一片灿烂的曙光！
            </p>
            <div className="chatbox">
              <div className="line loading">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="tech-stack">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div key={index} className="tech-item">
                  <div className="tech-icon" style={{ backgroundColor: tech.color }}>
                    {tech.isFontAwesome ? (
                      <FontAwesomeIcon icon={tech.icon} />
                    ) : (
                      <Icon />
                    )}
                  </div>
                  <h4 className="tech-name">{tech.name}</h4>
                  <p className="tech-desc">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

