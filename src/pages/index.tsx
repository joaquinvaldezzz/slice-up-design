import Head from "next/head"

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <section>
        <div className="container py-5">
          <div className="pb-6 pt-0.5">
            <h2 className="text-[2.5rem] font-medium leading-[3rem] tracking-tight text-dark-1">
              Join Facebook Groups
            </h2>
            <p className="mt-6 text-lg text-dark-2">
              Learn key digital marketing disciplines. From PPC to SEO, Content to Video, Social and
              Analytics.
            </p>
          </div>
        </div>

        <div className="container overflow-hidden py-5">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <div className="rounded-xl bg-white px-2.5 pb-10 pt-2.5 shadow-card" key={index}>
                <div className="h-40 rounded-lg bg-brand-1"></div>

                <div className="mt-4 px-[1.375rem]">
                  <div className="flex gap-3 py-0.5">
                    <div className="size-10 rounded-full bg-brand-1"></div>
                    <div>
                      <h3 className="font-medium text-dark-1">NHB Facebook Group</h3>
                      <p className="mt-0.5 text-sm text-dark-2">21,349 members</p>
                    </div>
                  </div>
                  <hr className="my-4 border-t-[#f0f3f8]" />
                  <p className="text-lg font-medium text-dark-1">
                    More than a job board. Hire talent. Built a team. Find a job. Get a gig. Work
                    with the best.
                  </p>
                  <a
                    className="mt-7 flex items-center justify-center gap-2.5 rounded-md bg-brand-1 py-4 text-sm font-semibold text-white"
                    href="#"
                  >
                    Join Facebook Group
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
