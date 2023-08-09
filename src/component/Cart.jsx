import { useEffect, useState } from "react";

const Cart = () => {

    const [data, Setdata] = useState([])

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/mahedihassannir/E_c-Project/main/public/basicp.json')
            .then(res => res.json())
            .then(data => Setdata(data))

    }, [])


    console.log(data);

    return (
        <div className="w-full  px-20">


            <div className="">

                <h1 className="text-2xl text-center my-5 font-bold">Products</h1>

            </div>
            {/* ends */}

            <div className="grid grid-cols-4 gap-5">

                {
                    data.splice(0, 10).map(res => <div key={res.id}>


                        <div className="w-[300px] h-[350px] border-2 rounded">

                            <div className="">
                                <img className="w-full h-[200px]" src={res.image} alt="" />
                            </div>

                            <div className="">

                            </div>


                        </div>

                    </div>)

                }

            </div>




        </div >
    );
};

export default Cart;