import React, {useEffect} from 'react'
import {useRouter} from 'next/router'


const Jams = () => {
  const router = useRouter()
  useEffect(() => {
  //  Router.
    router.push('https://itch.io/jams/hosted-by-hanzhaxors')
  })
  return <div className='redirector'>Redirecting to game jams ...</div>
}

export default Jams;
