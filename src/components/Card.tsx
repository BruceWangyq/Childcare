import { AiFillStar } from 'react-icons/ai';

const Card = () => (
    <div>
        <div className=" w-full  dark:bg-gray-900 py-2 px-6 flex justify-center items-center ">
            <div>
                <div className="max-w-xs h-88 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-3xl border border-gray-400 mb-6 shadow-md">
                    <div>
                    <img
                        className="object-fill max-w-xs"
                        src="/images/avatar-2.png"
                        alt=""
                    />
                    <div className="flex relative">
                    <div>
                        <h4 className="text-gray-800 dark:text-gray-100 font-bold mt-2 ml-4">Zoey Hensley</h4>
                        <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-2 ml-4">7 Years Experience</h4>
                    </div>
                            <div className="w-20 h-10 rounded-full bg-[#FF9A62] text-white flex items-center justify-center mt-2 ml-1">
                                <AiFillStar />4.8
                            </div>
                            </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between text-gray-800">
                            <button className="text-white font-bold hover:bg-indigo-800 bg-[#6369D2] border-solid border-2 border-indigo-800 px-5 py-2 rounded-full text-center mx-auto mb-3">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default Card;
