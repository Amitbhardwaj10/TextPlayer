// ServiceCard.jsx
import React from "react";
import stringServices from "../services.json";
import Button from "../subComponents/Button";

function ServiceCard() {
	return (
		<>
			<section className="w-[82vw] mx-auto flex justify-center flex-wrap my-10 gap-8">
				{stringServices.services.map((service, index) => (
					<Button
						service={service}
						key={index}
					/>
				))}
			</section>
		</>
	);
}

export default ServiceCard;
