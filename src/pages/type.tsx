import React from 'react'

const type = () => {
  return (
    <div>type</div>
  )
}

export default type

export default interface Product {
    id: number,
    name:string,
    price:number,
    image:string
}