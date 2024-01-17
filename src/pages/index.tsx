import Head from 'next/head'
import Image from 'next/image'
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import useEmblaCarousel from 'embla-carousel-react'
import cards from '~/data/groups'

export default function Home(): JSX.Element {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <section>
        <div className="container py-5">
          <div className="pb-6 pt-0.5">
            <h2 className="text-3xl font-medium tracking-tight text-dark-1">
              Join Facebook Groups
            </h2>
            <p className="mt-6 text-lg text-dark-2">
              Learn key digital marketing disciplines. From PPC to SEO, Content to Video, Social and
              Analytics.
            </p>
          </div>
        </div>

        <div className="container relative overflow-x-hidden" ref={emblaRef}>
          <div className="-ml-4 flex py-5">
            {cards.map((card) => (
              <div
                className="shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"
                key={card.id}
              >
                <div className="rounded-xl bg-white px-2.5 pb-10 pt-2.5 shadow-card">
                  <div className="relative h-40 overflow-hidden rounded-md bg-brand-1">
                    <Image
                      className="object-cover"
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="100vw"
                      priority
                    />
                  </div>

                  <div className="mt-4 px-5.5">
                    <div className="flex gap-3 py-0.5">
                      <div className="size-10 rounded-full bg-brand-1"></div>
                      <div>
                        <h3 className="font-medium text-dark-1">{card.name}</h3>
                        <p className="mt-0.5 text-sm text-dark-2">
                          {card.members.toLocaleString()} members
                        </p>
                      </div>
                    </div>
                    <hr className="my-4 border-t-divider" />
                    <p className="text-lg font-medium tracking-tight text-dark-1">
                      {card.description}
                    </p>
                    <a
                      className="mt-7 flex items-center justify-center gap-2.5 rounded-md bg-brand-1 py-4 text-sm font-semibold tracking-tight text-white"
                      href={card.link}
                    >
                      <svg className="size-4.5" fill="currentColor" viewBox="0 0 512 512">
                        <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287v175.9C413.8 494.8 512 386.9 512 256z" />
                      </svg>
                      {card.linkText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <button
            className="flex size-16 items-center justify-center rounded-full bg-white text-dark-5 shadow-button xl:absolute xl:left-4 xl:top-1/2 xl:-translate-y-1/2"
            type="button"
          >
            <ChevronLeftIcon className="size-6" />
          </button>

          <button
            className="flex size-16 items-center justify-center rounded-full bg-white text-dark-5 shadow-button xl:absolute xl:right-4 xl:top-1/2 xl:-translate-y-1/2"
            type="button"
          >
            <ChevronRightIcon className="size-6" />
          </button> */}
        </div>
      </section>
    </div>
  )
}
