import React from 'react'
import { useParams } from 'react-router-dom';

const CertificatePage = () => {
  const params = useParams(); //giving it a datatype is optional, just so intellisense finds it

  return (
    <div>
        <h1>Certificate Page {params.certificateId}</h1>      
    </div>
  )
}

export default CertificatePage;
