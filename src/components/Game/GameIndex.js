import { useState, useContext } from "react";
import ChooseClass from "./ChooseClass";
import Idle from "./Idle";
import InFight from "./InFight";
import { PlayerContext } from "./PlayerContext";
import "../../css/Game/game.css"

export default function GameIndex(){
    const [inFight, setInFight] = useState(false);
    const { player } = useContext(PlayerContext);

    return (
        <div className="game-index">
            <div className="game-screen">
                {player.playerClass === '' ? (  
                    <ChooseClass/>
                ) : (
                    inFight ? (
                        <InFight setInFight={setInFight} />
                    ) : (
                        <Idle setInFight={setInFight} />
                    )
                )}
            </div>
        </div>
    );
}