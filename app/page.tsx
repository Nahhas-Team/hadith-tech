import About from '@/components/About'
import EmailSubscrition from '@/components/EmailSubscrition'
import Episodes from '@/components/Episodes'
import HomeHero from '@/components/HomeHero'

export default function Home() {
  return (
    <>
      <HomeHero />
      <Episodes />
      <About />
      <EmailSubscrition />
    </>
  )
}
