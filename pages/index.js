import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {Footer} from "../components/footer";
import {Navbar} from "../components/navbar";
// import {ImLocation} from "react-icons/all";

export default function Home() {
    const styles = {
        imageRect: {
            clipPath: "polygon(0 0, 101% 0%, 101% 81%, 0% 98%)"
        }
    }
    return (
        <div>
            <Head>
                <title>Noah Takeout</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <Navbar/>
                <header className='bg-yellow-400 py-24 px-32'>
                    <div className='grid grid-cols-3 items-center'>
                        <div className='col-span-2'>
                            <h1 className='text-6xl font-bold leading-snug'>Hungry? You're in the right place</h1>
                            <div className='grid grid-cols-4 mt-6 gap-x-2 w-5/6'>
                                <div className='col-span-2'>
                                    <div className='bg-white p-2 flex items-center overflow-x-hidden'>
                                        <span>
                                        {/*<ImLocation className='text-red-600 text-xl'/>*/}
                                        </span>
                                        <input type="text"
                                               className='placeholder-gray-600 text-gray-800 ml-2 outline-none w-full'
                                               placeholder='Enter delivery address'/>
                                    </div>
                                </div>
                                <div>
                                    <div className='bg-white p-2 flex items-center overflow-x-hidden'>
                                    <span>1
                                        {/*<ImLocation className='text-red-600 text-xl'/>*/}
                                    </span>
                                        <input type="text"
                                               className='placeholder-gray-600 ml-2 text-gray-800 outline-none w-full'
                                               placeholder='Deliver Time'/>
                                    </div>
                                </div>
                                <button className='text-white bg-black uppercase font-semibold'>find food</button>
                            </div>
                            <div className='mt-4 text-gray-900'>Sign in for your recent address</div>
                        </div>
                        <div className='text-center'>
                            <Image src={'/images/hero.png'} width={400} height={370}/>
                        </div>
                    </div>
                </header>
                <div className='py-24 px-32'>
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
                        <div className='grid grid-cols-5 mt-4'>
                            <div className='text-center'>
                                <Image src='/images/appetizers.png' className='rounded-full' width={170} height={170}/>
                                <div className='capitalize font-semibold'>Appetizers</div>
                            </div>
                            <div className='text-center'>
                                <Image src='/images/burgers.png' className='rounded-full' width={170} height={170}/>
                                <div className='capitalize font-semibold'>Burgers</div>
                            </div>
                            <div className='text-center'>
                                <Image src='/images/pizzas.png' className='rounded-full' width={170} height={170}/>
                                <div className='capitalize font-semibold'>Pizzas</div>
                            </div>
                            <div className='text-center'>
                                <Image src='/images/fries.png' className='rounded-full' width={170} height={170}/>
                                <div className='capitalize font-semibold'>Fries</div>
                            </div>
                            <div className='text-center'>
                                <Image src='/images/deserts.png' className='rounded-full' width={170} height={170}/>
                                <div className='capitalize font-semibold'>Deserts</div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-16'>
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
                    <div className='mt-16'>
                        <div className='flex justify-between items-center'>
                            <div className='text-2xl font-semibold'>Other Restaurants On Noah Takeaway</div>
                            <div className='flex'>
                                <a className='underline text-sm text-gray-700' href="">View All</a>
                                <div className='ml-4'>
                                    <span className='bg-gray-200 w-6 h-6 rounded-full inline-block'></span>
                                    <span className='bg-gray-200 w-6 h-6 rounded-full inline-block ml-2'></span>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-x-6 mt-4'>
                            <div className='text-center'>
                                <Image src='/images/pulled-place.png' className='rounded-md shadow-sm' width='270'
                                       height='220'/>
                                <div className='capitalize font-semibold'>Pulled Place</div>
                                <div className='text-red-600 font-semibold text-sm'>$3.00 - $6.00</div>
                            </div>
                            <div className='text-center'>
                                <Image src='/images/brushchetta.png' width='270' height='220'
                                       className='rounded-md shadow-sm'
                                       layout='responsive'/>
                                <div className='capitalize font-semibold'>Brushchetta Restaurant</div>
                                <div className='text-red-600 font-semibold text-sm'>$3.00 - $6.00</div>
                            </div>
                            <div className='text-center'>
                                <Image src='/images/korean-sushi.png' width='270' height='220'
                                       className='rounded-md shadow-sm'
                                       layout='responsive'/>
                                <div className='capitalize font-semibold'>Korean Sushi</div>
                                <div className='text-red-600 font-semibold text-sm'>$3.00 - $6.00</div>
                            </div>
                            <div className='text-center'>
                                <Image src='/images/shuffle.png' width='270' height='220'
                                       className='rounded-md shadow-sm'
                                       layout='responsive'/>
                                <div className='capitalize font-semibold'>Shuffle</div>
                                <div className='text-red-600 font-semibold text-sm'>$3.00 - $6.00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-yellow-400 py-24 px-32'>
                    <div className='grid grid-cols-3 items-center'>
                        <div>
                            <h2 className='text-5xl font-bold leading-tight'>Download Our App</h2>
                            <div className='text-base mt-4'>Our app gives you access to your favourite Food and
                                Restaurants. Get your food
                                delivered right to you.
                            </div>
                        </div>
                        <div className='col-span-2 flex'>
                            <div>
                                <Image src='/images/app/app-1.png' width='210' height='450'/>
                            </div>
                            <div className='ml-6'>
                                <Image src='/images/app/app-2.png' width='210'
                                       height='450'/>
                            </div>
                            <div className='ml-6'>
                                <Image src='/images/app/app-3.png' width='210'
                                       height='450'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-24 px-32'>
                    <h2 className='text-center font-bold text-4xl'>Latest News</h2>
                    <div className='grid grid-cols-4 mt-8 gap-x-6'>
                        <div className='border'>
                            <div style={styles.imageRect}>
                                <Image src='/images/greek-street.png' width='280' height='210'/>
                            </div>
                            <div className='p-4'>
                                <h4 className='text-lg font-semibold text-gray-800 tracking-wide'>Greek street food
                                    dishes</h4>
                                <p className='text-gray-700 leading-tight text-sm'>Gyros is one of the most popular
                                    Greek street
                                    food
                                    consisting of meat such as
                                    pork.</p>
                            </div>
                        </div>
                        <div className='border'>
                            <div style={styles.imageRect}>
                                <Image src='/images/chorizo.png' width='280' height='210'/>
                            </div>
                            <div className='p-4'>
                                <h4 className='text-lg font-semibold text-gray-800 tracking-wide'>Chorizo is a
                                    spanish</h4>
                                <p className='text-gray-700 leading-tight text-sm'>Gyros is one of the most popular
                                    Greek street
                                    food
                                    consisting of meat such as
                                    pork.</p>
                            </div>
                        </div>
                        <div className='border'>
                            <div style={styles.imageRect}>
                                <Image src='/images/tteok.png' width='280' height='210'/>
                            </div>
                            <div className='p-4'>
                                <h4 className='text-lg font-semibold text-gray-800 tracking-wide'>Tteok are
                                    traditional</h4>
                                <p className='text-gray-700 leading-tight text-sm'>Gyros is one of the most popular
                                    Greek street
                                    food
                                    consisting of meat such as
                                    pork.</p>
                            </div>
                        </div>
                        <div className='border'>
                            <div style={styles.imageRect}>
                                <Image src='/images/england-has.png' width='280' height='210'/>
                            </div>
                            <div className='p-4'>
                                <h4 className='text-lg font-semibold text-gray-800 tracking-wide'>Although England
                                    has</h4>
                                <p className='text-gray-700 leading-tight text-sm'>Gyros is one of the most popular
                                    Greek street
                                    food
                                    consisting of meat such as
                                    pork.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
