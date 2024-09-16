import { CERTIFICATES } from "../constants";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Certificates = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">Certificates</motion.h2>
        <div> 
            {CERTIFICATES.map((cert, index)=>(
                <motion.div 
                key={index}
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y:50}}
                transition={{duration:0.5}}
                className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">

                    <Link to={`/${index}`}>
                        <img 
                            src={cert.image} 
                            width={150} 
                            height={150} 
                            alt={cert.title} 
                            className="mb-6 rounded"
                        />
                    </Link>
                        
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{cert.title}</h6>
                        <p className="mb-4 text-neutral-400">{cert.description}</p>
                        {cert.technologies.map((tech, techIndex)=>(
                            <span key={techIndex} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Certificates