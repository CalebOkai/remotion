import {
  Sequence, interpolate, useCurrentFrame, useVideoConfig
} from "remotion";


interface SliderOption {
  label: string;
  color: string;
  active?: boolean;
}
const sliderOptions: SliderOption[] = [
  {
    label: "STRONG SELL",
    color: "#c70000"
  },
  {
    label: "SELL",
    color: "#c70000"
  },
  {
    label: "HOLD",
    color: "#7f7f7f",
    active: true
  },
  {
    label: "BUY",
    color: "#477d2b"
  },
  {
    label: "STRONG BUY",
    color: "#477d2b"
  }
]


const Slider: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const seconds = durationInFrames / fps;
  const ptOpacity = interpolate(frame, [0, 5], [0, 1], {
    extrapolateRight: "clamp"
  });
  const ptTransform = interpolate(frame, [0, 100], [0, 100]);
  return (
    <div id="slider">
      <Sequence from={0}>
        <div
          className="pointer"
          style={{
            opacity: ptOpacity,
            transform: `translateX(${ptTransform}vw)`

          }}
        />
      </Sequence>
      {sliderOptions.map((option, index) =>
        <div className="option" key={index} >
          <div className="label">
            {option.label}
          </div>
          <div
            className="bar"
            style={{ backgroundColor: option.color }}
          />
        </div>
      )}
    </div>
  )
}

export default Slider;