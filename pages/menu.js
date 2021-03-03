import Image from 'next/image'
import {Footer} from "../components/footer";
import {Navbar} from "../components/navbar";

const Menu = () => {
    return (
        <div>
            <Navbar/>
            <header>
                <div>
                    <h1>Our Delicious Menu</h1>
                    <div className='grid grid-cols-5 grid-rows-2 mt-4 gap-y-8'>
                        <div className='text-center'>
                            <Image className='rounded-full' src={'/images/appetizers.png'} width={180} height={180}/>
                            <div className='text-sm capitalize font-semibold'>Appetizers</div>
                        </div>
                        <div className='text-center'>
                            <Image className='rounded-full' src={'/images/burgers.png'} width={180} height={180}/>
                            <div className='text-sm capitalize font-semibold'>Burgers</div>
                        </div>
                        <div className='text-center'>
                            <Image className='rounded-full' src={'/images/pizzas.png'} width={180} height={180}/>
                            <div className='text-sm capitalize font-semibold'>Pizzas</div>
                        </div>
                        <div className='text-center'>
                            <Image className='rounded-full' src={'/images/fries.png'} width={180} height={180}/>
                            <div className='text-sm capitalize font-semibold'>Fries</div>
                        </div>
                        <div className='text-center'>
                            <Image className='rounded-full' src={'/images/deserts.png'} width={180} height={180}/>
                            <div className='text-sm capitalize font-semibold'>Deserts</div>
                        </div>
                        <div className='text-center'>
                            <Image className='rounded-full' src={'/images/rice.png'} width={180} height={180}/>
                            <div className='text-sm capitalize font-semibold'>Rice</div>
                        </div>
                        <div className='text-center'>
                            <Image className='rounded-full' src={'/images/beverages.png'} width={180} height={180}/>
                            <div className='text-sm capitalize font-semibold'>Beverages</div>
                        </div>
                        <div className='text-center'>
                            <Image className='rounded-full' src={'/images/chinese.png'} width={180} height={180}/>
                            <div className='text-sm capitalize font-semibold'>Chinese</div>
                        </div>
                        <div className='text-center'>
                            <Image className='rounded-full' src={'/images/great-deal.png'} width={180} height={180}/>
                            <div className='text-sm capitalize font-semibold'>Great Deal</div>
                        </div>
                        <div className='text-center'>
                            <Image className='rounded-full' src={'/images/specials.png'} width={180} height={180}/>
                            <div className='text-sm capitalize font-semibold'>Specials</div>
                        </div>
                    </div>
                </div>
            </header>
            <section className='grid grid-rows-3 gap-y-8'>
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='text-2xl font-semibold'>Food Near Me</div>
                        <div className='flex'>
                            <a className='underline text-sm text-gray-700' href="">View All</a>
                            <div className='ml-4'>
                                <span className='bg-gray-200 w-6 h-6 rounded-full inline-block'></span>
                                <span className='bg-gray-200 w-6 h-6 rounded-full inline-block ml-2'></span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='grid grid-cols-4 gap-x-6 mt-4'>
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
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='text-2xl font-semibold'>Food Near Me</div>
                        <div className='flex'>
                            <a className='underline text-sm text-gray-700' href="">View All</a>
                            <div className='ml-4'>
                                <span className='bg-gray-200 w-6 h-6 rounded-full inline-block'></span>
                                <span className='bg-gray-200 w-6 h-6 rounded-full inline-block ml-2'></span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='grid grid-cols-4 gap-x-6 mt-4'>
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
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='text-2xl font-semibold'>Food Near Me</div>
                        <div className='flex'>
                            <a className='underline text-sm text-gray-700' href="">View All</a>
                            <div className='ml-4'>
                                <span className='bg-gray-200 w-6 h-6 rounded-full inline-block'></span>
                                <span className='bg-gray-200 w-6 h-6 rounded-full inline-block ml-2'></span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='grid grid-cols-4 gap-x-6 mt-4'>
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
    );
}
export default Menu