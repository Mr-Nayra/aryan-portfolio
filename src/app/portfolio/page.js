import Footer from "@/components/Footer/Footer";
import Portfolio from "@/components/Portfolio/Portfolio";
import SideBar from "@/components/SideBar/SideBar";

export default function Home() {
  return (
    <div className="bg-black flex  justify-center min-w-sreen min-h-screen">
      <div className="flex max-w-[1400px] p-5 gap-5 w-full flex-col lg:flex-row mb-14 lg:mb-0">
        <SideBar />
        <Portfolio />
      </div>
      <Footer heading="Portfolio"></Footer>
    </div>
  );
}
