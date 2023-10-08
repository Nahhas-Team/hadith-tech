import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

const Episodes = () => {
  return (
    
    <section className='pt-20 pb-12 text-5xl font-bold items-center justify-center flex flex-col gap-5'>Episodes
    <Link className={buttonVariants()} href="/episodes">
      Go to espisodes
    </Link>
    </section>
  )
}

export default Episodes