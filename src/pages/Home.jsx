import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="flex-1 flex relative">
            <div className="flex-1 flex">
                <img src="./src/assets/bio.png" className="h-screen flex-1 object-contain object-top" alt="" />
            </div>

            <div className="absolute flex flex-col gap-10 top-0 py-20 right-20 z-50 h-screen w-80">
                <motion.div
                    onClick={() => navigate('/aboutMe')}
                    className="w-full glass text-white shadow-lg border-primary border rounded-3xl p-9 flex-1 flex flex-col gap-3 cursor-pointer"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: [0, -12, 0] }}
                    transition={{
                        opacity: { duration: 0.6 },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                >
                    <p className="text-xl font-semibold">About me</p>
                    <p className="text-sm text-white/70">
                       I'm Sobirjonova Fotima and im 14 years old.
                    </p>
                </motion.div>

                <motion.div
                    onClick={() => navigate('/aboutMe')}
                    className="w-full glass text-white shadow-lg border-primary border rounded-3xl p-9 flex-1 flex flex-col gap-3 cursor-pointer"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: [0, -12, 0] }}
                    transition={{
                        opacity: { duration: 0.6, delay: 0.2 },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                >
                    <p className="text-xl font-semibold">Study Experience</p>
                    <p className="text-sm text-white/70">
                        i study at MARS IT school for 8 months. And currently studying REACT.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Home