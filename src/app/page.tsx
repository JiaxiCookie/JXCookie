import Header from "./components/Header";
import { GoogleGeminiEffectDemo } from "./components/Hero";

export default function Home() {
  return (
    <div className="w-full h-screen bg-black text-white overflow-y-scroll overflow-x-hidden snap-y snap-mandatory z-0 
      scrollbar scrollbar-track-green-400/20 scrollbar-thumb-yellow-400/80">
      <Header/>
      <GoogleGeminiEffectDemo />
      <div className = "w-full h-screen">3</div>
    </div>
  );
}


