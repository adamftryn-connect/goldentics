import { useEffect, useMemo, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logoHeader from '../../images/logo-header.svg'
import userPicLogin from '../../images/icon/user-pic-login.svg'
import { getMe, logoutUser } from '../api/goldenticsApi.js'
import { emitAuthChanged, onAuthChanged } from '../utils/authEvents.js'

function Navbar() {
  const navigate = useNavigate()
  const [hasToken, setHasToken] = useState(
    Boolean(localStorage.getItem('goldentics_token'))
  )
  const [loading, setLoading] = useState(false)
  const [me, setMe] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function loadMe() {
      const token = localStorage.getItem('goldentics_token')
      setHasToken(Boolean(token))
      if (!token) {
        setMe(null)
        return
      }

      setLoading(true)
      try {
        const data = await getMe()
        if (!cancelled) setMe(data)
      } catch {
        if (!cancelled) {
          setMe(null)
          setHasToken(false)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadMe()
    const off = onAuthChanged(() => loadMe())
    return () => {
      cancelled = true
      off()
    }
  }, [])

  const menuLinks = useMemo(
    () => [
      { to: '/', label: 'Beranda', end: true },
      { to: '/grafik', label: 'Grafik' },
      { to: '/kalkulator', label: 'Kalkulator' },
      { to: '/prediksi', label: 'Prediksi' },
      { to: '/tentang', label: 'Tentang' },
    ],
    []
  )

  useEffect(() => {
    if (!isMenuOpen) return

    function onKeyDown(e) {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  function handleLogout() {
    logoutUser()
    emitAuthChanged()
    setIsMenuOpen(false)
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="nb-logo" onClick={() => navigate('/')}>
        <img className="nb-logo-img" src={logoHeader} alt="Goldentics" />
      </div>
      <div className="nb-links" aria-label="Navigasi utama">
        {menuLinks.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={Boolean(l.end)}
            className={({ isActive }) => 'nb-link' + (isActive ? ' active' : '')}
          >
            {l.label}
          </NavLink>
        ))}
      </div>
      <div className="nb-actions">
        {hasToken ? (
          <>
            <div className="nb-user">
              <img className="nb-user-pic" src={userPicLogin} alt="" aria-hidden="true" />
              <div className="nb-user-name">
                {loading ? 'Memuat…' : me?.fullName || me?.email || 'User'}
              </div>
            </div>
            <button className="nb-btn" onClick={handleLogout}>
              {loading ? '...' : 'Logout'}
            </button>
          </>
        ) : (
          <>
            <button className="nb-btn-secondary" onClick={() => navigate('/register')}>
              Register
            </button>
            <button className="nb-btn" onClick={() => navigate('/login')}>
              Login
            </button>
          </>
        )}
      </div>

      <button
        type="button"
        className="nb-burger"
        aria-label="Buka menu"
        aria-controls="nb-mobile-menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((v) => !v)}
      >
        <span className="nb-burger-lines" aria-hidden="true" />
      </button>

      {isMenuOpen ? (
        <div className="nb-mobile" role="dialog" aria-modal="true" id="nb-mobile-menu">
          <button
            type="button"
            className="nb-mobile-overlay"
            aria-label="Tutup menu"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="nb-mobile-panel">
            <div className="nb-mobile-hd">
              <div className="nb-mobile-title">Menu</div>
              <button
                type="button"
                className="nb-mobile-close"
                aria-label="Tutup menu"
                onClick={() => setIsMenuOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="nb-mobile-links">
              {menuLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={Boolean(l.end)}
                  className={({ isActive }) => 'nb-mobile-link' + (isActive ? ' active' : '')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>

            <div className="nb-mobile-actions">
              {hasToken ? (
                <>
                  <div className="nb-mobile-user">
                    <img className="nb-user-pic" src={userPicLogin} alt="" aria-hidden="true" />
                    <div className="nb-user-name">
                      {loading ? 'Memuat…' : me?.fullName || me?.email || 'User'}
                    </div>
                  </div>
                  <button className="nb-btn" onClick={handleLogout}>
                    {loading ? '...' : 'Logout'}
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="nb-btn-secondary"
                    onClick={() => {
                      setIsMenuOpen(false)
                      navigate('/register')
                    }}
                  >
                    Register
                  </button>
                  <button
                    className="nb-btn"
                    onClick={() => {
                      setIsMenuOpen(false)
                      navigate('/login')
                    }}
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  )
}

export default Navbar
