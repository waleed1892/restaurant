import {Navbar} from "../components/navbar";
import {Footer} from "../components/footer";

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <header className='bg-yellow-400 py-24 px-32'>
                <h1 className='font-bold text-6xl text-center'>Let us know we can help.</h1>
            </header>
            <div className='py-24 px-32'>
                <div className='grid grid-cols-3 gap-x-6 transform -translate-y-40'>
                    <div className='bg-white rounded-xl p-8 text-center shadow-lg border border-gray-200'>
                        <div className='text-2xl font-semibold tracking-wider'>Sales</div>
                        <div className='mt-2 text-sm text-gray-500 font-semibold'>We'd love to talk about how we can
                            work together.
                        </div>
                        <button
                            className='font-bold text-sm py-2 px-12 mt-6 rounded-full uppercase bg-red-600 text-white'>Contact
                            Sales
                        </button>
                    </div>
                    <div className='bg-white rounded-xl p-8 text-center shadow-lg border border-gray-200'>
                        <div className='text-2xl font-semibold tracking-wider'>Technical Support</div>
                        <div className='mt-2 text-sm text-gray-500 font-semibold'>We're here to help with any questions
                            you may have.
                        </div>
                        <button
                            className='font-bold text-sm py-2 px-12 mt-6 rounded-full uppercase bg-red-600 text-white'>Contact
                            Team
                        </button>
                    </div>
                    <div className='bg-white rounded-xl p-8 text-center shadow-lg border border-gray-200'>
                        <div className='text-2xl font-semibold tracking-wider'>Press & Media</div>
                        <div className='mt-2 text-sm text-gray-500 font-semibold'>Get the latest Noah Takeaway news and
                            brand assets.
                        </div>
                        <button
                            className='font-bold text-sm py-2 px-12 mt-6 rounded-full uppercase bg-red-600 text-white'>Press
                            Kit
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-4 mt-16'>
                    <div className='text-center'>
                        <div
                            className='w-36 h-36 mx-auto flex justify-center items-center rounded-full bg-yellow-400'></div>
                        <div className='font-semibold text-red-600 text-lg tracking-wider mt-4'>Sales</div>
                        <div className='mt-4 text-sm'>
                            <div className='font-bold text-gray-800'>+92 321 1300786</div>
                            <div className='font-bold text-gray-800'>+92 321 1300786</div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div
                            className='w-36 h-36 mx-auto flex justify-center items-center rounded-full bg-red-600'></div>
                        <div className='font-semibold text-red-600 text-lg tracking-wider mt-4'>Email</div>
                        <div className='mt-4'>
                            <div className='font-bold text-sm text-gray-800'>noreply@noah.com</div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div
                            className='w-36 h-36 mx-auto flex justify-center items-center rounded-full bg-black'></div>
                        <div className='font-semibold text-red-600 text-lg tracking-wider mt-4'>Address</div>
                        <div className='mt-4'>
                            <div className='font-bold text-gray-800 text-sm'>Kevin Perry</div>
                            <div className='font-bold text-gray-800 text-sm'>+92 321 1300786</div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div
                            className='w-36 h-36 mx-auto flex justify-center items-center rounded-full bg-yellow-400'></div>
                        <div className='font-semibold text-red-600 text-lg tracking-wider mt-4'>Agent</div>
                        <div className='mt-4'>
                            <div className='font-bold text-gray-800 text-sm'>Level 13,2 Elizabeth St.</div>
                            <div className='font-bold text-gray-800 text-sm'>Melbourne, Victoria 3000</div>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg rounded-sm shadow-lg border border-gray-100 px-10 py-8 mt-16'>
                    <h2 className='text-4xl text-center font-bold tracking-wider'>Fill the Form</h2>
                    <div className='text-center text-xl'>Leave a message</div>
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
            </div>
            <Footer/>
        </div>
    )
}

export default Contact