import { Outlet } from "react-router-dom";
import Nav from "../sahred/Nav";
import Footer from "../sahred/Footer";

const Layout = () => {
    return (
        <div>


            <Nav></Nav>

            <Outlet></Outlet>

            <Footer></Footer>

        </div>
    );
};

export default Layout;