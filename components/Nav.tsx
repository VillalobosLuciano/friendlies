import { Device, Facebook, Instagram, PinMap, Telephone } from "./icons";
import Image from "next/image";
import Link from "next/link";
import logo from "public/Logo.svg";

export default function Nav() {
  return (
    <div className="fixed z-20 w-full shadow-lg">
      <div className="flex items-center justify-between bg-[#E2DFDB] px-4 py-2 md:hidden">
        <div className="flex items-center">
          <PinMap className="mr-3" />
          <span>Get directions</span>
        </div>
        <div className="flex items-center">
          <Telephone className="mr-3" />
          <span>9286 1469</span>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex min-w-[192px]">
          <Link href="/" className="flex items-center">
            <Image
              className="object-cover"
              src={logo}
              alt="Friendlies Eyecare"
              width={192}
              height={96}
            />
          </Link>
        </div>
        <div className="mx-auto hidden grow flex-col bg-[#E2DFDB] px-6 md:flex">
          <div className="mt-4 flex flex-row border-b border-[#9D9991] pb-1 text-sm md:mt-2 lg:justify-between xl:space-x-3 xl:text-base">
            <span className="hidden lg:block">
              Hours: Mon - Fri 9am - 5:30pm | Saturday 9am - 3pm | Closed
              Sundays
            </span>

            <span>2/50 Bayview Tce, Claremont WA 6010</span>
          </div>
          <div className="mt-4 flex flex-row items-center justify-between lg:mt-1 xl:mt-4">
            <div className="text-md hidden space-x-6 font-semibold uppercase lg:flex xl:text-xl">
              <Link href="/about">About us</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="flex items-center">
              <Facebook className="mr-4" />
              <Instagram className="mr-8" />
              <Telephone className="mr-4" />
              <span>9286 1469</span>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center bg-[#f38425] md:w-fit md:px-6">
          <Link href="/book">
            <button className="flex flex-col items-center justify-center md:flex-row">
              <span className="mr-4 text-xl font-semibold uppercase">
                Book Now
              </span>
              <Device />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
