import clsx from "clsx";

import {
  ContactLensCase,
  EyeScope,
  EyeTear,
  Glasses,
  Refractor,
  Spectacles,
  VisionChart,
} from "./icons";

interface Action {
  title: string;
  description: string[];
  icon: any;
  bgCard: string;
}

const actions: Action[] = [
  {
    title: "Lens technology",
    description: [
      "Utilising state of the art lens manufacturing technology from Essilor we provide customised multifocal Lenses. ",
      "Starting with a comprehensive lens selection and measured using the Visioffice to track the natural movements of the eyes, to create a wider range of vision and personalised satisfaction. ",
      "Or we can supply you with your favourite lenses from Nikon Ziess, Rodenstock and Hoya. ",
    ],
    icon: <Refractor className="h-12 w-auto fill-current" />,
    bgCard: "bg-white",
  },
  {
    title: "Protective",
    description: [
      "Protect your eyes from workplace hazards, we can work with your employer to supply safety glasses for your industry needs. ",
      "ASSA rated eyewear; Bolle, PSG etc. ",
    ],
    icon: <Spectacles className="h-12 w-auto fill-current" />,
    bgCard: "bg-[#FBDBC1]",
  },
  {
    title: "Sun",
    description: [
      "Whether you are looking for prescription, polarised or even plano we can help you find a frame to protect your eyes and enhance your look. Maui Jim, Oakley, Prada, Persol, Ray Ban, Mako, etc. ",
    ],
    icon: <EyeScope className="h-12 w-auto fill-current" />,
    bgCard: "bg-[#FEF9F4]",
  },
  {
    title: "Sports",
    description: [
      "Prescription eyewear suited to your favourite outdoor activity from sailing to swimming & cycling to tennis we have your sports vision in sight. Oakley, Maui Jim, Mako, Pro Gear etc. ",
    ],
    icon: <VisionChart className="h-12 w-auto fill-current" />,
    bgCard: "bg-white",
  },
  {
    title: "Contact lenses",
    description: [
      "A wide range of contact lenses to suit your lifestyle; whether it’s for sports, special occasions or full time wear.",
      "If you haven’t tried contact lenses in a while, new technology may make them accessible to you. ",
    ],
    icon: <ContactLensCase className="h-12 w-auto fill-current" />,
    bgCard: "bg-[#FBDBC1]",
  },
  {
    title: "Optical",
    description: [
      "We pair our lens capabilities with quality designer spectacle choices from a range of well-known brands such as FaceaFace, L.A. Eyeworks, Ovvo, Maui Jim, Ray Ban, Oakley, Prodesign, Jac + Jack, Seraphin, Clic Eyewear, Persol and many more.",
      "We choose our frame selection based on durable, quality designs that feel as good as they look. ",
    ],
    icon: <Glasses className="h-12 w-auto fill-current" />,
    bgCard: "bg-[#FEF9F4]",
  },
];

export default function Lenses() {
  return (
    <div className="overflow-hidden sm:grid sm:grid-cols-2 lg:mx-32 lg:my-16">
      {actions.map((action) => (
        <div key={action.title} className={`${action.bgCard} p-6`}>
          <div className="h-6 w-6" aria-hidden="true">
            {action.icon}
          </div>

          <div className="mt-8">
            <h3 className="text-lg lg:text-2xl">{action.title}</h3>
            <p className="mt-4">
              {action.description.map((p, i) => (
                <p key={i} className="pb-5 leading-relaxed">
                  {p}
                </p>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
