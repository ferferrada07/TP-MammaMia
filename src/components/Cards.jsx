import React from "react";
import { usePizzaContext } from "../context/PizzaContextProv";

const formatPrice = (price) => new Intl.NumberFormat().format(price);

export const Cards = ({ pizzas, handleClick, handleAdd }) => {
    const { addCart } = usePizzaContext();

    return (
        <div className="container mt-5">
            <div className="row row-cols-md-2 gap-3">
                {pizzas?.map(({ id, img, name, ingredients, price }) => (
                    <div className="col" key={id}>
                        <div className="card bg-dark text-light border border-2 border-warning shadowCard">
                            <img
                                src={img}
                                className="card-img-top img-fluid rounded-start"
                                alt={name}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-warning fw-bold fs-3 text-center">
                                    {name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()}
                                </h5>
                                <p className="card-text text-warning fw-bold fs-5">Ingredientes</p>
                                <ul className="card-text">
                                    {ingredients?.map((i) => (
                                        <li key={i} className="bi bi-play-fill">
                                            {i.charAt(0).toUpperCase() + i.substr(1).toLowerCase()}
                                        </li>
                                    ))}
                                </ul>
                                <p className="card-text text-center fs-4 fw-bold">
                                    Valor: ${formatPrice(price)}
                                </p>
                                <div className="d-flex justify-content-between">
                                    <button
                                        type="button"
                                        className="btn btn-warning fw-bold text-dark btn-sm"
                                        onClick={() => handleClick(id)}
                                    >
                                        Ver más
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-success fw-bold text-light btn-sm"
                                        onClick={() => addCart({ id, img, name, ingredients, price })}
                                    >
                                        Agregar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
