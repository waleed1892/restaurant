import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className='bg-gray-900'>
            <div className='flex justify-between items-center pb-8 border-b border-gray-600'>
                <Image src={'/images/logo-white.png'} height={'50'} width={210}/>
            </div>
            <div
                className='grid grid-cols-5 sm:grid-cols-3 sm:gap-6 sm:pb-16 sm:items-start lg:grid-cols-5 py-10 gap-x-16 pb-24'>
                <ul className='flex flex-col list-none text-gray-100 text-sm leading-relaxed'>
                    <li><Link href='/'>About Us</Link></li>
                    <li><Link href='/'>Restaurant Owners</Link></li>
                    <li><Link href='/'>FAQ</Link></li>
                    <li><Link href='/'>Become A Courier</Link></li>
                    <li><Link href='/'>Gift Cards</Link></li>
                    <li><Link href='/'>Careers</Link></li>
                    <li><Link href='/'>Rewards</Link></li>
                    <li><Link href='/'>Media & Community</Link></li>
                </ul>
                <ul className='flex flex-col list-none text-gray-100 text-sm leading-relaxed'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/'>Alternate Home</Link></li>
                    <li><Link href='/'>Menu</Link></li>
                    <li><Link href='/'>About</Link></li>
                    <li><Link href='/'>News</Link></li>
                    <li><Link href='/'>Contact Us</Link></li>
                    <li><Link href='/'>Cart</Link></li>
                </ul>
                <div>
                    <ul className='flex flex-col list-none text-gray-100 text-sm leading-relaxed'>
                        <li><Link href='/'>My Account</Link></li>
                        <li><Link href='/'>Terms Of Service</Link></li>
                        <li><Link href='/'>Privacy Policy</Link></li>
                    </ul>
                    <div className='mt-4'>
                        <Image src={'/images/app-store-badge.png'} width={130} height={40}/>
                        <Image src={'/images/play-store-badge.png'} width={130} height={40}/>
                    </div>
                </div>
                <ul className='flex flex-col list-none text-gray-100 text-sm leading-relaxed'>
                    <li>Mon - <span className='text-yellow-500'>10AM to 11PM</span></li>
                    <li>Tue - <span className='text-yellow-500'>10AM to 11PM</span></li>
                    <li>Wed - <span className='text-yellow-500'>10AM to 11PM</span></li>
                    <li>Thur - <span className='text-yellow-500'>10AM to 11PM</span></li>
                    <li>Fri - <span className='text-yellow-500'>10AM to 11PM</span></li>
                    <li>Sat - <span className='text-yellow-500'>10AM to 1AM</span></li>
                    <li>Sun - <span className='text-yellow-500'>11AM to 10PM</span></li>
                </ul>
                <div
                    className='text-center sm:col-span-2 sm:justify-self-end lg:col-span-1 text-gray-100 text-sm leading-tight'>
                    <div>VOCUHER</div>
                    <div className='mt-2'>
                        <Image src={'/images/voucher.png'} width={120} height={120}/>
                    </div>
                    <div>Just use the code</div>
                    <div className='text-yellow-500'>FIRSTORDER</div>
                    <div>At Checkout</div>
                </div>
            </div>
            <div className='flex justify-between text-sm text-gray-100 items-center border-t border-gray-600 pt-8'>
                <div>&copy; Copyright 2021, Noah</div>
                <ul className='flex list-none'>
                    <li><Link href='/'>Sitemap</Link></li>
                    <li className='ml-4'><Link href='/'>Terms & Conditions</Link></li>
                    <li className='ml-4'><Link href='/'>Privacy Policy</Link></li>
                </ul>
            </div>
        </footer>
    )
}