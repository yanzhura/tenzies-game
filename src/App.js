import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import Die from './comnponents/Die';
import Header from './comnponents/Header';
import { getNewDice, generateNewDie } from './utils';

function App() {
    const [dice, setDice] = useState(getNewDice());
    const [tenzies, setTenzies] = useState(false);

    useEffect(() => {
        checkIsFinished();
    }, [dice]);

    const checkIsFinished = () => {
        let isAllHeld = dice.every(die => die.isHeld);
        let isAllSameValue = dice.every(die => dice[0].value === die.value);
        if (isAllHeld && isAllSameValue) {
            console.log('Вы победили!');
            setTenzies(true);
        }
    };

    const diceElements = dice.map(item => (
        <Die
            key={item.id}
            value={item.value}
            isHeld={item.isHeld}
            holdDice={() => holdDice(item.id)}
        />
    ));

    const roll = () => {
        if (tenzies) {
            setTenzies(false);
            setDice(getNewDice());
        } else {
            setDice(prevDice =>
                prevDice.map(die => (die.isHeld ? die : generateNewDie()))
            );
        }
    };

    const holdDice = id => {
        setDice(prevDice =>
            prevDice.map(die =>
                id === die.id ? { ...die, isHeld: !die.isHeld } : die
            )
        );
    };

    const buttonStyle = tenzies
        ? 'roll-button roll-button--reset'
        : 'roll-button';

    return (
        <main className="main">
            {tenzies && <Confetti />}
            <div className="game">
                <Header />
                <div className="dice">{diceElements}</div>
                <button className={buttonStyle} onClick={roll}>
                    {tenzies ? 'New game' : 'Roll'}
                </button>
            </div>
        </main>
    );
}

export default App;
