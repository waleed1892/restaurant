import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {Footer} from "../components/footer";
import Navbar from "../components/navbar";
import {Swiper, SwiperSlide} from 'swiper/react';
import Appetizers from './../public/images/appetizers.png'
import Burgers from './../public/images/burgers.png';
import Pizzas from './../public/images/pizzas.png'
import Fries from './../public/images/fries.png'
import Deserts from './../public/images/deserts.png'
import SliderHeader from "../components/sliderHeader";
import App1 from './../public/images/app/app-1.png'
import App2 from './../public/images/app/app-2.png'
import App3 from './../public/images/app/app-3.png'
import GreekStreet from './../public/images/greek-street.png';
import Chorizo from './../public/images/chorizo.png';
import Ttoek from './../public/images/tteok.png';
import EnglandHas from './../public/images/england-has.png';
import AppStore from "./../public/images/app-store-badge.png";
import PlayStore from "./../public/images/play-store-badge.png";


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
                <header>
                    <Navbar/>
                    <div className='grid grid-cols-3 lg:gap-x-6 items-center'>
                        <div className='col-span-2'>
                            <h1 className='text-left'>Hungry? You're in the right place</h1>
                            <div className='grid grid-cols-4 mt-6 gap-x-2'>
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
                <section>
                    <div>
                        <SliderHeader title='Food Near Me'/>
                        <Swiper className='mt-4' slidesPerView={5} spaceBetween={20}>
                            <SwiperSlide>
                                <div className='text-center'>
                                    <img src={Appetizers} className='w-52 h-52 mx-auto rounded-full' alt=""/>
                                    <div className='sm:text-sm capitalize font-semibold'>Appetizers</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='text-center'>
                                    <img src={Burgers} className='w-52 h-52 mx-auto rounded-full'/>
                                    <div className='sm:text-sm capitalize font-semibold'>Burgers</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='text-center'>
                                    <img src={Pizzas} className='w-52 h-52 mx-auto rounded-full'/>
                                    <div className='sm:text-sm capitalize font-semibold'>Pizzas</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='text-center'>
                                    <img src={Fries} className='w-52 h-52 mx-auto rounded-full'/>
                                    <div className='sm:text-sm capitalize font-semibold'>Fries</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='text-center'>
                                    <img src={Deserts} className='w-52 h-52 mx-auto rounded-full'/>
                                    <div className='sm:text-sm capitalize font-semibold'>Deserts</div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='mt-16'>
                        <SliderHeader title='Food Near Me'/>
                        <Swiper slidesPerView={4} spaceBetween={20} className='mt-4'>
                            <SwiperSlide>
                                <div className='text-center sm:grid sm:grid-rows-1 sm:items-start'>
                                    <img src='/images/fajita.png' className='rounded-md w-full h-auto shadow-sm'/>
                                    <div className='sm:text-sm capitalize font-semibold'>Delicious Fajitas</div>
                                    <div className='text-red-600 font-semibold text-sm'>$3.00 - $6.00</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='text-center sm:grid sm:grid-rows-1 sm:items-start'>
                                    <img src='/images/lentils.png' className='rounded-md w-full h-auto shadow-sm'/>
                                    <div className='sm:text-sm capitalize font-semibold'>Lentils (Dal)</div>
                                    <div className='text-red-600 font-semibold text-sm'>$3.00 - $6.00</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='text-center sm:grid sm:grid-rows-1 sm:items-start'>
                                    <img src='/images/korean-pancake.png'
                                         className='rounded-md w-full h-auto shadow-sm'/>
                                    <div className='sm:text-sm capitalize font-semibold'>Korean Pancake (Jeon)</div>
                                    <div className='text-red-600 font-semibold text-sm'>$3.00 - $6.00</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='text-center sm:grid sm:grid-rows-1 sm:items-start'>
                                    <img src='/images/hand-pressed-sushi.png'
                                         className='rounded-md w-full h-auto shadow-sm'/>
                                    <div className='sm:text-sm capitalize font-semibold'>Hand Pressed Sushi</div>
                                    <div className='text-red-600 font-semibold text-sm'>$3.00 - $6.00</div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='mt-16'>
                        <SliderHeader title='Other Restaurants On Noah Takeaway'/>
                        <Swiper className='mt-4' spaceBetween={20} slidesPerView={4}>
                            <SwiperSlide>
                                <div className='text-center sm:grid sm:grid-rows-1 sm:items-start'>
                                    <img src='/images/pulled-place.png' className='rounded-md w-full h-auto shadow-sm'/>
                                    <div className='sm:text-sm capitalize font-semibold'>Pulled Place</div>
                                    <div className='text-red-600 font-semibold text-sm'>$3.00 - $6.00</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='text-center sm:grid sm:grid-rows-1 sm:items-start'>
                                    <img src='/images/brushchetta.png' className='rounded-md w-full h-auto shadow-sm'/>
                                    <div className='sm:text-sm capitalize font-semibold'>Brushchetta Restaurant</div>
                                    <div className='text-red-600 font-semibold text-sm'>$3.00 - $6.00</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='text-center sm:grid sm:grid-rows-1 sm:items-start'>
                                    <img src='/images/korean-sushi.png' className='rounded-md w-full h-auto shadow-sm'/>
                                    <div className='sm:text-sm capitalize font-semibold'>Korean Sushi</div>
                                    <div className='text-red-600 font-semibold text-sm'>$3.00 - $6.00</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='text-center sm:grid sm:grid-rows-1 sm:items-start'>
                                    <img src='/images/shuffle.png' className='rounded-md w-full h-auto shadow-sm'/>
                                    <div className='sm:text-sm capitalize font-semibold'>Shuffle</div>
                                    <div className='text-red-600 font-semibold text-sm'>$3.00 - $6.00</div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className='bg-yellow-400'>
                    <div className='grid grid-cols-4 gap-x-6 items-center'>
                        <div className='col-span-2'>
                            <h2 className='text-5xl font-bold leading-tight'>Download Our App</h2>
                            <div className='text-base mt-4'>Our app gives you access to your favourite Food and
                                Restaurants. Get your food
                                delivered right to you.
                            </div>
                            <div className='flex mt-4'>
                                <img src={AppStore} alt=""/>
                                <img src={PlayStore} className='ml-2' alt=""/>
                            </div>
                        </div>
                        <div className='col-span-2 grid grid-cols-3 gap-x-6'>
                            <img src={App1} className='w-full h-auto' alt=""/>
                            <img src={App2} className='w-full h-auto' alt=""/>
                            <img src={App3} className='w-full h-auto' alt=""/>
                        </div>
                    </div>
                </section>
                <section className='bg-white'>
                    <h2 className='text-center font-bold text-4xl'>Latest News</h2>
                    <div className='grid grid-cols-4 sm:grid-cols-2 sm:gap-y-4 lg:grid-cols-4 mt-8 gap-x-6'>
                        <div className='border'>
                            <div style={styles.imageRect}>
                                <img src={GreekStreet} className='w-full h-auto'/>
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
                                <img src={Chorizo} className='w-full h-auto'/>
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
                                <img src={Ttoek} className='w-full h-auto'/>
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
                                <img src={EnglandHas} className='w-full h-auto'/>
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
                </section>
            </main>
            <Footer/>
        </div>
    );
}
