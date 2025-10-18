export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TsvWeb</title>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          
          .container {
            background: white;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            padding: 60px 40px;
            max-width: 600px;
            text-align: center;
          }
          
          h1 {
            font-size: 3rem;
            color: #2d3748;
            margin-bottom: 20px;
            font-weight: 700;
          }
          
          p {
            font-size: 1.25rem;
            color: #4a5568;
            margin-bottom: 30px;
            line-height: 1.6;
          }
          
          a {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            padding: 16px 32px;
            border-radius: 8px;
            font-size: 1.125rem;
            font-weight: 600;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          
          a:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
          }
          
          @media (max-width: 640px) {
            h1 {
              font-size: 2rem;
            }
            
            p {
              font-size: 1rem;
            }
            
            .container {
              padding: 40px 24px;
            }
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <h1>Welcome to TsvWeb</h1>
          <p>Our main site is now at <strong>tsvweb.co.uk</strong></p>
          <a href="https://tsvweb.co.uk">Visit tsvweb.co.uk</a>
        </div>
      </body>
    </html>
  )
}
