import Layout from './pages/Layout'

function Home() {

  return (
    <>
      <head>
        <meta property="og:url" content="https://pray-times-pdf.netlify.app" />
        <meta property="og:site_name" content="pray times" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="pray times" />
        <meta name="twitter:description" content="pray times" />
        <meta name="twitter:image" content="https://pray-times-pdf.netlify.app/Mosque.jpg" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="og:image" content="https://pray-times-pdf.netlify.app/Mosque.jpg" />
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/Favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pray Times</title>
        <meta name="google-site-verification" content="lqG0ASgmrG1sEZ8nHEZb6ftVe741ToXxtdU_LRrFDIg" />
      </head>
      <Layout>
        <div className='text-white text-2xl font-light sm:text-4xl'>
          Export <v className='text-white text-2xl font-bold sm:text-4xl'>Pray Times</v> <v className='text-red-500 font-extrabold bg-white px-2 rounded-md animate-pulse'>to PDF</v>
        </div>
        <div className="flex flex-col items-center">
          <img src="/Mosque.jpg" className='p-10 w-3/4' />
        </div>
        <div className='pt-5 text-white text-xl font-sans animate-pulse'>
          Easily Generate Pray Times PDF for all Indonesia Regions
        </div>
      </Layout>
    </>
  )
}

export default Home
