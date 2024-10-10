import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { BiSolidMedal, BiSolidPurchaseTag } from 'react-icons/bi'
import { ProductProps } from '@/types/products.types'
import ProductImage from '@/app/assets/product-placeholder.png'
import Image from 'next/image'

const productCard = () => {
  return (
    <div className="flex bg-darkBgContent flex-col justify-between h-full p-1.5 rounded">
      <div className='flex flex-col justify-between h-full'>
        <Link href={`/products/1`}>
          <Image className="w-full rounded h-72 md:h-48 lg:h-56" src={ProductImage} alt="product 1" />
        </Link>
        <div className="mt-2 mb-1">
          <h2 className="text-2xl truncate text-gray-200">Product Name</h2>
          {/* {productData.discount ?
            <div className="flex items-end justify-end gap-2 pt-3 direction-reverse">
              <p className="text-sm line-through">${productData.price}</p>
              <p className="text-xl font-semibold text-headingText">${productData.discountPrice}</p>
            </div>
            :
            <div className="pt-3">
              <p className="font-semibold text-end">${productData.price}</p>
            </div>
          } */}
          <div className="pt-3">
            <p className="font-semibold text-end">2000DA</p>
          </div>
        </div>
      </div>
      <div>
        <Link href={`/products/3`}>
          <Button className="w-full mt-2 rounded">Buy</Button>
        </Link>
      </div>
    </div>
  )
}

export default productCard