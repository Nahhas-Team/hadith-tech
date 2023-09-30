import About from '@/components/About'
import ContactWidget from '@/components/ContactWidget'
import Episodes from '@/components/Episodes'
import HomeHero from '@/components/HomeHero'

export default function Home() {
  return (
    <>
      <HomeHero />
      <Episodes />
      <About />
      <ContactWidget />
    </>
  )
}
