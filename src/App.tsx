import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-black w-full min-h-screen py-2 md:py-6 px-4 md:px-10">
      <Navbar />
      <MainPage />
    </div>
  )
}
