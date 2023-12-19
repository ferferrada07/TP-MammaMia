import React from "react";

export const Welcome = () => {
	return (
		<div className="welcomeBg text-light d-flex justify-content-center align-items-center">
			<div className="welcome-content d-flex flex-column text-center fw-bold pt-4 w-75">
				<h1 className="fs-1">¡Tenemos las mejores pizzas que podras encontrar!</h1>
				<p className="fs-4">
                        Descubre una variedad de sabores deliciosos y ingredientes frescos en cada bocado.
                </p>
			</div>
		</div>
	);
};