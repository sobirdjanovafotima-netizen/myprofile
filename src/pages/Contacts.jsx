import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sobirdjanovafotima@gmail.com', href: 'mailto:yourname@example.com' },
    { icon: Phone, label: 'Phone', value: '+998 50 900 64 99', href: null },
    { icon: Send, label: 'Telegram', value: '@wergoxaez', href: 'https://t.me/wergoxaez' },
]

const Contacts = () => {
    return (
        <div className="flex-1 min-w-0 h-screen overflow-y-auto p-12 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <p className="text-lg text-neutral-content/70">Let's connect</p>
                <h1 className="text-4xl font-semibold text-primary">Contacts</h1>
            </div>

            <div className="bg-base-300 rounded-3xl shadow-xl shadow-primary/30 p-8 flex flex-col gap-6 max-w-md">
                <p className="text-xl font-semibold">Get in touch</p>
                <div className="flex flex-col gap-4">
                    {contactInfo.map((item, index) => {
                        const Icon = item.icon
                        const content = (
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/20 text-primary p-3 rounded-full">
                                    <Icon size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-neutral-content/60">{item.label}</span>
                                    <span className="font-medium">{item.value}</span>
                                </div>
                            </div>
                        )
                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                            >
                                {item.href ? (
                                    <a href={item.href} target="_blank" rel="noreferrer" className="hover:opacity-80 transition">
                                        {content}
                                    </a>
                                ) : content}
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Contacts