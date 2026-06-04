import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import iconUser from '../../images/icon/user.svg'
import iconReact from '../../images/icon/react.svg'
import iconNode from '../../images/icon/node-js.svg'
import iconHuggingFace from '../../images/icon/hugging-face.svg'
import iconPostgre from '../../images/icon/postgre.svg'
import iconTailwind from '../../images/icon/css-tailwind.svg'
import iconRestApi from '../../images/icon/rest-api.svg'
import iconDataSource from '../../images/icon/kaggle-sumber-data.svg'
import iconDeploy from '../../images/icon/deployment.svg'
import './Tentang.css'

function Tentang() {
  return (
    <>
      <Navbar />

      <div className="page-hero about-hero">
        <div className="wrap2 about-hero-grid">
          <div className="ah-left">
            <div className="eyebrow">Tentang Proyek</div>
            <h1>Goldentics —<br />dibangun dengan data,<br /><em>untuk investor.</em></h1>
            <p>Goldentics adalah proyek capstone Coding Camp DBS Foundation 2026 yang menghadirkan analitik harga emas berbasis AI — mudah diakses, transparan, dan bermanfaat untuk semua kalangan investor.</p>
            <div className="ah-badges">
              <span className="ah-badge">Capstone Project</span>
              <span className="ah-badge">DBS Foundation</span>
              <span className="ah-badge">2026</span>
            </div>
          </div>
          <div className="ah-right">
            <div className="project-visual">
              <div className="pv-bar">
                <div className="pv-dot"></div><div className="pv-dot"></div><div className="pv-dot"></div>
              </div>
              <div className="pv-rows">
                <div className="pv-row"><span className="pv-key">Frontend</span><div className="pv-val-bar" style={{background:'#C9910A',opacity:.8}}></div><span className="pv-val-text" style={{color:'#C9910A'}}>React</span></div>
                <div className="pv-row"><span className="pv-key">Backend</span><div className="pv-val-bar" style={{background:'#4ade80',opacity:.7}}></div><span className="pv-val-text" style={{color:'#4ade80'}}>Node.js</span></div>
                <div className="pv-row"><span className="pv-key">AI Model</span><div className="pv-val-bar" style={{background:'#60a5fa',opacity:.7}}></div><span className="pv-val-text" style={{color:'#60a5fa'}}>HuggingFace</span></div>
                <div className="pv-row"><span className="pv-key">Data</span><div className="pv-val-bar" style={{background:'#f472b6',opacity:.7}}></div><span className="pv-val-text" style={{color:'#f472b6'}}>Logam Mulia</span></div>
                <div className="pv-row"><span className="pv-key">Charts</span><div className="pv-val-bar" style={{background:'#a78bfa',opacity:.7}}></div><span className="pv-val-text" style={{color:'#a78bfa'}}>Line Chart</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section">
        <div className="wrap2">
          <div className="eyebrow">Tim Pengembang</div>
          <div className="section-title">Dibuat oleh</div>
          <p className="section-sub">Tim developer Coding Camp DBS Foundation Batch 2026</p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">
                <img className="icon-img" src={iconUser} alt="" aria-hidden="true" />
              </div>
              <div className="team-name">Developer 1</div>
              <div className="team-role">Frontend Developer</div>
              <div className="team-desc">Bertanggung jawab atas desain UI/UX dan implementasi React — memastikan pengalaman pengguna yang intuitif dan responsif.</div>
            </div>
            <div className="team-card">
              <div className="team-avatar">
                <img className="icon-img" src={iconUser} alt="" aria-hidden="true" />
              </div>
              <div className="team-name">Developer 2</div>
              <div className="team-role">Backend Developer</div>
              <div className="team-desc">Membangun REST API dengan Node.js &amp; Express, PostgreSQL untuk mengelola data harga emas, dan mengintegrasikan model AI ke pipeline backend.</div>
            </div>
            <div className="team-card">
              <div className="team-avatar">
                <img className="icon-img" src={iconUser} alt="" aria-hidden="true" />
              </div>
              <div className="team-name">Developer 3</div>
              <div className="team-role">Data &amp; AI Engineer</div>
              <div className="team-desc">Mengembangkan model prediksi yang di deploy di HuggingFace, mengelola dataset historis, dan memvalidasi akurasi output model AI.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="stack-section">
        <div className="wrap2">
          <div className="eyebrow">Stack Teknologi</div>
          <div className="section-title">Teknologi yang Digunakan</div>
          <p className="section-sub stack-section-sub">Dibangun dengan teknologi modern yang scalable dan maintainable</p>
          <div className="stack-grid">
            <div className="stack-item"><div className="stack-icon"><img className="icon-img" src={iconReact} alt="" aria-hidden="true" /></div><div><div className="stack-name">React + Vite</div><div className="stack-role">Frontend Framework &amp; Build Tool</div></div></div>
            <div className="stack-item"><div className="stack-icon"><img className="icon-img" src={iconNode} alt="" aria-hidden="true" /></div><div><div className="stack-name">Node.js + Express</div><div className="stack-role">Backend Tools</div></div></div>
            <div className="stack-item"><div className="stack-icon"><img className="icon-img" src={iconHuggingFace} alt="" aria-hidden="true" /></div><div><div className="stack-name">HuggingFace Inference</div><div className="stack-role">Model Prediksi AI</div></div></div>
            <div className="stack-item"><div className="stack-icon"><img className="icon-img" src={iconPostgre} alt="" aria-hidden="true" /></div><div><div className="stack-name">PostgreSQL</div><div className="stack-role">Database</div></div></div>
            <div className="stack-item"><div className="stack-icon"><img className="icon-img" src={iconTailwind} alt="" aria-hidden="true" /></div><div><div className="stack-name">Tailwind CSS</div><div className="stack-role">Styling &amp; Design System</div></div></div>
            <div className="stack-item"><div className="stack-icon"><img className="icon-img" src={iconRestApi} alt="" aria-hidden="true" /></div><div><div className="stack-name">REST API</div><div className="stack-role">Komunikasi Frontend–Backend</div></div></div>
            <div className="stack-item"><div className="stack-icon"><img className="icon-img" src={iconDataSource} alt="" aria-hidden="true" /></div><div><div className="stack-name">Kaggle / Logam Mulia</div><div className="stack-role">Sumber Data Harga Emas</div></div></div>
            <div className="stack-item"><div className="stack-icon"><img className="icon-img" src={iconDeploy} alt="" aria-hidden="true" /></div><div><div className="stack-name">Vercel + Railway</div><div className="stack-role">Deployment &amp; Hosting</div></div></div>
          </div>
        </div>
      </div>

      <footer className="footer footer-about">
        <div className="wrap2">
          <div className="footer-top">
            <div>
              <div className="f-logo">Golden<span>tics</span></div>
              <p className="f-desc">Platform analisis tren harga emas berbasis AI.</p>
            </div>
            <div className="f-col">
              <h4>Navigasi</h4>
            <Link to="/">Beranda</Link>
            <Link to="/grafik">Grafik</Link>
            <Link to="/kalkulator">Kalkulator</Link>
            <Link to="/prediksi">Prediksi</Link>
            </div>
            <div className="f-col">
              <h4>Tautan</h4>
              <a href="#">GitHub</a><a href="#">Kebijakan Privasi</a><a href="#">Syarat &amp; Ketentuan</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Goldentics — Coding Camp DBS Foundation</p>
            <div className="f-bottom-links">
              <a href="#">Kebijakan Privasi</a>
              <a href="#">Syarat &amp; Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Tentang
