import LeftArrow from "../public/images/left-arrow.svg";
import RightArrow from "../public/images/right-arrow.svg";

const SliderHeader = ({title}) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='sm:text-lg text-2xl font-semibold'>{title}</div>
            <div className='flex items-center'>
                <a className='underline text-sm text-gray-700' href="">View All</a>
                <div className='ml-4'>
                                    <span
                                        className='bg-gray-200 w-6 h-6 inline-flex items-center justify-center rounded-full inline-block'>
                                        <img src={LeftArrow} alt=""/>
                                    </span>
                    <span
                        className='bg-gray-200 ml-2 w-6 h-6 inline-flex items-center justify-center rounded-full inline-block'>
                                        <img src={RightArrow} alt=""/>
                                    </span>
                </div>
            </div>
        </div>
    )
}

export default SliderHeader