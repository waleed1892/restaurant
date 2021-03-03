import {Navbar} from "../components/navbar";
import {Footer} from "../components/footer";

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <header>
                <h1>Let us know we can help.</h1>
            </header>
            <section>
                <div className='grid grid-cols-3 sm:gap-x-4 gap-x-6 transform -translate-y-40 sm:-translate-y-0'>
                    <div
                        className='bg-white rounded-xl sm:px-2 sm:py-8 p-8 text-center shadow-lg border border-gray-200'>
                        <div className='sm:text-lg text-2xl font-semibold tracking-wider'>Sales</div>
                        <div className='mt-2 text-sm text-gray-500 font-semibold'>We'd love to talk about how we can
                            work together.
                        </div>
                        <button
                            className='font-bold sm:px-6 text-sm py-2 px-12 mt-6 rounded-full uppercase bg-red-600 text-white'>Contact
                            Sales
                        </button>
                    </div>
                    <div
                        className='bg-white rounded-xl sm:px-2 sm:py-8 p-8 text-center shadow-lg border border-gray-200'>
                        <div className='sm:text-lg text-2xl font-semibold tracking-wider'>Technical Support</div>
                        <div className='mt-2 text-sm text-gray-500 font-semibold'>We're here to help with any questions
                            you may have.
                        </div>
                        <button
                            className='font-bold sm:px-6 text-sm py-2 px-12 mt-6 rounded-full uppercase bg-red-600 text-white'>Contact
                            Team
                        </button>
                    </div>
                    <div
                        className='bg-white rounded-xl sm:px-2 sm:py-8 p-8 text-center shadow-lg border border-gray-200'>
                        <div className='sm:text-lg text-2xl font-semibold tracking-wider'>Press & Media</div>
                        <div className='mt-2 text-sm text-gray-500 font-semibold'>Get the latest Noah Takeaway news and
                            brand assets.
                        </div>
                        <button
                            className='font-bold sm:px-6 text-sm py-2 px-12 mt-6 rounded-full uppercase bg-red-600 text-white'>Press
                            Kit
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-4 sm:gap-x-4 mt-16'>
                    <div className='text-center'>
                        <div
                            className='sm:w-32 sm:h-32 w-36 h-36 mx-auto flex justify-center items-center rounded-full bg-yellow-400'></div>
                        <div className='font-semibold sm:text-base text-red-600 text-lg tracking-wider mt-4'>Sales</div>
                        <div className='mt-4 text-sm'>
                            <div className='font-bold sm:text-xs text-gray-800'>+92 321 1300786</div>
                            <div className='font-bold sm:text-xs text-gray-800'>+92 321 1300786</div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div
                            className='sm:w-32 sm:h-32 w-36 h-36 mx-auto flex justify-center items-center rounded-full bg-red-600'></div>
                        <div className='font-semibold sm:text-base text-red-600 text-lg tracking-wider mt-4'>Email</div>
                        <div className='mt-4'>
                            <div className='font-bold text-sm sm:text-xs text-gray-800'>noreply@noah.com</div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div
                            className='sm:w-32 sm:h-32 w-36 h-36 mx-auto flex justify-center items-center rounded-full bg-black'></div>
                        <div className='font-semibold sm:text-base text-red-600 text-lg tracking-wider mt-4'>Address
                        </div>
                        <div className='mt-4'>
                            <div className='font-bold sm:text-xs text-gray-800 text-sm'>Kevin Perry</div>
                            <div className='font-bold sm:text-xs text-gray-800 text-sm'>+92 321 1300786</div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div
                            className='sm:w-32 sm:h-32 w-36 h-36 mx-auto flex justify-center items-center rounded-full bg-yellow-400'></div>
                        <div className='font-semibold sm:text-base text-red-600 text-lg tracking-wider mt-4'>Agent</div>
                        <div className='mt-4'>
                            <div className='font-bold sm:text-xs text-gray-800 text-sm'>Level 13,2 Elizabeth St.</div>
                            <div className='font-bold sm:text-xs text-gray-800 text-sm'>Melbourne, Victoria 3000</div>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg rounded-sm shadow-lg border border-gray-100 px-10 py-8 mt-16'>
                    <h2 className='text-4xl sm:text-2xl text-center font-bold tracking-wider'>Fill the Form</h2>
                    <div className='text-center sm:text-base text-xl'>Leave a message</div>
                    <form action="" className='mt-8'>
                        <div className='grid grid-cols-2 grid-rows-4 gap-x-12 gap-y-8'>
                            <div>
                                <label htmlFor=""
                                       className='text-gray-600 font-semibold tracking-wide text-sm block'>Email</label>
                                <input type="text"
                                       className='border-b border-gray-300 w-full focus:border-red-600 transition-colors duration-300 focus:outline-none'/>
                            </div>
                            <div>
                                <label htmlFor="" className='text-gray-600 font-semibold tracking-wide text-sm block'>First
                                    Name</label>
                                <input type="text"
                                       className='border-b border-gray-300 w-full focus:border-red-600 transition-colors duration-300 focus:outline-none'/>
                            </div>
                            <div>
                                <label htmlFor="" className='text-gray-600 font-semibold tracking-wide text-sm block'>Last
                                    Name</label>
                                <input type="text"
                                       className='border-b border-gray-300 w-full focus:border-red-600 transition-colors duration-300 focus:outline-none'/>
                            </div>
                            <div>
                                <label htmlFor="" className='text-gray-600 font-semibold tracking-wide text-sm block'>Last
                                    Name</label>
                                <input type="text"
                                       className='border-b border-gray-300 w-full focus:border-red-600 transition-colors duration-300 focus:outline-none'/>
                            </div>
                            <div>
                                <label htmlFor=""
                                       className='text-gray-600 font-semibold tracking-wide text-sm block'>Country</label>
                                <input type="text"
                                       className='border-b border-gray-300 w-full focus:border-red-600 transition-colors duration-300 focus:outline-none'/>
                            </div>
                            <div>
                                <label htmlFor="" className='text-gray-600 font-semibold tracking-wide text-sm block'>Organization
                                    Name</label>
                                <input type="text"
                                       className='border-b border-gray-300 w-full focus:border-red-600 transition-colors duration-300 focus:outline-none'/>
                            </div>
                            <div className='col-span-2'>
                                <label htmlFor=""
                                       className='text-gray-600 font-semibold tracking-wide text-sm block'>Message</label>
                                <textarea rows={1}
                                          className='border-b border-gray-300 w-full focus:border-red-600 transition-colors duration-300 focus:outline-none'></textarea>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button
                                className='font-semibold text-lg py-2 px-24 mt-6 rounded-full uppercase bg-red-600 text-white'>Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Contact