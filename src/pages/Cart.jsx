import React from "react";
import Shopping from "../components/Shopping";

const Cart = () => {
    return (
        <>
            <div className="container mt-5 text-center">
                <h1 className="mb-4">Carrito de Compras</h1>
                <div className="card p-4">
                    <Shopping />
                </div>
            </div>
        </>
    );
};

export default Cart;