import Image from 'next/image'
import {Footer} from "../components/footer";
import Navbar from "../components/navbar";

const Shop = () => {
    return (
        <div>
            <Navbar/>
            <header>
                <h1>Bigger Better Burger Joint</h1>
            </header>
            <section>
                <div className='grid grid-cols-2 gap-x-12'>
                    <div>
                        <div>
                            <div>
                                <Image className='rounded-md' src='/images/product-1.png' width={560} height={490}/>
                            </div>
                            <div className='grid grid-cols-3 gap-x-6 mt-4'>
                                <div><Image className='rounded-md' src='/images/product-2.png' width={185}
                                            height={150}/></div>
                                <div><Image className='rounded-md' src='/images/product-2.png' width={185}
                                            height={150}/></div>
                                <div><Image className='rounded-md' src='/images/product-4.png' width={185}
                                            height={150}/></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-rows-2 gap-y-8'>
                            <div className='rounded-lg p-6 rounded-lg shadow-lg border border-gray-100'>
                                <h3 className='font-bold text-center text-xl'>Make a Reservation Online</h3>
                                <div className='grid grid-cols-2 grid-rows-3 gap-6 mt-4 items-center'>
                                    <div><label className='font-semibold' htmlFor="">Party Size</label></div>
                                    <div><label className='font-semibold' htmlFor="">Date</label></div>
                                    <div><label className='font-semibold' htmlFor="">Time</label></div>
                                    <div><label className='font-semibold' htmlFor="">Class</label></div>
                                    <div className='font-semibold text-sm'>Booked 62 times today</div>
                                    <div>
                                        <button
                                            className='bg-yellow-400 p-3 rounded-full w-full font-bold uppercase tracking-wide'>Book
                                            Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='rounded-lg p-6 rounded-lg shadow-lg border border-gray-100'>
                                <h3 className='font-bold text-center text-xl'>Order delviery or takeout</h3>
                                <div className='grid grid-cols-2 grid-rows-3 gap-6 mt-4 items-center'>
                                    <div className='col-span-2'></div>
                                    <div><label className='font-semibold' htmlFor="">Date</label></div>
                                    <div><label className='font-semibold' htmlFor="">Time</label></div>
                                    <div className='font-semibold text-xl tracking-wide'>$3.00 - $6.00</div>
                                    <div>
                                        <button
                                            className='bg-yellow-400 p-3 rounded-full w-full font-bold uppercase tracking-wide'>Book
                                            Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-16'>
                    <h2 className='text-center font-bold text-4xl'>Product Dietary Information</h2>
                    <div className='grid grid-cols-4 mt-8 gap-x-6'>
                        <div>
                            <ul className='flex list-none flex-col font-semibold divide-y text-gray-600'>
                                <li className='py-2 text-red-600'>Description</li>
                                <li className='py-2'>Additional Information</li>
                                <li className='py-2'>Reviews (0)</li>
                            </ul>
                        </div>
                        <div className='col-span-3'>
                            <div className='p-8 border border-gray-100 shadow-md rounded-md'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut consectetur
                                    corporis, cum deleniti expedita incidunt maxime necessitatibus nemo placeat porro
                                    quae quasi quisquam quos reprehenderit soluta sunt, suscipit voluptas.Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.</p>
                                <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                    aut consectetur
                                    corporis, cum deleniti expedita incidunt maxime necessitatibus nemo placeat porro
                                    quae quasi quisquam quos reprehenderit soluta sunt, suscipit voluptas.Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.</p>
                                <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                    aut consectetur
                                    corporis, cum deleniti expedita incidunt maxime necessitatibus nemo placeat porro
                                    quae quasi quisquam quos reprehenderit soluta sunt, suscipit voluptas.Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-16'>
                    <h2 className='text-center font-bold text-4xl'>More Delicious Takeout</h2>
                    <div className='mt-8'>
                        <div className='grid grid-cols-4 gap-x-6'>
                            <div className='text-center'>
                                <Image src='/images/fajita.png' className='rounded-md shadow-sm' width='270'
                                       height='220'/>
                                <div className='capitalize font-semibold'>Delicious Fajitas</div>
                                <div className='text-red-600 font-semibold text-sm'>$3.00 - $6.00</div>
                            </div>
                            <div className='text-center'>
                                <Image src='/images/lentils.png' width='270' height='220'
                                       className='rounded-md shadow-sm'
                                       layout='responsive'/>
                                <div className='capitalize font-semibold'>Lentils (Dal)</div>
                                <div className='text-red-600 font-semibold text-sm'>$3.00 - $6.00</div>
                            </div>
                            <div className='text-center'>
                                <Image src='/images/korean-pancake.png' width='270' height='220'
                                       className='rounded-md shadow-sm'
                                       layout='responsive'/>
                                <div className='capitalize font-semibold'>Korean Pancake (Jeon)</div>
                                <div className='text-red-600 font-semibold text-sm'>$3.00 - $6.00</div>
                            </div>
                            <div className='text-center'>
                                <Image src='/images/hand-pressed-sushi.png' width='270' height='220'
                                       className='rounded-md shadow-sm'
                                       layout='responsive'/>
                                <div className='capitalize font-semibold'>Hand Pressed Sushi</div>
                                <div className='text-red-600 font-semibold text-sm'>$3.00 - $6.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Shop;