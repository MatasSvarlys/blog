import PlayerDisplay from "./PlayerDisplay";

export default function Idle({setInFight}){
    

    return(
        <>
            <div>in indle state</div>
            <button onClick={() => setInFight(true)}>Fight</button>
            <PlayerDisplay />
            <div className="shop"></div>
        </>
    );
}