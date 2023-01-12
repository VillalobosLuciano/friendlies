import Image from 'next/image'

import Australia from './icons/Australia'
import BytesizeEye from './icons/BytesizeEye'
import Device from './icons/Device'

const perks = [
  {
    name: 'About us',
    imageSrc: <Australia />,
    description: 'We’re 100% Australian owned and operated.',
    CTA: 'Meet our friendly team',
  },
  {
    name: 'Eyecare',
    imageSrc: <BytesizeEye className="h-6 w-auto" />,
    description: 'We place your eyes at the centre of everything we do.',
    CTA: 'Our optometry services',
  },
  {
    name: 'Eyeware',
    imageSrc: <Device className="mt-1 h-[18px] w-auto" />,
    description: 'We’ll help you select quality boutique eyeware.',
    CTA: 'Our eyeware range',
  },
]

export default function Incentives() {
  return (
    <div className="relative bg-[#F38425] lg:mx-16 lg:-mt-28 xl:mx-32">
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-7xl py-6 sm:px-2 sm:py-9 lg:px-16 xl:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-12 gap-x-16 px-4 pb-4 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
          {perks.map((perk) => (
            <div key={perk.name} className="flex">
              <div className="mt-3 min-w-[60px] md:min-w-fit">
                <div className="mr-3 flow-root items-center">
                  {perk.imageSrc}
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <h3 className="text-xl font-medium uppercase tracking-widest">
                  {perk.name}
                </h3>
                <p className="my-4 text-lg">{perk.description}</p>

                <a href="#" className="text-lg underline underline-offset-2">
                  {perk.CTA}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
