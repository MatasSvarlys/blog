import { useState } from "react";
import ChooseClass from "./ChooseClass";
import Idle from "./Idle";
import InFight from "./InFight";

export default function GameIndex(){
    const [inFight, setInFight] = useState(false);
    const [playerClass, setPlayerClass] = useState('');

    return (
        <>
            {playerClass === '' ? (
                <ChooseClass setPlayerClass={setPlayerClass} />
            ) : (
                inFight ? (
                    <InFight setInFight={setInFight} />
                ) : (
                    <Idle setInFight={setInFight} />
                )
            )}
        </>
    );
}