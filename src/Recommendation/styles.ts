import styled from "styled-components";
import { colors, snippets } from "../styles";


const Styles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7rem 3rem;
  ${'' /* Background */}
  .background {
   ${snippets.absoluteFill}
    background-color: ${colors.black};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    z-index: -1;
    .line {
      height: 4rem;
      border-radius: 50px;
      background-color: red;
      filter: blur(50px);
      transform: rotate(-45deg);
      opacity: 0.5;
    }
  }

  ${'' /* Company */}
  ${snippets.absoluteFill}
  display: flex;
  flex-direction: column;
  z-index: 1000;
  
  #company {
    margin-left: auto;
    text-align: right;
    .identity {
      .name {
        font-weight: 700;
        .full {
          display: flex;
          align-items: center;
          gap: 1rem;
          
          .logo {
            height: 2rem;
          }
        }
        .abbr {
          font-size: 3rem;
        }
      }
    }
    .description {
      font-size: 2rem;
    }
  }

  ${'' /* Projection */}
  #projection {
    margin-top: 5rem;
    .heading {
      margin-bottom: 3rem;
    }
    .targets {
      display: flex;
      align-items: center;
      .target {
        font-size: 2rem;
        display: flex;
        flex-direction: column;
        gap: 5px;
        .type {
          padding: 5px;
          padding-bottom: 2px;
          background-color: ${colors.primary};
          width: fit-content;
          font-size: 1.5rem;
        }
        .value {
          font-size: 3rem;
        }
        &.high {
          .type {
            background-color: #01bf88;
            color: #1f1f1f;
          }
          .value {
            font-size: 4.5rem;
          }
        }
        &.mean {
          .type {
            font-size: 1rem;
          }
          .value {
            font-size: 3rem;
          }
        }
        &.low {
          .type {
            background-color: #e34502;
          }
          .value {
            font-size: 4rem;
          }
        }
        &.current {
          margin-top: 5.5rem;
          margin-right: 1rem;
        }
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
      .chart {
        height: 15rem;
      }
    }
  }

  ${'' /* IBES Recommendation */}
  #ibes {
    margin: 2rem 0;
    h4 {
      font-size: 4rem;
      margin-bottom: 3rem;
    }
    h1 {
      background-color: ${colors.primary};
      width: fit-content;
      font-size: 8rem;
      padding: 30px;
    }
  }

  ${'' /* Slider */}
  #slider {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    gap: 2rem;
    position: relative;
    .option {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      opacity: 0.5;
      .label {
        text-align: center;
        font-size: 2rem;
      }
      .bar {
        margin-top: 1rem;
        height: 2rem;
        width: 100%;
      }
    }
    .pointer {
      position: absolute;
      left: 0;
      z-index: 1;
      height: 4rem;
      width: 5rem;
      top: 90%;
      background-color #d9d9d9;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
  }
`;


export default Styles;