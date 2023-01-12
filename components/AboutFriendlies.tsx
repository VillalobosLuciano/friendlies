import Image from "next/image";
import Friendlies from "../assets/Rectangle.png";

export default function AboutFriendlies() {
  return (
    <div className="xl:px-36 xl:py-16">
      <div className="relative">
        <div className="h-full w-full xl:w-[93%]">
          <Image
            src={Friendlies}
            alt="About Friendlies"
            className="object-cover"
            width={1920}
            height={1080}
          />
        </div>
        <div className="bottom-0 right-0 flex h-auto flex-col bg-white px-4 py-8 shadow-xl xl:absolute xl:-mb-28 xl:w-[720px] xl:pl-16 xl:pr-20 xl:pt-14 xl:pb-10">
          <h2 className="text-2xl font-medium xl:text-3xl">
            Free consultations
          </h2>
          <p className="mt-1 mb-6 xl:mt-4 xl:mb-7 xl:text-lg xl:leading-8 xl:tracking-wide">
            If you’ve already had your eyes checked elsewhere and choosing
            frames has been a challenge or if your lenses aren’t giving you the
            vision you want, then please book an appointment with our Optical
            Dispenser Brett Willis or Frame Selection Specialist Lucinda Roth.
          </p>
          <h3 className="text-lg font-medium xl:text-xl">
            Brett Willis Lens Dispensing Consult
          </h3>
          <p className="mt-1 mb-6 xl:mt-4 xl:mb-7 xl:text-lg xl:leading-8 xl:tracking-wide">
            If you are having trouble with your Spectacles or lens mechanics
            call to book in with our Lens and Frame Expert.
          </p>
          <h3 className="text-lg font-medium xl:text-xl">
            Lucinda Roth Frame Selection Specialist
          </h3>
          <p className="mt-1 mb-6 xl:mt-4 xl:mb-4 xl:text-lg xl:leading-8 xl:tracking-wide">
            A personal consultation devoted to understanding your needs,
            concerns, personal style and aesthetic, with no obligation to
            purchase.
          </p>
          <p className="mt-1 mb-6 xl:mb-2 xl:pr-1 xl:text-lg xl:leading-8 xl:tracking-wide">
            Taking into consideration your face shape, tones, facial features
            and lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
}
