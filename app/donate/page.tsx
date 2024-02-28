"use client"

import React, { useState, useEffect } from 'react'

import Image from "next/image";

import Link from "next/link";

import Logo from "../assets/DonorGirlz.png"
import DonorBg from "../assets/DonationBg.jpg"

const Card = (props: any) => {
    const { entry: { name, location, numberOfGirls, phoneNumber } } = props

    return (
        <div className="flex gap-4 mt-5 w-[400px]">
            <div className="justify-between h-[250px] max-w-[400px] border hover:translate-y-1 transition-all w-full p-4 rounded-md">
                <div>{name}</div>
                <div>{location}</div>
                <div>{phoneNumber}</div>
                <div>{`${numberOfGirls} girls`}</div>
                <div onClick={() => props?.handleDonate()} className="mt-4 mr-3 bg-purple-800 p-3 rounded-md hover:opacity-50 cursor-pointer">Donate</div>
            </div>
        </div>
    )
}

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
                    <div className="mr-3 bg-purple-800 p-3 rounded-md hover:opacity-50 cursor-pointer">Donate</div>
                </Link>
            </div>
        </div>
    )
}

const PageContent = () => {
    const [institutions, setInstitution] = useState<any>([])
    const [open, setOpen] = useState<boolean>(false)
    const [donation, setDonation] = useState<any>({
        name: "",
        phone: "",
        pads: 0
    })

    const handleDonate = async (entry: any) => {
        setOpen(true)
        const response = await fetch('http://localhost:1337/api/donations', {
            method: "POST",
            body: JSON.stringify({})
        })
        console.log("Massaged Data ==> institutions", response)

    }

    useEffect(() => {
        const fetchInstitutions = async () => {
            const response = await fetch('http://localhost:1337/api/institutions')
            const res = await response.json()
            const data = res?.data
            const massagedData = data?.map((entry: any) => entry?.attributes)

            console.log("Massaged Data", massagedData)
            setInstitution(massagedData)
        }

        fetchInstitutions()
    }, [])


    const handleSubmitDonation = () => {

    }

    const handleChange = (value: any) => {
        console.log("Massaged Data ==> institutions", value)


    }


    return (
        <>
            {
                open
                    ? <div className="flex flex-col justify-center">
                        <div className="text-2xl font-bold mb-4 text-center">Donate Now</div>
                        <form className="flex flex-col" onSubmit={() => handleSubmitDonation()}>
                            <input name="name" onChange={e => handleChange(e?.target)} className="placeholder:text-black mb-3 p-3 focus:outline-none text-black" placeholder="Enter Name" />
                            <input name="phone" onChange={handleChange} className="placeholder:text-black mb-3 p-3 focus:outline-none text-black" placeholder="Enter Phone Number" />
                            <input name="pads" onChange={handleChange} className="placeholder:text-black mb-3 p-3 focus:outline-none text-black" placeholder="Enter Number of Pads" />
                        </form>
                        <div onClick={handleDonate} className="w-1/2 bg-purple-800 p-3 rounded-md hover:opacity-50 cursor-pointer">Donate</div>
                    </div>
                    : <div className="flex justify-between gap-4">
                        {institutions?.map((entry: any) => <Card key={Math.random()} entry={entry} handleDonate={() => handleDonate(entry)} />)}
                    </div>
            }
        </>
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
