import { PlayerContext } from "./PlayerContext";
import { useContext } from "react";
import "../../css/Game/game.css"

export default function ChooseClass(){
    const { setPlayer } = useContext(PlayerContext);

    const setWizardClass = () => {
        setPlayer({
            abilities: ['smack', 'wizard shoot', 'deffend'],
            playerClass: 'wizard'
        });
    };

    const setFighterClass = () => {
        setPlayer({
            abilities: ['smack', 'smack', 'deffend'],
            playerClass: 'fighter'
        });
    };

    const setTankClass = () => {
        setPlayer({
            abilities: ['smack', 'deffend', 'deffend'],
            playerClass: 'tank'
        });
    };

    return (
        <div className="choose-class">
            <button className="button class-button" onClick={setWizardClass}>wizard</button>
            <button className="button class-button" onClick={setFighterClass}>fighter</button>
            <button className="button class-button" onClick={setTankClass}>tank</button>
        </div>
    );
}