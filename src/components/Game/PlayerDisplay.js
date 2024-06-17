import playerPicture from '../../assets/stickman.png';
import { useContext } from "react";
import { PlayerContext } from "./PlayerContext";



export default function PlayerDisplay(){
    const {player} = useContext(PlayerContext);

    return(
        <div className="player">
            <div className='class-name'>player class: {player.playerClass}</div>
            <div className="player-abilities">
                <ul>
                    {player.abilities.map((ability, index) => {
                        return <li key={index}>{ability}</li>;
                    })}
                </ul>    
            </div> 
            <div className="player-picture">
                <img src={playerPicture} alt="Player" />
            </div>
        </div>
    );
}