"use client"

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { RiMenu3Line } from "react-icons/ri"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import useCart from "@/zustand/cart"
import { LuShoppingCart } from 'react-icons/lu'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from './ui/button'
import { CheckIcon, GlobeIcon, Languages, XIcon } from 'lucide-react'


const navbar = () => {
  const [phoneMenu, setPhoneMenu] = useState(false);

  const { productsCart } = useCart();

  return (
    <nav className="">
      <div className="container">
        <div className="flex items-center py-4">
          {/* <Link href="/" className="mr-auto flex items-center gap-2 text-lg font-semibold">
            <Image src={LOGO} alt="Logo" className="w-36 h-8" />
          </Link> */}
          <div className="mr-auto text-white relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 mr-2"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Logo
          </div>

          <div className="flex items-center space-x-5 md:space-x-8 z-50">
            <nav className={`z-50 ${phoneMenu ? "w-full" : "w-0"} bg-darkBg fixed md:static top-0 left-0 h-full flex-col md:flex-row justify-center text-white duration-300 overflow-hidden md:w-full flex items-center gap-8`}>
              <div className="md:hidden absolute top-5 right-6" onClick={() => setPhoneMenu(false)}>
                <IoMdClose size={22} />
              </div>

              <Link href="/" onClick={() => setPhoneMenu(false)} className="text-gray-400 hover:text-white duration-300 font-semibold">
                Home
              </Link>
              <Link href="/products" onClick={() => setPhoneMenu(false)} className="text-gray-400 hover:text-white duration-300 font-semibold">
                Products
              </Link>
              <Link href="/#about" onClick={() => setPhoneMenu(false)} className="text-gray-400 hover:text-white duration-300 font-semibold">
                About
              </Link>
              <Link href="/#faq" onClick={() => setPhoneMenu(false)} className="text-gray-400 hover:text-white duration-300 font-semibold">
                FAQ
              </Link>
            </nav>

            <div>
              <Drawer>
                <DrawerTrigger asChild className='cursor-pointer duration-300 text-gray-300 hover:text-gray-100'>
                  <Languages className="h-5 w-5" />
                </DrawerTrigger>
                <DrawerContent>
                  <div className="grid gap-4 p-4">
                    <div>
                      <h3 className="text-lg font-medium">Select Language</h3>
                      {/* <DrawerClose asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <XIcon className="h-5 w-5" />
                        </Button>
                      </DrawerClose> */}
                    </div>
                    <div className="grid gap-2">
                      <Button variant="ghost" className="justify-start gap-2">
                        <GlobeIcon className="h-5 w-5" />
                        <span>English</span>
                        <CheckIcon className="h-5 w-5 ml-auto" />
                      </Button>

                      <Button variant="ghost" className="justify-start gap-2">
                        <GlobeIcon className="h-5 w-5" />
                        <span>Arabic</span>
                      </Button>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>

            </div>

            {/* <Link href="/cart" className="z-30 relative duration-300 text-gray-300 hover:text-gray-100">
              {productsCart.length > 0 &&
                <div className="absolute flex justify-center items-center text-xs bg-red-600 text-white -right-2 -top-2 w-5 h-5 rounded-full">
                  {productsCart.length}
                </div>
              }
              <LuShoppingCart size={21} />
            </Link> */}

            <div className="z-30 md:hidden" onClick={() => setPhoneMenu(true)}>
              <RiMenu3Line size={23} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default navbar