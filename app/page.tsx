import Image from "next/image";
import Link from "next/link";

import Logo from "./assets/DonorGirlz.png"
import DonorBg from "./assets/DonationBg.jpg"

const PageHeader = () => {
  return (
    <div className="flex w-full p-4 items-center">
      <div className="w-1/3">
        <Image src={Logo} width={200} height={100} alt="DonorGirlz" />
      </div>
      <div className="flex w-full justify-end items-center">
        <Link href="/register">
          <div className="mr-3">Register</div>
        </Link>
        <Link href="/login">
          <div className="mr-3">Login</div>
        </Link>
        <Link href="/donate">
          <div className="mr-3 bg-purple-800 p-3 rounded-md hover:opacity-50">Donate</div>
        </Link>
      </div>
    </div>
  )
}

const PageContent = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full">
          <Image src={DonorBg} width={800} height={100} alt="DonorGirlz" />
        </div>
        <div className="w-full ml-4 flex text-xl items-center">
          <span>
            The <span className="text-purple-500 font-bold">happiness</span> is giving it away.
            The more you give the more you receive.

            Every month, millions of girls around the world face a challenging reality: they lack access to menstrual hygiene products. For these girls, managing their periods is not just an inconvenience; it's a barrier to education, dignity, and opportunity.
          </span>
        </div>
      </div>
    </div>
  )
}

const PageFooter = () => {
  return (
    <div className="w-full p-3 border border-white">
      <Image src={Logo} width={100} height={100} alt="DonorGirlz" />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen justify-start max-w-7xl w-full mx-auto pt-8">
        <PageHeader />
        <PageContent />
      </main>
      <PageFooter />
    </>
  );
}
