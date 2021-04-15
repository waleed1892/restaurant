import Navbar from "../components/navbar";
import Image from 'next/image'
import {Footer} from "../components/footer";

const Cart = () => {
    return (
        <div>
            <Navbar/>
            <header>
                <h1>Cart</h1>
            </header>
            <section>
                <div className='border border-gray-300 p-6'>
                    <h2 className='text-2xl font-bold tracking-wider capitalize border-b border-gray-300 pb-2'>You have
                        1 Item In Your Cart</h2>
                    <div className='grid grid-cols-12 mt-4 border-b border-gray-300'>
                        <div className='col-span-5 text-sm font-bold text-gray-700 tracking-tight pb-2'>Product</div>
                        <div className='col-span-2 text-sm font-bold text-gray-700 tracking-tight pb-2'>Price</div>
                        <div className='col-span-2 text-sm font-bold text-gray-700 tracking-tight pb-2'>Quantity</div>
                        <div className='col-span-2 text-sm font-bold text-gray-700 tracking-tight pb-2'>Subtotal</div>
                        <div className='text-sm font-bold text-gray-700 tracking-tight pb-2'></div>
                    </div>
                    <div className='grid grid-cols-12 mt-4 items-center'>
                        <div className='col-span-5 text-gray-700 tracking-tight pb-2'>
                            <div className='flex items-center'>
                                <Image src='/images/choco.webp' height={120} width={90}/>
                                <div className='ml-6'>Choco Cookie Frappe</div>
                            </div>
                        </div>
                        <div className='col-span-2 text-gray-700 tracking-tight pb-2'>$4.99</div>
                        <div className='col-span-2 text-gray-700 tracking-tight pb-2'>Quantity</div>
                        <div className='col-span-2 text-red-600 tracking-tight pb-2'>$4.99</div>
                        <div className='text-sm font-bold text-gray-700 tracking-tight pb-2'></div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-x-6 mt-16 items-start'>
                    <div className='border border-gray-300 p-6'>
                        <h2 className='text-2xl font-bold tracking-wider capitalize border-b border-gray-300 pb-2'>Have
                            a promotional code?</h2>
                        <div className='mt-4 grid grid-cols-5 gap-x-6'>
                            <div className='col-span-3'>
                                <label htmlFor=""
                                       className='text-gray-600 font-semibold tracking-wide text-sm block'>Coupon</label>
                                <input type="text"
                                       className='border-b border-gray-300 w-full focus:border-red-600 transition-colors duration-300 focus:outline-none'/>
                            </div>
                            <button
                                className='w-full col-span-2 rounded-full tracking-wide text-white font-semibold uppercase bg-red-600 hover:bg-red-700 transition-colors duration-300'>Apply
                                coupon
                            </button>
                        </div>
                    </div>
                    <div className='border border-gray-300 p-6'>
                        <h2 className='text-2xl font-bold tracking-wider capitalize border-b border-gray-300 pb-2'>Cart
                            Totals</h2>
                        <div className='flex justify-between mt-4 pb-2 border-b border-gray-300 items-center'>
                            <div className='text-sm font-bold text-gray-700 tracking-tight'>Subtotal</div>
                            <div className='text-gray-700 tracking-tight'>$4.99</div>
                        </div>
                        <div className='flex justify-between mt-4 items-center'>
                            <div className='text-sm font-bold text-gray-700 tracking-tight'>Total</div>
                            <div className='text-gray-700 tracking-tight text-red-600 font-semibold'>$4.99</div>
                        </div>
                        <div className='flex flex-col items-end mt-4'>
                            <button
                                className='rounded-full px-6 py-2 tracking-wide text-white font-semibold uppercase bg-red-600 hover:bg-red-700 transition-colors duration-300'>Update
                                Cart
                            </button>
                            <button
                                className='rounded-full px-6 py-2 mt-2 tracking-wide text-white font-semibold uppercase bg-red-600 hover:bg-red-700 transition-colors duration-300'>Proceed
                                to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Cart;