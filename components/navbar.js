import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className='relative'>
            <nav
                className='border-b border-gray-100 border-opacity-50 w-full flex justify-between'>
                <Link className='cursor-pointer' href='/'>
                    <a href="">
                        <Image src={'/images/logo.png'} width={210} height={50}/>
                    </a>
                </Link>
            </nav>
        </div>
    )
}
export default Navbar