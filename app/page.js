export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TsvWeb - Web Design & SEO Birmingham</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #ffffff;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          
          .header {
            background: white;
            padding: 20px 40px;
            border-bottom: 1px solid #e5e7eb;
          }
          
          .logo-img {
            height: 40px;
            width: auto;
          }
          
          .main {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 60px 20px;
          }
          
          .container {
            max-width: 900px;
            text-align: center;
          }
          
          h1 {
            font-size: 3.75rem;
            color: #000000;
            margin-bottom: 20px;
            font-weight: 900;
            line-height: 1.1;
            letter-spacing: -1.5px;
          }
          
          .highlight {
            color: #0066ff;
            display: block;
          }
          
          .subtitle {
            font-size: 1.125rem;
            color: #4b5563;
            margin-bottom: 40px;
            line-height: 1.7;
            max-width: 650px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .cta-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;
          }
          
          .cta-button {
            display: inline-block;
            background: #0066ff;
            color: white;
            text-decoration: none;
            padding: 16px 36px;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 700;
            transition: all 0.2s;
            box-shadow: 0 2px 8px rgba(0, 102, 255, 0.25);
          }
          
          .cta-button:hover {
            background: #0052cc;
            transform: translateY(-2px);
            box-shadow: 0 4px 16px rgba(0, 102, 255, 0.35);
          }
          
          .whatsapp-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #0066ff;
            text-decoration: none;
            font-size: 1rem;
            font-weight: 600;
            transition: all 0.2s;
          }
          
          .whatsapp-link:hover {
            color: #0052cc;
            gap: 12px;
          }
          
          .whatsapp-icon {
            width: 24px;
            height: 24px;
            fill: currentColor;
          }
          
          .divider {
            color: #9ca3af;
            font-size: 0.875rem;
            margin: 10px 0;
          }
          
          .footer {
            text-align: center;
            padding: 30px 20px;
            color: #9ca3af;
            font-size: 0.875rem;
            border-top: 1px solid #e5e7eb;
          }
          
          @media (max-width: 768px) {
            .header {
              padding: 16px 20px;
            }
            
            .logo-img {
              height: 32px;
            }
            
            .main {
              padding: 40px 20px;
            }
            
            h1 {
              font-size: 2.5rem;
              letter-spacing: -1px;
            }
            
            .subtitle {
              font-size: 1rem;
            }
            
            .cta-button {
              padding: 14px 28px;
              font-size: 0.95rem;
              width: 100%;
              max-width: 300px;
            }
            
            .whatsapp-link {
              font-size: 0.95rem;
            }
          }
          
          @media (max-width: 480px) {
            h1 {
              font-size: 2rem;
            }
            
            .subtitle {
              font-size: 0.95rem;
            }
          }
        `}</style>
      </head>
      <body>
        <div className="header">
          <img src="/TsvWeb.png" alt="TsvWeb Logo" className="logo-img" />
        </div>
        
        <div className="main">
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
              <a href="https://tsvweb.co.uk" className="cta-button">
                Visit Our New Site →
              </a>
              
              <div className="divider">or</div>
              
              <a 
                href="https://api.whatsapp.com/send/?phone=447444358808&text&type=phone_number&app_absent=0" 
                className="whatsapp-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="whatsapp-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp: 07444 358808
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer">
          © 2025 TsvWeb. All rights reserved.
        </div>
      </body>
    </html>
  )
}
