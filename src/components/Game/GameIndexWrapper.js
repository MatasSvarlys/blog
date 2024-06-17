import GameIndex from "./GameIndex";
import { PlayerProvider } from "./PlayerContext";
export default function GameIndexWrapper(){
    return (
        <PlayerProvider>
            <GameIndex/>
        </PlayerProvider>
    );
}