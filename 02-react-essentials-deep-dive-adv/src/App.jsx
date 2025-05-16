import { useState } from 'react';
import GameBoard from './components/GameBoard.jsx';
import GameOver from './components/GameOver.jsx';
import Log from './components/Log.jsx';
import Player from './components/Player.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
const PLAYERS_DEFAULT = {
    X: 'Player 1',
    O: 'Player 2'
};

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }

    return currentPlayer;
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map(innerArray => [...innerArray])];

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { rowIndex, cellIndex } = square;
        gameBoard[rowIndex][cellIndex] = player;
    }

    return gameBoard;
}

function deriveWinner(gameBoard, players) {
    let winner;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && secondSquareSymbol === thirdSquareSymbol) {
            winner = players[firstSquareSymbol];
        }
    }

    return winner;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const [players, setPlayers] = useState(PLAYERS_DEFAULT);

    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard, players);
    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, cellIndex) {
        setGameTurns(previousGameTurns => {
            const currentPlayer = deriveActivePlayer(previousGameTurns);
            return [
                {
                    square: { rowIndex, cellIndex },
                    player: currentPlayer,
                },
                ...previousGameTurns,
            ];
        });
    }

    function handleRematch() {
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, playerName) {
        setPlayers(previousPlayers => {
            return {
                ...previousPlayers,
                [symbol]: playerName,
            };
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    {Object.keys(PLAYERS_DEFAULT).map(symbol => (
                        <Player
                            initialName={PLAYERS_DEFAULT[symbol]}
                            symbol={symbol}
                            isActive={activePlayer === symbol}
                            onPlayerNameChange={handlePlayerNameChange}/>
                    ))}
                </ol>

                {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
                <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard}/>
            </div>

            <Log turns={gameTurns}/>
        </main>
    );
}

export default App;
