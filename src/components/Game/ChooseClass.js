import { PlayerContext } from "./PlayerContext";
import { useContext } from "react";

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
            <button className="wizard" onClick={setWizardClass}>wizard</button>
            <button className="fighter" onClick={setFighterClass}>fighter</button>
            <button className="tank" onClick={setTankClass}>tank</button>
        </div>
    );
}