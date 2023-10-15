import Testimonials from '@/components/Testimonials'
import About_HeroSection from '@/components/sections/About/HeroSection'

export default function Home() {
  return (
    <div className='min-h-[calc(100vh-88px-88px-16px)] flex items-center justify-center flex-col gap-20'>
      <About_HeroSection />
      <Testimonials />

      {/* <Episodes /> */}
      {/* <ContactWidget /> */}
    </div>
  )
}
