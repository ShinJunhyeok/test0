import { useState } from 'react';

const Test1 = () => {
    const [color, setColor] = useState('tomato');
    const changeColor1 = () => {
        if (color === 'tomato') {
            setColor('pink');
        } else {
            setColor('tomato');
        }
    };
    const changeColor2 = () => {
        // color === 'tomato' ? setColor('skyblue') : setColor('tomato');
        setColor(color === 'tomato' ? 'skyblue' : 'tomato');
    };
    return (
        <div>
            <div
                style={{
                    width: 400,
                    height: 100,
                    border: '1px solid #000',
                    textAlign: 'center',
                    fontSize: 30,
                    lineHeight: '100px',
                    margin: '20px auto',
                    background: color,
                }}
            >
                컬러 : {color}
            </div>
            <h3>배경색</h3>
            <p>배경색 : tomato - skyblue</p>
            <p style={{ textAlign: 'center' }}>
                <button onClick={changeColor1}>if문</button>
                <button onClick={changeColor2}>삼항연산자</button>
            </p>
        </div>
    );
};

export default Test1;
