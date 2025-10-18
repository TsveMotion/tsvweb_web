export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TsvWeb - Web Design & SEO Birmingham</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f8f9fa;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          
          .header {
            background: white;
            padding: 20px 40px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          }
          
          .logo {
            font-size: 1.5rem;
            font-weight: 800;
            color: #1a1a1a;
            letter-spacing: -0.5px;
          }
          
          .logo-accent {
            color: #0066ff;
          }
          
          .main {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
          }
          
          .container {
            max-width: 900px;
            text-align: center;
          }
          
          .badge {
            display: inline-block;
            background: #e6f2ff;
            color: #0066ff;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.875rem;
            font-weight: 600;
            margin-bottom: 24px;
          }
          
          h1 {
            font-size: 3.5rem;
            color: #1a1a1a;
            margin-bottom: 16px;
            font-weight: 800;
            line-height: 1.1;
            letter-spacing: -1px;
          }
          
          .highlight {
            color: #0066ff;
          }
          
          .subtitle {
            font-size: 1.25rem;
            color: #666;
            margin-bottom: 40px;
            line-height: 1.6;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .cta-button {
            display: inline-block;
            background: #0066ff;
            color: white;
            text-decoration: none;
            padding: 18px 40px;
            border-radius: 8px;
            font-size: 1.125rem;
            font-weight: 700;
            transition: all 0.2s;
            box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
          }
          
          .cta-button:hover {
            background: #0052cc;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 102, 255, 0.4);
          }
          
          .footer {
            text-align: center;
            padding: 30px 20px;
            color: #999;
            font-size: 0.875rem;
          }
          
          @media (max-width: 768px) {
            .header {
              padding: 16px 20px;
            }
            
            h1 {
              font-size: 2.25rem;
            }
            
            .subtitle {
              font-size: 1rem;
            }
            
            .cta-button {
              padding: 16px 32px;
              font-size: 1rem;
            }
          }
        `}</style>
      </head>
      <body>
        <div className="header">
          <div className="logo">
            TSV<span className="logo-accent">WEB</span>
          </div>
        </div>
        
        <div className="main">
          <div className="container">
            <div className="badge">🚀 Site Relocated</div>
            <h1>
              Get More Customers<br />
              <span className="highlight">Online in Birmingham</span>
            </h1>
            <p className="subtitle">
              Fast, SEO-optimised websites that actually bring you leads.<br />
              No fluff. Just results.
            </p>
            <a href="https://tsvweb.co.uk" className="cta-button">
              Visit Our New Site →
            </a>
          </div>
        </div>
        
        <div className="footer">
          © 2025 TsvWeb. All rights reserved.
        </div>
      </body>
    </html>
  )
}
