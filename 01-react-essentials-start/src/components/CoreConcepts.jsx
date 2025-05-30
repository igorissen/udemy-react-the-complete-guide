import { CORE_CONCEPTS } from '../data';
import { CoreConcept } from './CoreConcept';

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Time to get started!</h2>
            <ul>
                {CORE_CONCEPTS.map((coreConcept, index) => (<CoreConcept key={index} {...coreConcept} />))}
            </ul>
        </section>
    );
}
