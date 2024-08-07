import Image from "next/image";
import Nav from "@/components/Nav";
import AboutUs from "@/components/Aboutus";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav  />

      <div className="flex flex-col md:flex-row items-stretch p-8  bg-white h-screen">
        <div className="md:flex-shrink-0 mb-8 md:mb-0 md:mr-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-purple-900 dark:font-semibold  pt-32  mb-4 md:pl-24">
            Changespark Foundation
          </h1>
          <p className="text-xl text-green-700 dark:font-semibold pb-10 md:pl-24">
            EMPOWERING POWER IGNITING CHANGE
          </p>
        </div>
        <div className="md:flex-grow flex items-center justify-center">
          <div className="aspect-w-16 aspect-h-9 w-full max-w-3xl">
            <iframe className="md:w-[800px] md:h-112 h-100 w-[90vw]"
              width="800"
              height="450"
              src="https://www.youtube.com/embed/Sqqj_14wBxU?si=gvouxtwpb9pqEbyc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
        <AboutUs />
        <Footer />
      
    </main>
  );
}
