import React from "react";
import { Cat, Dog } from '../model/Animal';

export const MyComponent2 = () => {

    const dog = new Dog('Sharik', 'Boy', 21.5, 'Labrador')
    const cat = new Cat('Musya', 'Girl', 4.9, 'Cyprus')

    return (
        <>
            <p>{dog.present()}</p>
            <p>{dog.bark()}</p>
            <p>{cat.present()}</p>
            <p>{cat.meow()}</p>
        </>
    )
}

export default MyComponent2;