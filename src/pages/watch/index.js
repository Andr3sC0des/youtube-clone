import Navbar from '@/components/Header/Navbar'
import { useEffect } from 'react'

const Index = ({ id }) => {
  useEffect(() => {
    import('@/lib/LiteYTEmbed')
  }, [])

  return (
    <>
      <Navbar />
      <div className='liteYoutube'>
        <lite-youtube videoid={id} />
      </div>
    </>
  )
}

export default Index

export async function getServerSideProps (ctx) {
  const { query } = ctx

  if (!query.v) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      id: query.v
    }
  }
}
