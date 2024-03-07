import React from 'react'

const Index = () => {
  return (
    <>

    </>
  )
}

export default Index

export async function getServerSideProps () {
  return {
    redirect: {
      destination: '/shorts/Ah7-PPjQ5Ls',
      permanent: false
    }
  }
}
