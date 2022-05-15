
import React from 'react';
import Button from './Button';

function Counter({ setFruitteller, fruitTeller }) {
    return (
        <>
            <Button type="button" disabled={fruitTeller === 0} clickHandler={() => setFruitteller(fruitTeller - 1)}>
                -
            </Button>
            <p>{fruitTeller}</p>
            <Button type="button" clickHandler={() => setFruitteller(fruitTeller + 1)}>
                +
            </Button>
        </>
    );
}

export default Counter;