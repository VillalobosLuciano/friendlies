import {
  EyeTear,
  Refractor,
  Medicine,
  Clipboard,
  ContactLensFitting,
  Glasses,
  Spectacles,
  EyeScope,
} from "./icons";

export default function Services() {
  const services = [
    {
      title: "Comprehensive eye exams",
      icon: <Refractor className="h-14 w-auto fill-current" />,
    },
    {
      title: "Monitoring and detecting eye conditions",
      icon: <EyeTear className="h-14 w-auto fill-current" />,
    },
    {
      title: "Referrals to ophthalmologists",
      icon: <Medicine className="h-14 w-auto fill-current" />,
    },
    {
      title: "Ocular Therapeutics",
      icon: <EyeTear className="h-14 w-auto fill-current" />,
    },
    {
      title: "Bulk Billing",
      icon: <Clipboard className="h-14 w-auto fill-current" />,
    },
    {
      title: "Contact lens fitting",
      icon: <ContactLensFitting className="h-14 w-auto fill-current" />,
    },
    {
      title: "Unique, quality frames",
      icon: <Glasses className="h-14 w-auto fill-current" />,
    },
    {
      title: "Every day and specialist sunglasses",
      icon: <Spectacles className="h-14 w-auto fill-current" />,
    },
    {
      title: "Free frame styling consults",
      icon: <EyeScope className="h-14 w-auto fill-current" />,
    },
  ];

  return (
    <div
      id="services"
      className="overflow-hidden bg-[#FDF2E9] py-2 lg:py-16 lg:px-36"
    >
      <div className="no-scrollbar smgrid-cols-2 my-8 flex snap-x snap-proximity grid-cols-1 gap-8 overflow-x-auto sm:grid md:grid-cols-3 ">
        {services.map(({ title, icon }) => (
          <div
            key={title}
            className="col-span-1 flex w-full snap-center gap-6 rounded-2xl bg-[#FBDBC1] p-8 text-[#151313] first:ml-6 last:mr-6 sm:first:m-0 sm:last:m-0 md:p-10"
          >
            <div className="flex w-full flex-col justify-between">
              <div className="mb-3 flex justify-center">{icon}</div>
              <h3 className="w-56 text-xl text-gray-900 sm:w-full lg:text-2xl">
                {title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
