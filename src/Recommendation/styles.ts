import styled from "styled-components";
import { colors, snippets } from "../styles";


const Styles = styled.div`
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

  ${'' /* Content */}
  ${snippets.absoluteFill}
  display: flex;
  flex-direction: column;
  z-index: 1000;
  padding: 7rem 3rem;
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

  #projection {
    margin-top: 10rem;
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
        }
        .value {
          font-size: 4rem;
        }
        &.high {
          .type {
            background-color: #01bf88;
            color: #1f1f1f;
          }
          .value {
            font-size: 5.7rem;
          }
        }
        &.mean {
          .type {
            font-size: 1rem;
          }
          .value {
            font-size: 4rem;
          }
        }
        &.low {
          .type {
            background-color: #e34502;
          }
          .value {
            font-size: 5.3rem;
          }
        }
        &.current {
          margin-top: 7rem;
          margin-right: 2rem;
        }
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
      .chart {
        height: 20rem;
      }
    }
  }
`;


export default Styles;