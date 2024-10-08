import Layout from './pages/Layout'
import { GitHubLogoIcon} from '@radix-ui/react-icons'


function Support() {

  return (
    <>
      <Layout>
        <div className='text-white text-2xl font-light sm:text-4xl'>
          Support  <v className='text-red-500 font-extrabold bg-white px-2 rounded-md animate-bounce'>Us</v>
        </div>
        <div className="flex flex-col items-center">
          {/* <img src="/Mosque.jpg" className='p-10 w-3/4 ' /> */}
        </div>
        <div className='pt-5 text-white text-xl font-sans animate-pulse flex items-center justify-center gap-3'>
          Contribute to Project<GitHubLogoIcon className='w-8 h-8' />

        </div>
      </Layout>
    </>
  )
}

export default Support
