import {createRoot} from 'react-dom/client';
import LearnClassComponent from './components/LearnClassComponent';
import Counter from './components/Counter';
import FizzBuzzCounter from './components/FizzBuzzCounter';
import LearnControlledComponents from './components/LearnControlledComponent';

const root = createRoot(document.getElementById('root'));
root.render(
    <div>
       <LearnControlledComponents/>
    </div>)