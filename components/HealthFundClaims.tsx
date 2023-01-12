import Image from 'next/image'
import Medibank from '../assets/Medibank.png'

const fundImages = [
  {
    name: 'Medibank',
    src: Medibank,
    alt: 'Medibank',
  },
  {
    name: 'Medibank2',
    src: Medibank,
    alt: 'Medibank',
  },
  {
    name: 'Medibank3',
    src: Medibank,
    alt: 'Medibank',
  },
  {
    name: 'Medibank4',
    src: Medibank,
    alt: 'Medibank',
  },
  {
    name: 'Medibank5',
    src: Medibank,
    alt: 'Medibank',
  },
  {
    name: 'Medibank6',
    src: Medibank,
    alt: 'Medibank',
  },
  {
    name: 'Medibank7',
    src: Medibank,
    alt: 'Medibank',
  },
  {
    name: 'Medibank8',
    src: Medibank,
    alt: 'Medibank',
  },
  {
    name: 'Medibank9',
    src: Medibank,
    alt: 'Medibank',
  },
]

export default function HealthFundClaims() {
  return (
    <div className="mt-4 lg:mt-16">
      <div className="py-12 px-4 lg:py-16 lg:px-8 xl:px-36">
        <div className="flex flex-col justify-between lg:flex-row lg:gap-20">
          <div className="flex flex-col justify-center lg:max-w-lg lg:pr-6">
            <h2 className="text-2xl font-medium lg:mb-2 xl:text-4xl">
              Direct Health Fund claims
            </h2>
            <p className="mb-6 mt-1 xl:mt-4 xl:mb-7 xl:text-xl xl:leading-relaxed">
              We process claims from your health fund when you pay for your
              glasses so you can make full use of your optical benefits. All
              major private health funds are accepted.
            </p>
            <p className="mt-1 xl:mb-7 xl:text-xl xl:leading-relaxed">
              “No Gap” health fund spectacles are available. We can help you to
              discover the benefits of premium lenses options or connect you
              with affordable eyewear.
            </p>
          </div>
          <div className="mt-8 grid w-full grid-cols-3 gap-1 lg:mt-0">
            {fundImages.map((fund) => (
              <div key={fund.name} className="col-span-1 flex justify-center">
                <Image
                  className="object-cover"
                  src={fund.src}
                  alt={fund.alt}
                  width={150}
                  height={150}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
