import Image from 'next/image'

export default function Home() {
    return (
        <main className='py-4'>
            <div className='mx-auto max-w-screen-xl'>
                <div className='flex flex-col'>
                    <Image
                        alt='hero-image'
                        loading='lazy'
                        layout='fill'
                        style={{ objectFit: 'cover', objectPosition: 'center', zIndex: -1, opacity: 0.3 }}
                        src={`https://cdn.pixabay.com/photo/2015/03/03/05/56/avenue-656969_1280.jpg`}
                    />
                </div>
                <div>
                    <div className='flex flex-col'>
                        <div>
                            <p className='text-5xl font-bold italic font-serif mb-2'>Oud</p>
                            <p>
                                Oud, also known as agarwood, is a captivating and aromatic resin derived from the heartwood of Aquilaria trees. This precious substance has been highly prized for centuries, particularly in the world of perfumery. As a developer who appreciates the finer details, you might find parallels between coding and the intricate process of cultivating and extracting oud.

                                Much like crafting a well-optimized codebase, the formation of oud is a complex and meticulous journey. The resin develops in response to certain environmental factors, such as infection or injury to the tree. Similarly, your expertise in Typescript involves understanding and navigating the intricacies of the language to create efficient and robust applications.

                                Oud carries a rich and distinct fragrance, often described as woody, sweet, and balsamic. Similarly, your work with Typescript may bring a unique touch to your projects, infusing them with the essence of structured and statically-typed code. Just as oud leaves a lasting impression, your contributions in the development world contribute to the creation of software that stands the test of time.

                                In the realm of casual appreciation, exploring the world of oud can be a delightful sensory experience. Likewise, your coding endeavors in Typescript may bring a sense of satisfaction and enjoyment as you navigate the digital landscape with ease and creativity. Whether it's the allure of oud or the elegance of your code, both are expressions of a thoughtful and nuanced craft.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
