import React, {useEffect} from 'react'
import {useRouter} from 'next/router'

type Props = {}

function gameJams({}: Props) {
  const router = useRouter()
  useEffect(() => {
  //  Router.
    router.push('https://itch.io/jams/hosted-by-hanzhaxors')
  })
  
  return <div className='redirector'>Redirecting to game jams ...</div>
}

export default gameJams