import { Outlet } from "react-router-dom";
import Nav from "../Conponents/Nav";
import Footer from "../Conponents/Footer";

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;