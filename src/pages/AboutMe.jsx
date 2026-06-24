import React from 'react'

const AboutMe = () => {
    return (
        <div className="flex-1 min-w-0 h-screen overflow-y-auto p-12 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <p className="text-lg text-neutral-content/70">Get to know me</p>
                <h1 className="text-4xl font-semibold text-primary">About Me</h1>
            </div>

            <div className="bg-base-300 rounded-3xl shadow-xl shadow-primary p-9 flex flex-col gap-4 max-w-3xl">
                <p className="text-base leading-relaxed">
                    Men 8-sinfda, 239-maktabda tahsil oladigan o‘quvchiman. Axborot texnologiyalari, veb-dasturlash va raqamli dizaynga katta qiziqish bildiraman. Shaxsiy loyihalarim va maktab topshiriqlarim uchun HTML, CSS, JavaScript va React texnologiyalaridan foydalanib veb-saytlar yaratishni o‘rganmoqdaman.
                </p>
                <p className="text-base leading-relaxed">
                    Bo‘sh vaqtimda yangi texnologiyalarni o‘rganish va o‘z ustimda ishlashni yoqtiraman. Ayniqsa, veb-dasturlash va dizayn sohalari menga qiziq. Turli xil shaxsiy loyihalar ustida ishlash orqali HTML, CSS, JavaScript va React bo‘yicha bilimlarimni mustahkamlab bormoqdaman.Kelajakda IT sohasida malakali mutaxassis bo‘lish uchun doim yangi bilim va tajribalarni egallashga harakat qilyapman
                </p>
                <p className="text-base leading-relaxed">
                    Maqsadim dasturlash va veb-dasturlash sohasidagi bilimlarimni yanada rivojlantirish, yangi texnologiyalarni o‘rganish hamda turli loyihalar orqali amaliy tajriba orttirishdir
                </p>
            </div>

            <div className="flex flex-wrap gap-4 max-w-3xl">
                <div className="bg-base-300 rounded-2xl p-6 flex-1 min-w-[200px]">
                    <p className="text-sm text-neutral-content/60 mb-2">Languages</p>
                    <div className="flex flex-wrap gap-2">
                        {["Uzbek", "Russian", "English"].map((lang) => (
                            <span key={lang} className="badge badge-primary badge-outline">{lang}</span>
                        ))}
                    </div>
                </div>

                
                </div>
            </div>
       
    )
}

export default AboutMe