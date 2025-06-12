
import Banner from "./components/sections/home/Banner";
import Childhood from "./components/sections/home/Childhood";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip font-[family-name:var(--font-geist-sans)]">
      <Banner />
      <Childhood />
    </div>
  );
}
