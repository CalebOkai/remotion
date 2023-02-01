import { Img } from "remotion";
import Styles from "./styles";
import logo from "../assets/svg/intel-white.svg";
import chart from "../assets/svg/chart.svg";
import { colors } from "../styles";
import { randomNumber } from "../utils/numbers";


const lineColors = [
  colors.primary,
  colors.secondary,
  colors.white
]

const Recommendation = () => {
  return (
    <Styles>
      <div className="background">
        {[...Array(6)].map((e: undefined, i: number) =>
          <div
            key={i}
            className="line"
            style={{
              backgroundColor: lineColors[randomNumber(lineColors.length)],
              width: `${randomNumber(100)}rem`
            }}
          />
        )}
      </div>
      <div id="company">
        <div className="identity">
          <div className="name">
            <div className="full">
              <Img src={logo} className="logo" />
              <h3>Intel Corp</h3>
            </div>
            <div className="abbr">INTC.O</div>
          </div>
        </div>
        <div className="description">
          <div className="industry">
            Semiconductors
          </div>
          <div className="yield">
            Dividend Yield: 5.52%
          </div>
        </div>
      </div>

      <div id="projection">
        <div className="heading">
          <h2>52 WEEK</h2>
          <h3>PRICE TARGET</h3>
        </div>
        <div className="targets">
          <div className="target current">
            <div className="type">CURRENT</div>
            <div className="value">26.83</div>
          </div>
          <Img src={chart} className="chart" />
          <ul>
            <div className="target high">
              <div className="type">TARGET HIGH</div>
              <div className="value">72.00</div>
            </div>
            <div className="target mean">
              <div className="type">TARGET MEAN</div>
              <div className="value">31.13</div>
            </div>
            <div className="target low">
              <div className="value">18.00</div>
              <div className="type">TARGET LOW</div>
            </div>
          </ul>
        </div>
      </div>
    </Styles>
  )
}

export default Recommendation