import { useState } from 'react';
import Result from './components/Result.jsx';
import UserInput from './components/UserInput.jsx';
import { calculateInvestmentResults } from './util/investment.js';

function deriveResult(userInput) {
    return calculateInvestmentResults(userInput);
}

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 15000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const result = deriveResult(userInput);

    function handleUserInputChange(inputIdentifier, newValue) {
        setUserInput(previousUserInput => ({
            ...previousUserInput,
            [inputIdentifier]: +newValue
        }));
    }

    return (
        <>
            <UserInput userInput={userInput} onUserInputChange={handleUserInputChange} />
            <Result result={result} />
        </>
    );
}

export default App;
