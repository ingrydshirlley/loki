import './App.css';
import background from './back.png'
import capa from './capa.png'
import { IoMdTime } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

function App() {
  return (
    <div className="app">
      <img src={background} alt="" />
      <div className='container-texts'>
        <div className="top">
          <h3>ESTÁ DISPONÍVEL AGORA</h3>
          <h1>LOKI</h1>
        </div>

        <div className="bottom">
          <div className="image">
            <img src={capa} alt="" />
          </div>

          <div className="box-texts">
            <span>
              Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retoma
              seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de
              “Vingadores: Endgame”.
            </span>

            <div className="details">
              <div className="time"><IoMdTime />51min</div>
              <div className="stars"><FaStar className="star-icon"/> <FaStar className="star-icon"/> <FaStar className="star-icon"/> <FaStar className="star-icon"/> <FaStar className="star-icon2"/></div>
              <div className="year">2021</div>
            </div>

            <div className="buttons">
              <button>ASSISTIR AGORA</button>
              <button id='btn'>VER O TRAILER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
