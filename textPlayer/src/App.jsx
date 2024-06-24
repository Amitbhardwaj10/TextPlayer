import Input from "./components/Input";
import ServiceCard from "./components/ServiceCard";
function App() {
	return (
		<>
			<h1 className="text-6xl text-center mt-10 text-teal-600 drop-shadow-[0_5px_8px_rgba(0,3,160)]">
				Text Player
			</h1>
			<h2 className="text-4xl ml-10 text-white underline underline-offset-4 mt-8">
				Text Analaysis
			</h2>
			<Input />
			<h2 className="text-4xl ml-10 text-white underline underline-offset-4 mt-8">
				String Manipulation
			</h2>
			<ServiceCard />;
		</>
	);
}

export default App;
