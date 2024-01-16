import Head from 'next/head'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

export default function Home(): JSX.Element {
  const [emblaRef] = useEmblaCarousel()

  const cards = [
    {
      id: 1,
      image: '/images/image-1.png',
      imageAlt: '',
      name: 'Dead Nigga Association',
      members: 35,
      description:
        'More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.',
      link: '#',
      linkText: 'Join Facebook Group',
    },
    {
      id: 2,
      image: '/images/image-2.png',
      imageAlt: '',
      name: 'NHB Facebook Group',
      members: 1000,
      description:
        'More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.',
      link: '#',
      linkText: 'Join Facebook Group',
    },
    {
      id: 3,
      image: '/images/image-3.png',
      imageAlt: '',
      name: 'NHB Facebook Group',
      members: 1000,
      description:
        'More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.',
      link: '#',
      linkText: 'Join Facebook Group',
    },
    {
      id: 4,
      image: '/images/image-1.png',
      imageAlt: '',
      name: 'NHB Facebook Group',
      members: 1000,
      description:
        'More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.',
      link: '#',
      linkText: 'Join Facebook Group',
    },
    {
      id: 5,
      image: '/images/image-1.png',
      imageAlt: '',
      name: 'NHB Facebook Group',
      members: 1000,
      description:
        'More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.',
      link: '#',
      linkText: 'Join Facebook Group',
    },
    {
      id: 6,
      image: '/images/image-1.png',
      imageAlt: '',
      name: 'NHB Facebook Group',
      members: 1000,
      description:
        'More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work with the best.',
      link: '#',
      linkText: 'Join Facebook Group',
    },
  ]

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

        <div className="container relative overflow-hidden" ref={emblaRef}>
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
                    <p className="text-lg font-medium text-dark-1">{card.description}</p>
                    <a
                      className="mt-7 flex items-center justify-center gap-2.5 rounded-md bg-brand-1 py-4 text-sm font-semibold text-white"
                      href={card.link}
                    >
                      {card.linkText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <button
            className="absolute left-4 top-1/2 size-16 -translate-y-1/2 rounded-full bg-white text-dark-5 shadow-button"
            type="button"
          >
            Prev
          </button>

          <button
            className="absolute right-4 top-1/2 size-16 -translate-y-1/2 rounded-full bg-white text-dark-5 shadow-button"
            type="button"
          >
            Next
          </button> */}
        </div>
      </section>
    </div>
  )
}
