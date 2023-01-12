import Image from 'next/image'

import CTAImage from '../assets/ImageCTA2.png'
import { ButtonLink } from './Button'

const CTA = [
  {
    title: 'Eyeware',
    description:
      'We keep our eyes on the pulse of quality boutique frame designs, helping to select the frame that accentuates your unique features and lifestyle without compromising on feel and function.',
    imageAlt: 'Eyecare',
  },
]

export default function CTASection() {
  return (
    <div className="bg-black lg:pr-8">
      {CTA.map((item, i) => (
        <div key={i} className="relative">
          <div className="mx-auto px-4 py-8 sm:px-6 lg:py-16">
            <div className="md:w-2/3 lg:md:ml-80">
              <h2 className="text-5xl font-bold uppercase leading-tight text-white xl:text-7xl">
                {item.title}
              </h2>

              <p className="my-4 text-lg font-thin text-white md:text-xl md:font-extralight xl:text-2xl xl:leading-relaxed">
                {item.description}
              </p>
              <div className="mt-8 flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-8 lg:mt-9 lg:justify-start">
                <ButtonLink
                  variant="primary"
                  href="/book"
                  className="w-fit text-xl"
                  type="button"
                >
                  Book online
                </ButtonLink>
                <ButtonLink
                  variant="secondary"
                  href="/eyecare"
                  className="w-fit text-xl"
                  type="button"
                >
                  Phone 9286 1469
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="h-full md:absolute md:bottom-0 md:left-0 md:w-72">
            <Image
              className="h-full w-full object-cover"
              width={1920}
              height={1080}
              src={CTAImage}
              alt="Frienlies Eyecare"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
