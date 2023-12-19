import { NavLink } from "react-router-dom";
import { usePizzaContext } from "../context/PizzaContextProv";

export const Navbar = () => {
    const { cartTotal } = usePizzaContext();

    return (
        <nav className="navbar bg-dark d-flex justify-content-between">
            <NavLink to={"/"} className="navLink">
                <div className="d-flex justify-content-center align-items-center pt-1">
                    <h4>PIZZERIA</h4>
                </div>
            </NavLink>
            <NavLink to={"/cart"} className="navLink">
                <div className="d-flex justify-content-center align-items-center me-3">
                    <i className="bi bi-cart3 fs-3"></i>
                    <h4 className="pt-1 ms-2">Total: $ {cartTotal}</h4>
                </div>
            </NavLink>
        </nav>
    );
};