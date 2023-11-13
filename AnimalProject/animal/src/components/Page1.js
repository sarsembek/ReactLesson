import React from "react";

export const MyComponent1 = () => {

    const carInfo = { name: "Ford", model: "Mustang" };

    return (
        <>
            <h2>I am a { carInfo.name } { carInfo.model}!</h2>
        </>
    )
}

export default MyComponent1;
