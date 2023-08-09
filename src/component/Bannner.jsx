

import Lottie from "lottie-react"

import anime from "../../public/animation_ll4370it.json"



const Bannner = () => {
    return (
        <div className="w-full h-screen  ">

            <div className=" w-full h-screen flex  px-20  justify-center items-center">
                {/* here is content section */}
                <div className="w-1/2 ">

                    <h1 className="text-5xl font-bold text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisici.</h1>

                    <p className="w-11/12 mt-3 box-border pr-5">Lorem ipsum dolor sit amet consectetur it autem, at sed aliquid reiciendis consectetur iure, tenetur placeat quidem incidunt exercitaadipisicing elit. Rem eveniet odit autem, at sed aliquid reiciendis consectetur iure, tenetur placeat quidem incidunt exercitationem veritatis eligendi eaque temporibus harum ut perspiciatis.</p>



                    <div className=""><button className="py-3 px-6 rounded-md hover:bg-red-400 bg-gray-500 text-white font-bold my-2">Shop Now</button></div>
                </div>



                {/* here is animation  section  */}

                <div className="w-1/2  ">


                    <Lottie animationData={anime} />

                </div>


            </div>

        </div>
    );
};

export default Bannner;