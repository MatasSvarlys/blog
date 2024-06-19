import PlayerDisplay from "./PlayerDisplay";
import ShopDisplay from "./ShopDisplay";
import EnemyDisplay from "./EnemyDisplay";
import "../../css/Game/game.css"

export default function Idle({setInFight}){
    return(
        <>
            <button className="button fight-button" onClick={() => setInFight(true)}>Fight</button>
            <div className="top-half">
                <PlayerDisplay />
                <EnemyDisplay enemies={''} />
            </div>
            <ShopDisplay />
        </>
    );
}