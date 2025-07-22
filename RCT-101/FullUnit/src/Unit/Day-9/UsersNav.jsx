import React from 'react'

function UsersNav() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">MySite</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/comment">Comments</a>
        </div>
      </nav>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #1f1f1f;
          color: white;
          padding: 15px 30px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          gap: 20px;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #00bcd4;
        }
      `}</style>
    </>
  )
}

export default UsersNav
