import clsx from "clsx";
import Image from "next/image";
import imgPlaceholder from "../assets/imgPlaceholder.png";

interface TeamMember {
  name: string;
  position: string;
  image: any;
  description: string[];
  quote: string;
}

const teamMember: TeamMember[] = [
  {
    name: "Brett Willis",
    position: "Optical Dispenser",
    image: imgPlaceholder,
    description: [
      "Brett started his optical career in the lab 30 years ago and brings his expertise to the dispensary, finding solutions to difficult repairs keeping your favourite frame functioning.",
      "With a love of sailing and cycling he brings his optical solutions to the sports arena and understands the need for specialised sports eyewear. Brett has worked at Friendlies for 20 years and loved it so much he bought the place.",
    ],

    quote:
      "When I am not in the practice I’m enjoying the Sun. Sailing and Cycling is my passion - being an Optical Dispenser I understand the need of precision eyewear.",
  },
  {
    name: "Deepa Shah",
    position: "Optometrist",
    image: imgPlaceholder,
    description: [
      "Deepa graduated with Honours and has since achieved a post graduate certificate in Ocular Therapies.",
      "After graduating and working in the UK for a year, Deepa practiced for 6 years in a Boutique in Kenya, until she found home at Friendlies Eyecare and has been here for 20 years.",
      "When Deepa isn’t seeing to a patient, she is often found expanding her broad interest in all areas of optometry.",
    ],

    quote:
      "I believe in giving back to the Community and have volunteered at eye camps in Kenya, Homeless Connect in Perth, Home Reader Services and teaching English to adult migrants. In my spare time I enjoy yoga, hiking, stand up paddle boarding and reading.",
  },
  {
    name: "Lilly Turner",
    position: "Front Desk",
    image: imgPlaceholder,
    description: [
      "Lilly is our first point of contact at Friendlies Eyecare. Having moved from Margaret River to Perth she is part of our Eyecare family, booking in appointments and helping to keep the practice a friendly, efficient and happy place to be.",
      "Lilly brings the exuberance of youth to the practice, she enjoys sharing a meal with friends, watching the footy, camping trips and exploring the South West.",
    ],

    quote: "Pending Quote",
  },
  {
    name: "Lucinda Roth",
    position: "Frame Selection Specialist",
    image: imgPlaceholder,
    description: [
      "Lucinda came to Friendlies from a background in designer Italian menswear, where she specialised in connecting people with a look that suited their lifestyle. She brings her love of fashion and lifestyle to Friendlies Eyecare, with a unique focus on frame quality and matching frames to your face, lifestyle and aesthetics.",
      "Lucinda loves, the great outdoors, great food and good conversations.",
    ],

    quote:
      "I love helping people to find a frame that is form fitting and as unique as you, it is so fulfilling helping people to find a look that makes them feel confident.",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="my-10 md:my-20">
      <h1 className="mb-10 text-center text-5xl font-medium underline decoration-[#F38425] underline-offset-8 md:mb-20 lg:text-6xl">
        About us
      </h1>

      <div className="lg:mx-32">
        <div className="space-y-20">
          {teamMember.map((member, memberIdx) => (
            <div
              key={member.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-12"
            >
              <div
                className={clsx(
                  memberIdx % 2 === 0 ? "lg:col-start-7" : "lg:col-start-1",
                  "mt-6 px-4 lg:relative lg:col-span-6 lg:row-start-1 lg:px-0"
                )}
              >
                <h3 className="mb-3 text-3xl font-medium lg:text-4xl">
                  {member.name}
                </h3>
                <p className="lg: mt-1 mb-6 text-xl tracking-wide text-gray-800 lg:text-2xl">
                  {member.position}
                </p>
                <div className="text-lg text-gray-900 lg:text-xl lg:leading-8 ">
                  {member.description.map((desc, descIdx) => (
                    <p className="mb-6" key={descIdx}>
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
              <div
                className={clsx(
                  memberIdx % 2 === 0 ? "lg:col-start-1" : "lg:col-start-7",
                  "relative flex-auto lg:col-span-6 lg:row-start-1"
                )}
              >
                <div className="h-72 overflow-hidden lg:h-[450px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={640}
                    height={740}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="inset-x-0 bottom-0 bg-[#FEF9F4] px-6 pt-2 pb-1 md:absolute md:mx-6">
                  <div className="lg:text-md mt-1 text-sm">
                    <p className="text-gray-800 py-4">{member.quote}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
