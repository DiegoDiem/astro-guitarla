import React, { useState } from 'react'

export default function ComponenteReact() {
    const [cliente, setCliente] = useState('DIego')
    console.log('dEsde componente de react')
  return (
    <>
    <div>ComponenteReact</div>
    <p>{cliente}</p>
    </>
  )
}
