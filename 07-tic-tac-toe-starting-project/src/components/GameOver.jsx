export default function GameOver({ winner, onRematch }) {
    const gameOverState = winner
        ? <p>{winner} won !</p>
        : <p>It's a draw!</p>;

    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {gameOverState}
            <p>
                <button onClick={onRematch}>Rematch!</button>
            </p>
        </div>
    );
}
