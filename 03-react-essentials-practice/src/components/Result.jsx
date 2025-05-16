import { formatter } from '../util/investment.js';

export default function Result({ result }) {
    console.log(result);
    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {result.map(({year, interest, valueEndOfYear, totalAmountInvested, totalInterest}) => (
                <tr key={year}>
                    <td>{year}</td>
                    <td>{formatter.format(valueEndOfYear)}</td>
                    <td>{formatter.format(interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
