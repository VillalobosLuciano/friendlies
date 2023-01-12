import { Button } from "./Button";
import { Device, Telephone } from "./icons";
import Laptop from "./icons/Laptop";
import PinMap from "./icons/PinMap";

export default function Footer() {
  return (
    <div className="relative bg-black">
      <div className="relative mx-4 pt-8 pb-12 lg:mx-32 lg:grid lg:grid-cols-6 lg:py-16">
        <div className="mb-12 lg:col-span-3 lg:mb-0 lg:max-w-2xl lg:pr-12">
          <h2 className="text-decoration-underline mb-8 text-3xl font-medium tracking-wide text-white underline decoration-[#F38425] underline-offset-8 xl:text-4xl">
            Enquiries
          </h2>
          <div className="mx-auto">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label
                  htmlFor="full-name"
                  className="block font-light text-white"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="full-name"
                    className="block w-full py-1 lg:text-lg rounded-md border-gray-300 shadow-sm focus:border-[#F38425] focus:ring-[#F38425] sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block font-light text-white">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full lg:text-lg py-1 rounded-md border-gray-300 shadow-sm focus:border-[#F38425] focus:ring-[#F38425] sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-light text-white"
                >
                  Your message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full lg:text-lg rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-[#F38425] focus:ring-[#F38425]"
                    aria-describedby="message-max"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-fit text-lg"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:col-span-3 lg:pl-12">
          <div className="mx-auto lg:max-w-xl">
            <div className="mb-6 flex items-center gap-3">
              <h1 className="text-2xl uppercase tracking-widest text-[#F38425] sm:text-4xl">
                Friendlies
              </h1>
              <h1 className="text-2xl uppercase tracking-widest text-white sm:text-4xl">
                Eyecare
              </h1>
              <div className="h-full w-fit stroke-white text-white">
                <Device className="fill-current" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-4 flex gap-8 align-bottom text-white">
                <PinMap className="h-6 w-6 fill-current" />
                <p className="text-lg tracking-wider lg:text-xl">
                  2/50 Bay View Terrace, Claremont WA 6010
                </p>
              </div>
              <div className="mb-4 flex gap-8 align-bottom text-white">
                <Telephone className="h-6 w-6 fill-current" />
                <p className="text-lg tracking-wider lg:text-xl">9286 1469</p>
              </div>
              <div className="mb-4 flex gap-8 align-bottom text-white">
                <Laptop className="h-6 w-6 fill-current" />
                <p className="text-lg tracking-wider lg:text-xl">
                  Book an appointment online
                </p>
              </div>
            </div>
            <div className="my-8 h-px w-full bg-gray-300" />
            <div className="flex flex-col">
              <h2 className="mb-4 text-lg tracking-wider text-white lg:mb-6 lg:text-xl">
                Opening Hours
              </h2>

              <span className="mb-1 text-white">
                Monday - Friday: 9 - 5:30pm
              </span>
              <span className="text-white">Saturday: 9 - 3pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
