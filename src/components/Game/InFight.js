import { useState, useEffect } from "react";

export default function InFight({ setInFight }) {
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            setInFight(false);
        }
    }, [timeLeft, setInFight]);

    return (
        <div>
            <div>fighting: {timeLeft} seconds left</div>
        </div>
    );
}
