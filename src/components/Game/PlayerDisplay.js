import playerPicture from '../../assets/stickman.png';

export default function PlayerDisplay({abilities}){
    return(
        <div className="player">
            <div className="player-abilities">
                <ul>
                    {abilities.map((ability, index) => {
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