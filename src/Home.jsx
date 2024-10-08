import Layout from './pages/Layout'

function Home() {

  return (
    <>
      <Layout>
        <div className='text-white text-2xl font-light sm:text-4xl'>
          Export <v className='text-white text-2xl font-bold sm:text-4xl'>Pray Times</v> <v className='text-red-500 font-extrabold bg-white px-2 rounded-md animate-pulse'>to PDF</v>
        </div>
        <div className="flex flex-col items-center">
        <img src="/Mosque.jpg" className='p-10 w-3/4'/>
        </div>
        <div className='pt-5 text-white text-xl font-sans animate-pulse'>
          Easily Generate Pray Times PDF for all Indonesia Region
        </div>
      </Layout>
    </>
  )
}

export default Home
