import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import NFT from '@/public/image-equilibrium.jpg';
import Avatar from '@/public/image-avatar.png';
import { AiOutlineClockCircle, AiFillEye } from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';

import CardLayout from '@/components/layouts/card-layout';

const CardSection = () => {
  return (
    <CardLayout>
      <Link href='/' className='card-image'>
        <Image
          src={NFT}
          alt='NFT image'
          height={278}
          width={278}
          sizes='100%'
          className='w-full rounded-lg relative'
        />
        <div className='w-full h-[278px] bg-dark-100 hidden'>
          <AiFillEye />
        </div>
      </Link>

      <div>
        <h1 className='mt-6 text-[22px] font-semibold hover:text-dark-100 transition-all'>
          <Link href='/'>Equilibrium #3429</Link>
        </h1>
        <p className='text-lg text-dark-200 font-light leading-[26px] mt-4'>
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className='flex justify-between mt-6'>
          <p className='text-dark-100 font-semibold text-base flex items-center gap-1'>
            <FaEthereum /> 0.041 ETH
          </p>
          <p className='text-dark-200 font-normal text-base flex items-center gap-1'>
            <AiOutlineClockCircle /> 3 days left
          </p>
        </div>
      </div>

      <div className='border-t-[1px] border-dark-300 mt-6 py-4 flex items-center gap-4'>
        <div className='border rounded-full border-light-100'>
          <Image
            src={Avatar}
            alt='Avatar'
            height={33}
            width={33}
            sizes='100%'
            className=''
          />
        </div>
        <p className='text-dark-200 text-base font-normal'>
          Creation of{' '}
          <Link
            className='text-light-100 hover:text-dark-100 transition-all'
            href='/'
          >
            Jules Wyvern
          </Link>{' '}
        </p>
      </div>
    </CardLayout>
  );
};

export default CardSection;
