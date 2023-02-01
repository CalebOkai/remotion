import {
	AbsoluteFill, Composition, useCurrentFrame, interpolate, useVideoConfig,
	spring,
} from "remotion";
// import MyComposition from "./Composition";
import GlobalStyles from "./styles/GlobalStyles";
// import { HelloWorld } from "./HelloWorld";
import { Logo } from "./HelloWorld/Logo";
import Recommendation from "./Recommendation";
import "./styles/fonts.css";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<GlobalStyles />
			<Composition
				id="Recommendation"
				component={Recommendation}
				fps={30}
				durationInFrames={90}
				width={1080}
				height={1920}
			/>
			{/* <Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					titleText: "Welcome to Remotion",
					titleColor: "black",
				}}
			/> */}
			{/* Mount any React component to make it show up in the sidebar and work on it individually! */}
			{/* <Composition
				id="OnlyLogo"
				component={Logo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>

			<Composition
				id="MyComposition"
				durationInFrames={150}
				fps={30}
				width={1080}
				height={1920}
				component={MyCompositionOld}
			/> */}
		</>
	);
};

const MyCompositionOld = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const scale = spring({
		fps,
		from: 0,
		to: 1,
		frame
	});
	return (
		<span
			style={{
				color: "RED",
				marginLeft: 10,
				marginRight: 10,
				transform: `scale(${scale})`,
				display: `inline-block`,
			}}
		>
			Welcome to My Blog
		</span>
	)
}