import React from 'react';

function App(props) {
    let numberArray = [1, 2, 3];

    function transformToObjects(numberArray) {
        return numberArray.map(number => {
            return {val: number}
        });
    }

    console.log(transformToObjects(numberArray))
    // 0 : {val: 1}
    // 1 : {val: 2}
    // 2 : {val: 3}

    return (
        <div></div>)
}

export default App;