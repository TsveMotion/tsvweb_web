// app/page.js

export default function Home() {
  return (
    <>
      <header className="header">
        <img src="/TsvWeb.png" alt="TsvWeb Logo" className="logo-img" />
      </header>

      <main className="main">
        <div className="container">
          <h1>
            Get More Customers
            <span className="highlight">Online in Birmingham</span>
          </h1>
          <p className="subtitle">
            Fast, SEO-optimised websites that actually bring you leads.
            No fluff. Just results.
          </p>

          <div className="cta-container">
            <a
              href="https://tsvweb.co.uk"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Our New Site →
            </a>

            <div className="divider">or</div>

            <a
              href="https://api.whatsapp.com/send/?phone=447444358808&text&type=phone_number&app_absent=0"
              className="whatsapp-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 07444 358808
            </a>
          </div>
        </div>
      </main>

      <footer className="footer">
        © 2025 TsvWeb. All rights reserved.
      </footer>
    </>
  );
}
