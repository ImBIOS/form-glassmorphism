import "./App.css";

import Tilt from "react-parallax-tilt";

function App() {
	return (
		<div className="App h-screen w-screen relative overflow-hidden bg-gradient-to-r from-purple-900 to-pink-600 flex justify-center items-center">
			<Tilt
				tiltReverse={true}
				transitionSpeed={500}
				glareEnable={true}
				glareReverse={true}
				glareMaxOpacity="0.15"
			>
				<div className="card-transparent">
					<p className="card-title">Log In</p>
					<div className="w-max m-auto flex flex-col">
						<input
							type="text"
							className="bg-transparent border-opacity-0 focus:outline-none text-white mt-5"
							placeholder="username"
						/>
						<input
							type="password"
							className="bg-transparent border-opacity-0 focus:outline-none text-white mt-5"
							placeholder="password"
						/>
					</div>
					<div className="w-max mx-auto md:mt-8 mt-5 pb-10">
						<button className="button">Login</button>
					</div>
				</div>
			</Tilt>
		</div>
	);
}

export default App;
