import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import jumboImage from '../public/jumbo-graphic@2x.png'
import jumboBackground from '../public/jumbotron-background@2x.png'
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar/navbar'

const keywords = ["Effortlessly", "Quickly", "Easily", "Instantly"]

function Home() {
  const [ index, setIndex ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => {
        if(prevIndex === keywords.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      })
    }, 1000);
    return () => { clearInterval(interval); }
  }, []);

  return (
    <>
      <Head>
        <title>Mintpad - Mint NFTs Effortlessly With Credit Cards</title>
        <meta name="description" content="Mint NFTs Effortlessly With Credit Cards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section
        className="py-16 flex justify-center items-center bg-cover md:h-[675px] bg-top overflow-hidden"
        style={{
          backgroundImage: `url(${jumboBackground.src})`
        }}
      >
        <div className="max-w-7xl w-full p-8 flex flex-col md:flex-row gap-x-16 justify-center items-center">
          <div className='w-full'>
            <h1 className='font-rubik text-5xl font-bold text-gray-800 mb-3'>Mint NFTs <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-blue-600">{keywords[index]}</span> <br /> With Credit Cards</h1>
            <p className='text-gray-600 text-lg'>The world’s first web3 solution to allow NFT collectors to mint NFTs with just a credit card, hassle-free.</p>
          </div>
          <div className="w-full">
            <div className='relative'>
              {/* <Image src="/graidents@2x.png" alt="Jumbotron gradient" className='absolute top-0 bottom-0 right-0 left-0' layout='fill'/> */}
              <Image src={jumboImage} alt="Jumbotron Image" />
            </div>
          </div>
        </div>
      </section>

      <section id='problem' className="bg-gradient-to-bl from-slate-700 to-slate-900 py-16 md:p-32 flex justify-center items-center transform -skew-y-2 -mt-16">
        <div className="max-w-7xl w-full p-8 flex flex-col skew-y-2 relative">
            <div className="w-[360px] h-[140px] z-20 absolute bottom-0 right-0 rotate-180 mix-blend-overlay opacity-10">
              <Image src="/data-line-graphic@2x.png" alt="Step 1" layout="fill" />
            </div>
          <div className="z-20">
            <p className="text-teal-300 text-lg font-semibold">The Problem</p>
            <h3 className="text-3xl font-bold text-gray-100">Minting NFTs Is Complicated, But We’ve Changed This.</h3>
            <p className='text-lg text-white mt-6'>The process for NFT collectors to mint NFTs can be a complicated one, especially for users who are new to the web3 space. With the current solution, it requires users to first buy crypto, transfer them to their wallets even before they can mint their NFTs. Moreover, they’re paying 3 times the fees and they must go through a lengthy and tedious verification process.</p>
          </div>
        </div>
      </section>

      <section id='solution' className='flex justify-center items-center lg:p-32 group'>
        <div className="max-w-7xl w-full flex flex-col gap-y-6 py-16 px-8">
          <div className="flex items-center justify-center my-24">
            <div className='w-full md:flex items-center hidden translate-x-72 group-hover:translate-x-12 transform transition-all duration-700'>
              <span className='h-1 w-1 bg-teal-400/50 rounded'></span>
              <div className="h-[1px] bg-gradient-to-br from-teal-400/50 via-sky-100/5 to-blue-500/50 w-full"></div>
              <span className='h-1 w-1 bg-blue-500/50 rounded'></span>
            </div>
            <div className="w-full relative z-20">
              <div className="mx-auto rounded-xl bg-gradient-to-bl from-teal-300/40 via-sky-200/30 to-blue-500/50 p-[2px] w-[316px] h-[190px] shadow-2xl shadow-blue-400/30 group-hover:skew-y-12 group-hover:-rotate-45 transform transition-all duration-700">
                <div className="bg-slate-100/20 backdrop-blur-3xl rounded-[10px] flex flex-col justify-between items-center text-xs text-white shadow-sm font-light p-6 h-full">
                  <div className='w-full flex flex-row justify-between items-center'>
                    <p className="uppercase tracking-widest">Credit Card</p>
                    <Image src="/mintpad-icon-white.svg" alt="Mintpad Icon White" width={30} height={30}/>
                  </div>
                  <div className='w-full flex flex-row justify-between items-center'>
                    <div className="flex flex-col gap-y-2">
                      <div className="flex justify-between">
                        <p className="uppercase tracking-widest">Mintpad</p>
                        <p>01/28</p>
                      </div>
                      <p>8888 8888 8888 8888</p>
                    </div>
                    <Image src="/data-line-graphic@2x.png" alt="Data Lines" width={82} height={32}/>
                  </div>
                </div>
              </div>
              {/* <span className='lg:block hidden h-[278px] w-[278px] bg-teal-100/50 rounded-full animate-ping absolute'></span> */}
              {/* <Image src="/credit-card-graphic@2x.png" alt='Credit Card Image' layout="responsive" width={278} height={278} /> */}
            </div>
            <div className='w-full md:flex items-center hidden -translate-x-72 group-hover:-translate-x-12 transform transition-all duration-700'>
              <span className='h-1 w-1 bg-teal-400/50 rounded'></span>
              <div className="h-[1px] bg-gradient-to-br from-teal-400/50 via-sky-100/5 to-blue-500/50 w-full"></div>
              <span className='h-1 w-1 bg-blue-500/50 rounded'></span>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <p className="text-blue-500 text-lg font-semibold">The Solution</p>
            <h3 className="text-3xl font-bold text-gray-900 mt-2">We Made Minting NFTs <br className='hidden md:block'/> With Credit Cards Simple</h3>
            <p className='text-lg text-gray-600 mt-6'>Finally, with our plug-and-play innovation, NFT collectors are now able to mint NFTs directly with credit cards. <br /> No more lengthy, complicated process. Simply select the NFT and checkout with a credit card while storing the transaction on the blockchain. <br /> This is the easiest and most effortless way to mint NFTs.</p>
          </div>
        </div>
      </section>

      <section id='how' className="bg-gradient-to-bl from-slate-800 to-slate-900 py-16 md:p-32 flex justify-center items-center transform skew-y-2 overflow-hidden">
        <div className="max-w-7xl w-full p-8 flex flex-col gap-y-12 -skew-y-2 text-center relative">
          <div className="w-[420px] h-[420px] bg-blue-400 rounded-full transform blur-[128px] opacity-50 absolute bottom-0 left-0 z-10 overflow-visible"></div>
          <div className="w-[280px] h-[280px] bg-teal-300 rounded-full transform blur-[128px] opacity-50 absolute right-0 top-0 z-10 overflow-visible"></div>
          <div className='z-20'>
            <p className="text-teal-300 text-lg font-semibold">How It Works</p>
            <h3 className="text-3xl font-bold text-gray-100 mt-2">An Easy Way To Mint NFTs Without The Headaches</h3>
            <p className='text-lg text-white mt-6'>We’ve made minting NFTs simple. It’s just 3 easy steps. </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-6 z-20">
            <div className="w-full px-6 py-8 flex flex-col gap-y-6 items-center">
              <div className="w-[185px] h-[185px] relative">
                <Image src="/step1-graphic@2x.png" alt="Step 1" layout="fill" />
              </div>
              <div className='text-white'>
                <p className="font-bold">Step 1</p>
                <p>Visit the mint page to select your NFTs</p>
              </div>
            </div>
            <div className="w-full px-6 py-8 flex flex-col gap-y-6 items-center">
              <div className="w-[185px] h-[185px] relative">
                <Image src="/step2-graphic@2x.png" alt="Step 2" layout="fill" />
              </div>
              <div className='text-white'>
                <p className="font-bold">Step 1</p>
                <p>Checkout with a debit or credit card</p>
              </div>
            </div>
            <div className="w-full px-6 py-8 flex flex-col gap-y-6 items-center">
              <div className="w-[185px] h-[185px] relative">
                <Image src="/step3-graphic@2x.png" alt="Step 3" layout="fill" />
              </div>
              <div className='text-white'>
                <p className="font-bold">Step 1</p>
                <p>Tell us your wallet address to transfer your NFTs on the blockchain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='why' className='py-16 flex justify-center items-center'>
        <div className="max-w-7xl w-full flex flex-col gap-y-12 p-8">
          <div>
            <p className="text-blue-500 text-lg font-semibold">Why Mintpad?</p>
            <h3 className="text-3xl font-bold text-gray-900 mt-2">The Future Of Minting NFTs Is Finally Here</h3>
            <p className='text-lg text-gray-600 mt-6'>Finally, with our plug-and-play innovation, NFT collectors are now able to mint NFTs directly with credit cards. No more lengthy, complicated process. Simply select the NFT and checkout with a credit card while storing the transaction on the blockchain. This is the easiest and most effortless way to mint NFTs.</p>
          </div>
          <div className="grid md:grid-cols-2 md:grid-rows-2 gap-6">
            <div className="rounded-lg bg-gradient-to-br from-blue-500/50 via-sky-500/5 to-teal-400/50 p-[2px] hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1 transition-all">
              <div className="bg-white rounded-[6px] py-8 px-6 flex flex-col gap-y-3 text-lg h-full">
                <p className="text-gray-900 font-semibold">Easy To Use</p>
                <p className='text-gray-600'>No more complicated process to minting your NFTs. Minting NFTs is now just like shopping online. Choose what you want and checkout with a credit card.</p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-blue-500/50 via-sky-500/5 to-teal-400/50 p-[2px] hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1 transition-all">
              <div className="bg-white rounded-[6px] py-8 px-6 flex flex-col gap-y-3 text-lg h-full">
                <p className="text-gray-900 font-semibold">Instant Delivery</p>
                <p className='text-gray-600'>We made credit card minting just like minting on the blockchain. The minute your transaction is approved, you’ll immediately receive your NFT on the blockchain with the wallet you desire..</p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-blue-500/50 via-sky-500/5 to-teal-400/50 p-[2px] hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1 transition-all">
              <div className="bg-white rounded-[6px] py-8 px-6 flex flex-col gap-y-3 text-lg">
                <p className="text-gray-900 font-semibold">No Lengthy Process</p>
                <p className='text-gray-600'>Eliminate the dreadful verification process and simply mint NFTs with any credit cards of your choice. We’ve put an end to uploading documents and submitted your IDs for transactions up to $2,500 USD.</p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-blue-500/50 via-sky-500/5 to-teal-400/50 p-[2px] hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1 transition-all">
              <div className="bg-white rounded-[6px] py-8 px-6 flex flex-col gap-y-3 text-lg h-full">
                <p className="text-gray-900 font-semibold">Global Scale</p>
                <p className='text-gray-600'>Cryptocurrency only represents 4% of the population and there’s 22.8 billion credit cards worldwide. We finally have shorten the gap to allow non-crypto users to mint NFTs without the complicated process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='contact' className='py-16 flex justify-center items-center bg-slate-50 overflow-hidden'>
        <div className="max-w-7xl w-full p-8 flex flex-col justify-center items-center gap-y-6 relative">
          <div className="w-[280px] h-[280px] bg-teal-300 rounded-full transform blur-[128px] opacity-50 absolute left-0 top-0 z-10"></div>
          <div className="w-[420px] h-[420px] bg-blue-400 rounded-full transform blur-[128px] opacity-50 absolute top-0 right-0 z-10"></div>
          <div className="hidden md:block w-[360px] h-[140px] z-10 absolute top-0 left-0">
            <Image src="/data-line-graphic@2x.png" alt="Step 1" layout="fill" />
          </div>
          <div className="hidden md:block w-[360px] h-[140px] z-10 absolute bottom-0 right-0 rotate-180">
            <Image src="/data-line-graphic@2x.png" alt="Step 1" layout="fill" />
          </div>
          <div className='text-center z-20'>
            <p className="text-cyan-500 text-lg font-semibold">Get In Touch</p>
            <h3 className="text-3xl font-bold text-gray-900 mt-2">Now Accepting Digital Creators & Artists To Join The Revolution</h3>
            <p className='text-lg text-gray-600 mt-6'>Interested in having your NFTs mintable with a credit card? Contact us for more information on MintPad. We’re only accepting a handful of users to leverage our technology.</p>
          </div>
          <a href="#" className='px-4 py-2 bg-blue-600 text-white text-lg rounded hover:to-blue-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/25 transition-all'>Contact Us</a>
        </div>
      </section>

      <footer className='bg-white py-12 flex justify-center items-center'>
        <div className="max-w-7xl w-full px-8 flex flex-col md:flex-row justify-between items-center">
          <a href="/home">
            <Image src="/mp-logo-primary.svg" alt="Mintpad Logo" width={154.73} height={32} />
          </a>
          <p className="text-gray-400">© 2022 Mintpad. All rights reserved.</p>
        </div>
      </footer>

    </>
  )
}

export default Home
