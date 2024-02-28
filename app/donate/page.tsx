import React from 'react'

import Image from "next/image";

import Link from "next/link";

import Logo from "../assets/DonorGirlz.png"
import DonorBg from "../assets/DonationBg.jpg"

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
        <div className="flex justify-center my-auto flex-col items-center">
            <div className="text-3xl mb-2">Donate Now</div>
            <form className="border flex flex-col w-full">
                <input type="text" placeholder="Enter Name" className="bg-gray-400 placeholder:text-black mb-2 p-4 focus:outline-none" />
                <input type="text" placeholder="Enter Phone Number" className="bg-gray-400 placeholder:text-black mb-2 p-4 focus:outline-none" />
                <input type="text" placeholder="Enter Number of Pads" className="bg-gray-400 placeholder:text-black mb-2 p-4 focus:outline-none" />
                <div className="bg-purple-800 p-3 rounded-md hover:opacity-50 w-[100px] text-center">Donate</div>
            </form>
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

const RegisterPage = () => {
    return (
        <>
            <main className="flex flex-col min-h-screen justify-start max-w-7xl w-full mx-auto pt-8">
                <PageHeader />
                <PageContent />
            </main>
            <PageFooter />
        </>
    )
}

export default RegisterPage
