import Layout from './pages/Layout'

function Home() {

  return (
    <>
    
      <Layout>
        <div className='text-white text-2xl font-light sm:text-4xl'>
          Download  <v className='text-red-500 font-extrabold bg-white px-2 rounded-md animate-pulse'>PDF</v><v className='text-white text-2xl px-2 font-bold sm:text-4xl'>Jadwal Sholat</v>
        </div>
        <div className="flex flex-col items-center">
        <img src="/Mosque.jpg" className='p-10 w-3/4'/>
        </div>
        <div className='pt-5 text-white text-xl font-sans animate-pulse'>
          Download PDF Jadwal Sholat untuk seluruh wilayah Indonesia
        </div>
        <div className=' text-white text-sm font-sans animate-pulse'>
          Waktu menurut Kementrian Agama Indonesia.
        </div>
      </Layout>
    </>
  )
}

export default Home
