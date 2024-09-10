import { useState } from 'react';
import './App.scss';

import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';

const imgArr = [img1, img2, img3, img4, img5];

function App() {
  const [count, setCount] = useState(1);

  const onNewSlideClick = () => {
    if (count === 5) {
      setCount(1);
    } else {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      <div className='videoBox'>

        <div className='slide-conteiner'>

          <div className='slide'>

            <p>Слайд {count}</p>
            <img src={imgArr[count - 1]} alt="foto" />

          </div>

          <button onClick={onNewSlideClick}>Жми меня!</button>
        </div>

        <div className='infoConteiner'>

          <div className='avtor'>

            <p>Авторские права: Губкин Руслан (група 2541 г.Николаев Николаевская область)</p>
            <p>Прыжок время выполнения 900 милисекунд</p>
            <p>Растояние 330см</p>

          </div>

          <div className='vevePort'>

            {count === 1 && (
              <div className='information1'>
                <p>Подготовка к прыжку (задняя часть пятки в фокусе)</p>
              </div>
            )}

            {count === 2 && (
              <div className='information1'>
                <p>Прыжок дефолтное значение 0</p>
                <p>С єтого момента наченается счёт времени</p>
              </div>
            )}

            {count === 3 && (
              <div className='information1'>
                <p>Скорость первого участка: 1.11м / 0.3c = 3.7 м/с </p>
              </div>
            )}

            {count === 4 && (
              <div className='information1'>
                <p>Скорость второго участка: 2.21м / 0.3c = 7.3 м/с </p>
              </div>
            )}

            {count === 5 && (
              <div className='information1'>
                <p>Скорость третего участка: 3.3м / 0.3c = 11 м/с </p>
                <p>Средняя: (3.7 + 7.3 + 11) / 3 = 7.33м/c</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
