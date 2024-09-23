import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CertificatePage = () => {
  const { certificateId } = useParams();
  const navigate = useNavigate();

  console.log(certificateId);
  

  const imageFiles = [
    "/Python-Certificate.png",
    "/notenspiegel_englisch.png",
    "/WebDevelopment-Certificate.png",
    "/Android-Certificate.png",
    "/IT-KursZertifikate.png",
    "/Arbeitszeungis.png",
    "/Empfehlungsschreiben.png",
  ];


  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Certificate {parseInt(certificateId) + 1}
        </h1>
        <div className="border-4 border-purple-700 rounded-lg p-4 shadow-lg mb-8">
          <img 
            src={imageFiles[certificateId]} 
            alt={`Certificate ${parseInt(certificateId) + 1}`}
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-center">
          <button 
            onClick={handleGoBack}
            className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;