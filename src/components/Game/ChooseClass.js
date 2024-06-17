export default function ChooseClass({setPlayerClass}){
    return(
        <div className="choose-class">
            <button className="wizard" onClick={() => setPlayerClass('wizard')}>wizard</button>
            <button className="fighter" onClick={() => setPlayerClass('fighter')}>fighter</button>
            <button className="tank" onClick={() => setPlayerClass('tank')}>tank</button>
        </div>
    );
}