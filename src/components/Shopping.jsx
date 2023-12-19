import React from "react";
import { usePizzaContext } from "../context/PizzaContextProv";

const Shopping = () => {
    const { cart, removeItemFromCart, addCart } = usePizzaContext();
    const { cartTotal } = usePizzaContext();

    return (
        <>
            {cart?.map((purchased) => (
                <div className="d-flex justify-content-between bg-dark text-light p-3 mb-3 border border-2 border-warning" key={purchased.id}>
                    <div className="shoppingImg d-flex">
                        <img src={purchased.img} alt="purchased-pizza" className="img-fluid rounded" />
                        <p className="fs-3 ms-3 fs-2 fw-bold d-flex align-items-center text-warning">
                            {purchased.name.charAt(0).toUpperCase() + purchased.name.substr(1).toLowerCase()}
                        </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center flex-column me-5">
                        <div className="countHandler d-flex">
                            <button onClick={() => removeItemFromCart(purchased.id)} className="btn btn-danger">
                                -
                            </button>
                            <input
                                type="number"
                                readOnly
                                value={purchased.quantity}
                                className="form-control text-center pizzaQuantityInput p-0 ms-1 me-1"
                            />
                            <button onClick={() => addCart(purchased)} className="btn btn-primary">
                                +
                            </button>
                        </div>
                        <p className="m-0 fs-3 fw-bold text-success">
                            Valor: ${new Intl.NumberFormat().format(purchased.price * purchased.quantity)}
                        </p>
                    </div>
                </div>
            ))}
            <div className="d-flex flex-column w-25 text-center">
                <div className="bg-dark border border-2 border-warning rounded mb-2 text-light p-3">
                    <h2>Total: ${cartTotal}</h2>
                </div>
                <button type="button" className="btn btn-success">
                    Comprar
                </button>
            </div>
        </>
    );
};

export default Shopping;
