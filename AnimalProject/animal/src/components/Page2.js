import React from "react";

export const MyComponent2 = () => {

    const carInfo = { name: "Toyota", model: "Camry" };

    return (
        <>
            <h2>I am a { carInfo.name } { carInfo.model}!</h2>
        </>
    )
}

export default MyComponent2;