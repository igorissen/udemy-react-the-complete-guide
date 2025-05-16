import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onPlayerNameChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onPlayerNameChange(symbol, playerName);
        }
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    let playerNameElement = <span className="player-name">{playerName}</span>;
    let buttonCaption = 'Edit';

    if (isEditing) {
        playerNameElement = <input type="text" required value={playerName} onChange={handleNameChange} />;
        buttonCaption = 'Save';
    }

    return (
        <li className={isActive ? 'active' : ''}>
            <span className="player">
              {playerNameElement}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonCaption}</button>
        </li>
    );
}
