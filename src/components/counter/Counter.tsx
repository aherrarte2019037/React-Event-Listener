import { useState } from "react";
import ButtonCounter from "./ButtonCounter";

interface CounterProps {
    initialValue?: number,
}

function Counter({ initialValue = 0 }: CounterProps) {
    const [counter, setCounter] = useState(initialValue);

    const incrementCounter = () => setCounter(counter + 1);
    const resetCounter = () => setCounter(initialValue);

    return (
        <>
            <div className="flex justify-center items-center aspect-square p-5 rounded-xl border-4 border-white">
                <h1 className="text-6xl font-bold text-white">{counter}</h1>
            </div>
            <ButtonCounter onClick={incrementCounter} label="Click Me" primary={true} />
            <ButtonCounter onClick={resetCounter} label="Reset Counter" />
        </>
    );
}

export default Counter;