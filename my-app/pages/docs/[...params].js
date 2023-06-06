import { useRouter } from 'next/router';
import React from 'react'

function index() {
    const router = useRouter();
    // console.log(router.query)
    const {params }  = router.query
    if(params?.length ===2 ){
        return (<h2>Viewing docs for feature</h2>)
    }
  return (
    <h1> Docs Home Page</h1>
    )
}

export default index