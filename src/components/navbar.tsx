import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png"

export function Navbar() {
  return (
    <nav className="flex fixed top-0 left-0 backdrop-blur-sm z-50 bg-slate-200">
      <div className="flex w-screen items-center justify-evenly p-4">
        <div>
          <p className="scroll-m-20 text-xl font-semibold">
            <Image
              src={Logo}
              alt={`${siteConfig.name} Logo`}
              width={80}
              className="logo"
            />
          </p>
        </div>
        <ul className="flex gap-20 ">
          {/* TODO: Add Effects */}
          <li className="cursor-pointer hover:underline text-md-lg text-sm-sm">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:underline text-md-lg text-sm-sm">
            <Link href="/home">Disease Detection</Link>
          </li>
          <li className="cursor-pointer hover:underline text-md-lg text-sm-sm">
            <Link href="/sensor">Crop Monitoring</Link>
          </li>
          <li className="cursor-pointer hover:underline text-md-lg text-sm-sm">
            <Link href="/models">3D Models</Link>
          </li>
        </ul>
      <ThemeToggle />
      </div>
    </nav>
  );
}
