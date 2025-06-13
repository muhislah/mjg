import Carousel from '@/components/Carousel/Carousel'
import Master from '@/components/Master'
import Title from '@/components/Title'
import { useLanguage } from '@/providers/LanguageProvider'
import { useSidebar } from '@/providers/SidebarProvider'
import { ALL_IMAGES, LINKS, METAS } from '@/utils/constants'
import { sendWhatsApp } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaHandsHelping, FaWhatsapp } from 'react-icons/fa'
import { FaLeaf } from 'react-icons/fa6'
import { FiAward } from 'react-icons/fi'
import { GiHamburgerMenu, GiTreeBranch } from 'react-icons/gi'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { MdOutlineHistory, MdOutlineStarOutline } from 'react-icons/md'

const Homepage = () => {
	const router = useRouter()
	const { lang, locale } = useLanguage()
	const { toggleOpen } = useSidebar()

	return (
		<Master
			title={METAS[locale as keyof typeof METAS]['index'].title}
			description={METAS[locale as keyof typeof METAS]['index'].description}
			path='/'
			noHeader
		>
			<div className=''>
				<div className='relative'>
					<div className='relative hidden md:block mih-h-[50dvh] md:min-h-screen'>
						<div className='absolute inset-0 z-[5] flex-1'>
							<div className='backdrop-blur-lg'></div>
							<Image
								src={'/static/images/jpg/background.jpg'}
								layout='fill'
								objectFit='cover'
								alt='Background Image'
								loading='lazy'
							/>
						</div>
						<div className='absolute inset-0 z-10 flex items-center justify-center'>
							<div className='md:mx-auto max-w-5xl text-white bg-black/10 backdrop-blur-xs rounded-3xl'>
								<div className='py-10 md:px-12 px-5'>
									<h1 className='text-white text-5xl mb-5 font-semibold'>Pure Oud Pure Excellent</h1>
									<div className='md:text-base text-sm'>
										<figcaption className='my-2 text-justify'>
											{lang('oud_description1')}
										</figcaption>
										<figcaption className='my-2 text-justify'>
											{lang('oud_description2')}
										</figcaption>
										<figcaption className='my-2 text-justify'>
											{lang('oud_description3')}
										</figcaption>
									</div>
									<div className='flex flex-row gap-2 mt-4 items-center'>
										<button
											className='flex items-center justify-center px-3 py-1.5 gap-2 rounded-lg bg-white/10 hover:bg-blend-difference'
											onClick={() => router.push('/contact-us')}
										>
											Contact Us
										</button>
										<button
											className='flex items-center justify-center px-3 py-1.5 gap-2 rounded-lg bg-green-600 text-white'
											onClick={() => sendWhatsApp(`6285213133384`)}
										>
											<FaWhatsapp />
											Whatsapp
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className='absolute z-20 h-auto py-5 bg-gradient-to-b from-black/70 to-transparent top-0 inset-x-0'>
							<div className='md:mx-auto max-w-5xl mx-5  text-white px-10 py-5 flex flex-row items-center'>
								<Link href={"/"}>
									<div className='text-3xl font-charm font-black flex items-center gap-1'>
										<p>Oud</p>
										<FaLeaf />
									</div>
								</Link>
								<div className='flex flex-row items-center gap-5 ml-auto'>
									{
										LINKS.map(link => (
											<Link href={link.url} key={link.url}>
												<div className='font-semibold hover:text-yellow-200'>
													{link.name}
												</div>
											</Link>
										))
									}
								</div>
							</div>
						</div>
					</div>

					<div className='relative block md:hidden h-auto mb-28'>
						<div className='absolute z-[2] h-auto py-5 bg-gradient-to-b from-black/70 to-transparent top-0 inset-x-0'>
							<div className='md:mx-auto max-w-5xl mx-7 text-white 0 py-5 flex flex-row justify-between items-center'>
								<Link href={"/"}>
									<div className='text-3xl font-charm font-black flex items-center gap-1'>
										<p>Oud</p>
										<FaLeaf />
									</div>
								</Link>
								<button onClick={toggleOpen}>
									<GiHamburgerMenu className='ml-auto text-xl' />
								</button>
							</div>
						</div>
						<div className='relative aspect-square flex-1'>
							<div className='backdrop-blur-lg'></div>
							<Image
								src={'/static/images/jpg/background.jpg'}
								layout='fill'
								objectFit='cover'
								alt='Background Image'
								loading='lazy'
							/>
						</div>
						<div className='absolute top-20 flex items-center justify-center'>
							<div className='md:mx-auto max-w-5xl text-white rounded-3xl'>
								<div className='py-10 md:px-12 px-5'>
									<h1 className='text-white text-4xl mb-5 font-semibold'>Pure Oud Pure Excellent</h1>
									<div className='md:text-base text-sm bg-white border border-neutral-300 text-black rounded-lg leading-normal p-5 '>
										<figcaption className='my-2 text-justify'>
											{lang('oud_description1')}
										</figcaption>
										<div className='flex flex-row gap-2 mt-4 items-center'>
											<button
												className='flex items-center justify-center px-3 py-1.5 gap-2 rounded-lg bg-neutral-100'
												onClick={() => router.push('/contact-us')}
											>
												Contact Us
											</button>
											<button
												className='flex items-center justify-center px-3 py-1.5 gap-2 rounded-lg bg-green-600 text-white'
												onClick={() => sendWhatsApp(`6285213133384`)}
											>
												<FaWhatsapp />
												Whatsapp
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='md:mx-auto max-w-5xl mx-5 pt-10'>
						<Title>Our Product</Title>
						<div className='w-full py-5'>
							<Carousel
								show={1}
								sliderClass='flex-row rounded-3xl'
								indicatorContainerClasses='pt-5'
								withIndicator
							>
								{
									ALL_IMAGES.product.map((image, key) => (
										<div key={key} className='flex-shrink-0 relative rounded-3xl overflow-hidden min-h-[300px] w-full'>
											<Image src={image} alt='crousel' fill className='object-cover object-center' />
										</div>
									))
								}
							</Carousel>
						</div>
					</div>
					<div className='md:mx-auto max-w-5xl mx-5 py-10'>
						<Title>Why Choose Us ?</Title>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-5'>
							<div className='flex flex-col md:flex-row items-start border border-neutral-300 rounded-xl p-5'>
								<div className='text-yellow-900 w-full md:w-[100px] mb-2 md:mb-0 flex-shrink-0 flex flex-col justify-center md:h-full'>
									<FiAward className='text-yellow-600 text-center text-[50px] md:text-[70px]' />
								</div>
								<div className=''>
									<p className='font-bold text-lg'>Kualitas Premium Terjamin</p>
									<span className='text-sm text-neutral-800'>Kami menggunakan pohon gaharu pilihan dengan usia minimal 15 tahun. Setiap batang dipilih langsung oleh ahli gaharu berpengalaman untuk memastikan kualitas resin terbaik yang menghasilkan aroma oud autentik dan mendalam.</span>
								</div>
							</div>
							<div className='flex flex-col md:flex-row items-start border border-neutral-300 rounded-xl p-5'>
								<div className='text-yellow-900 w-full md:w-[100px] mb-2 md:mb-0 flex-shrink-0 flex flex-col justify-center md:h-full'>
									<MdOutlineHistory className='text-yellow-600 text-center text-[50px] md:text-[70px]' />
								</div>
								<div className=''>
									<p className='font-bold text-lg'>Proses Tradisional Modern</p>
									<span className='text-sm text-neutral-800'>Menggabungkan teknik destilasi tradisional turun-temurun dengan teknologi modern untuk menghasilkan produk berkualitas konsisten. Proses ekstraksi dilakukan dengan sabar tanpa bahan kimia berbahaya.</span>
								</div>
							</div>
							<div className='flex flex-col md:flex-row items-start border border-neutral-300 rounded-xl p-5'>
								<div className='text-yellow-900 w-full md:w-[100px] mb-2 md:mb-0 flex-shrink-0 flex flex-col justify-center md:h-full'>
									<IoShieldCheckmarkOutline className='text-yellow-600 text-center text-[50px] md:text-[70px]' />
								</div>
								<div className=''>
									<p className='font-bold text-lg'>Sertifikasi & Standar Internasional</p>
									<span className='text-sm text-neutral-800'>
										<ol>
											<li>Tersertifikasi CITES untuk perdagangan gaharu legal</li>
											<li>Memenuhi standar kualitas internasional</li>
											<li>Telah lolos uji laboratorium independen</li>
											<li>Produk halal dan natural 100%</li>
										</ol>
									</span>
								</div>
							</div>
							<div className='flex flex-col md:flex-row items-start border border-neutral-300 rounded-xl p-5'>
								<div className='text-yellow-900 w-full md:w-[100px] mb-2 md:mb-0 flex-shrink-0 flex flex-col justify-center md:h-full'>
									<GiTreeBranch className='text-yellow-600 text-center text-[50px] md:text-[70px]' />
								</div>
								<div className=''>
									<p className='font-bold text-lg'>Sumber Berkelanjutan</p>
									<span className='text-sm text-neutral-800'>Kami berkomitmen pada praktik harvesting yang bertanggung jawab. Bekerjasama dengan petani lokal untuk budidaya gaharu berkelanjutan, mendukung ekonomi masyarakat sambil melestarikan alam.</span>
								</div>
							</div>
							<div className='flex flex-col md:flex-row items-start border border-neutral-300 rounded-xl p-5'>
								<div className='text-yellow-900 w-full md:w-[100px] mb-2 md:mb-0 flex-shrink-0 flex flex-col justify-center md:h-full'>
									<MdOutlineStarOutline className='text-yellow-600 text-center text-[50px] md:text-[70px]' />
								</div>
								<div className=''>
									<p className='font-bold text-lg'>Koleksi Eksklusif</p>
									<span className='text-sm text-neutral-800'>Dari grade premium hingga super premium, setiap produk kami memiliki karakter aroma unik. Cocok untuk:
										<ol>
											<li>Koleksi pribadi</li>
											<li>Terapi aromaterapi</li>
											<li>Keperluan spiritual</li>
											<li>Hadiah eksklusif</li>
										</ol>
									</span>
								</div>

							</div>
							<div className='flex flex-col md:flex-row items-start border border-neutral-300 rounded-xl p-5'>
								<div className='text-yellow-900 w-full md:w-[100px] mb-2 md:mb-0 flex-shrink-0 flex flex-col justify-center md:h-full'>
									<FaHandsHelping className='text-yellow-600 text-center text-[50px] md:text-[70px]' />
								</div>
								<div className=''>
									<p className='font-bold text-lg'>Pengalaman Pelanggan Terbaik</p>
									<span className='text-sm text-neutral-800'>
										<ol>
											<li>Konsultasi gratis dengan expert oud</li>
											<li>Garansi keaslian 100%</li>
											<li>Kemasan premium dan aman</li>
											<li>Layanan after-sales terpercaya</li>
											<li>Pengiriman cepat ke seluruh Indonesia</li>
										</ol>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Master >
	)
}

export default Homepage