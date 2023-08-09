import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="w-full">


            <nav className="   w-full h-20 flex justify-between items-center px-20">

                <Link to="/">
                    <img className="h-16" src="data:image/png;base64,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" alt="" />
                </Link>

                <ul className="flex gap-5">

                    <Link className="text-lg hover:text-red-400 duration-300" >Home</Link>

                    <Link className="text-lg hover:text-red-400 duration-300" to="/about" >About</Link>

                    <Link className="text-lg hover:text-red-400 duration-300" to="/contact" >Contact</Link>

                </ul>

            </nav>


        </div>
    );
};

export default Nav;