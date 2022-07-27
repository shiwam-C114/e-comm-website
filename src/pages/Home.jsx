import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

function Home() {
  const [productData, setProductData] = useState([])
  useEffect(() => {
    getData()
  
    return () => {
      
    }
  }, [])
  
  function getData() {
    fetch('https://demo-e-comm-data.herokuapp.com/products').then(res=>res.json()).then((data)=>{setProductData(data);
  console.log(data)})
  }
  return (
    <div>
      {
        productData?.map(prod=>(
          <div key={prod._id.$oid}>
          <Card data={prod} />
          </div >
        ))
      }
    </div>
  )
}

export default Home