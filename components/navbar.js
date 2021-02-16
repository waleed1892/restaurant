import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
    return (
        <div className='relative'>
            <nav
                className='px-32 py-2 absolute inset-x-0 top-0 border-b border-gray-100 border-opacity-50 w-full flex justify-between'>
                <Link className='cursor-pointer' href='/'><Image src={'/images/logo.png'} width={210} height={50}/></Link>
            </nav>
        </div>
    )
}