import PlayerDisplay from "./PlayerDisplay";
import { useState, useEffect } from "react";

export default function Idle({setInFight}){
    
    const [player, setPlayer] = useState({abilities: []});
    useEffect(() => {
        setPlayer({abilities: ['stab', 'stab', 'stab']});
    }, []);

    return(
        <>
            <div>in indle state</div>
            <button onClick={() => setInFight(true)}>Fight</button>
            <PlayerDisplay abilities={player.abilities}/>
            <div className="shop"></div>
        </>
    );
}