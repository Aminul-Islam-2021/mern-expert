import React, { useState } from "react";

const UseState = () => {
    const [value, setValue] = useState("Karim");
    const [quantity, setQuantity] = useState(0);
    const increment = () => {
        setQuantity((pre) => pre + 1);
    };
    const decrement = () => {
        setQuantity((pre) => pre - 1);
    };

    const changeName = () => {
        setValue(" Aminul Islam");
    };

    return (
        <div>
            <h2> UseState</h2>
            <h2 className=" border p-1 mx-24 text-lg font-semibold my-4">{value}</h2>
            <button className=" border p-2 font-semibold" onClick={changeName}>
                Change Name
            </button>
            <div className=" p-4 space-x-4">
                <button onClick={decrement}>Decrement</button>
                <span>{quantity}</span>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
};

export default UseState;
