export default function UserInputSolution({ userInput, onUserInputChange }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) => onUserInputChange('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) => onUserInputChange('annualInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) => onUserInputChange('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        min="1"
                        value={userInput.duration}
                        onChange={(event) => onUserInputChange('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}
