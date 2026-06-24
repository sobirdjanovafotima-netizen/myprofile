import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home as HomeIcon, FolderGit2, Wrench, User, Mail } from 'lucide-react'

const fullName = "Sobirjonova Fotima"

const Sidebar = () => {
    const [displayed, setDisplayed] = useState("")

    useEffect(() => {
        let i = 0
        let timeout

        const type = () => {
            if (i <= fullName.length) {
                setDisplayed(fullName.slice(0, i))
                i++
                timeout = setTimeout(type, 120)
            } else {
                // pauza, keyin o'chirib qaytadan yozadi
                timeout = setTimeout(() => {
                    i = 0
                    setDisplayed("")
                    timeout = setTimeout(type, 400)
                }, 2000)
            }
        }

        type()
        return () => clearTimeout(timeout)
    }, [])

    const menuItems = [
        { label: "Home", to: "/home", icon: HomeIcon },
        { label: "My projects", to: "/myProjects", icon: FolderGit2 },
        { label: "My skills", to: "/mySkills", icon: Wrench },
        { label: "About me", to: "/aboutMe", icon: User },
        { label: "Contacts", to: "/contacts", icon: Mail },
    ]

    return (
        <motion.div
            className="flex flex-col gap-14 w-1/4  p-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className='flex flex-col gap-3 pt-8'>
                <p className="text-3xl font-semibold">Hi I'm</p>
                <h1 className="text-4xl text-nowrap font-semibold text-primary">
                    {displayed}
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                    >
                        |
                    </motion.span>
                </h1>
                <p className="text-lg text-neutral-content/70">Software engineering student</p>
            </div>
            <div className="bg-base-300 flex-col flex gap-5 p-7 shadow-xl shadow-primary rounded-3xl flex-1">
                <p className="text-2xl font-semibold">Menu</p>
                <div className="flex flex-col gap-3">
                    {menuItems.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                                whileHover={{ scale: 1.05, x: 6 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Link className="btn bg-gradient-to-r from-primary to-secondary w-full" to={item.to}>
                                    <Icon size={18} />
                                    {item.label}
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )
}

export default Sidebar