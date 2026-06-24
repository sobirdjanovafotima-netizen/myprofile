import React from 'react'
import { motion } from 'framer-motion'

const skills = [
    { name: 'HTML5', level: 100 },
    { name: 'CSS', level: 100 },
    { name: 'Tailwind', level: 90 },
    { name: 'Daisy UI', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 60 },
    { name: 'AOS', level: 30 },
]

const MySkills = () => {
    return (
        <div className="flex-1 min-w-0 h-screen overflow-y-auto p-12 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <p className="text-lg text-neutral-content/70">What I work with</p>
                <h1 className="text-4xl font-semibold text-primary">My Skills</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
                {skills.map((item, index) => (
                    <motion.div
                        key={item.name}
                        className="bg-base-300 rounded-2xl shadow-lg shadow-primary/30 p-6 flex flex-col gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="flex items-center justify-between">
                            <p className="font-semibold">{item.name}</p>
                            <span className="text-sm text-primary font-semibold">{item.level}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-base-100 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                                initial={{ width: 0 }}
                                animate={{ width: `${item.level}%` }}
                                transition={{ delay: index * 0.1 + 0.2, duration: 0.8, ease: "easeOut" }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default MySkills