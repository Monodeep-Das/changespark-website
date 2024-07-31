import Image from "next/image";

export default function Home() {
  const images = [
    { src: "/1.avif", alt: "Education", caption: "Quality Education" },
    { src: "/3.avif", alt: "Children", caption: "Every Child Matters" },
    { src: "/2.avif", alt: "School", caption: "Empowering Schools" },
  ];
  return (
    <main className="bg-background-100 min-h-screen">
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-36">
        <div className="flex-col">
          <h1 className="text-6xl font-heading font-bold text-purple-900 dark:font-semibold mb-4">
            Changespark Foundation
          </h1>
          <p className="text-2xl text-green-700 font-paragraph font-bold px-2">
            EMPOWERING POWER IGNITING CHANGE
          </p>
          <button className="mx-2 mt-7 mb-10 text-2xl font-bold py-2 px-8 font-paragraph text-white bg-background-600">
            Join Us
          </button>
        </div>
        <div>
          <iframe
            className="w-[89vw] h-[49vh] md:w-[40vw]"
            src="https://www.youtube.com/embed/Sqqj_14wBxU?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&si=gvouxtwpb9pqEbyc"
            title="YouTube video player"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <div id="about" className="bg-background-200 min-h-screen p-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold font-heading text-secondary-700 text-center pt-14 mb-6">
            About Us
          </h2>
          <div className="font-paragraph text-lg text-text-700 mb-8 pb-6">
            <p className="mb-4 text-center">
              We are an organization committed to providing a high-quality
              education for every child in India. We believe that every child,
              regardless of their socio-economic status, location or
              circumstances, deserves an opportunity to reach their full
              potential.
            </p>
            <p className="text-center">
              We exist to enable government schools in India to provide quality
              education to every child. We believe that a good
              &apos;quality&apos; education is the foundation of a child&apos;s
              future, and we are dedicated to supporting the government in
              delivering this to all children in India.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between space-x-4 space-y-7 md:space-y-0">
            {images.map((img, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-[330px] h-[300px] relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md shadow-md"
                  />
                </div>
                <p className="mt-4 uppercase font-bold text-xl font-paragraph text-center text-gray-600">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="mx-4 pb-10 grid md:grid-cols-4  md:grid-rows-2 grid-cols-1 grid-rows-4 min-h-screen items-center justify-center">
        <div className="flex flex-col items-center ">
          <h1 className="font-heading text-5xl font-bold text-secondary-700">Vision</h1>
        </div>
        <div className="md:col-span-3">
          <p className="font-paragraph text-lg text-text-700 px-10">
            {" "}
            Changespark Foundation envisions a world where every individual is
            empowered through education and sustainable livelihood development.
            We foresee a future where all people, regardless of their background
            or circumstances, have access to the necessary tools, resources, and
            opportunities to overcome barriers, realize their potential, and
            thrive. Through our dedicated efforts, we aim to build brighter
            tomorrows, fostering communities where individuals are equipped to
            lead fulfilling lives, contribute positively to society, and drive
            transformative change.
          </p>
        </div>
        <div className="flex flex-col  md:col-start-4 md:row-start-2 items-center ">
          <h1 className="font-heading text-5xl font-bold text-secondary-700">Mission</h1>
        </div>
        <div className="md:col-span-3 md:col-start-1 md:row-start-2">
          <p className="font-paragraph text-lg text-text-700 px-10 pb-8 md:pb-0">
            {" "}
            Changespark Foundation is dedicated to igniting sustainable progress
            in rural communities by unlocking individual potential through
            transformative education and fostering a vibrant culture of
            entrepreneurship. Our mission is to empower individuals with the
            knowledge, skills, and resources needed to overcome challenges,
            innovate, and create lasting positive change. By providing access to
            quality education and encouraging entrepreneurial spirit, we aim to
            build self-reliant communities where every person has the
            opportunity to achieve their dreams, improve their quality of life,
            and contribute to the overall development of their region. Through
            our comprehensive programs and initiatives, we strive to create an
            inclusive environment where growth, learning, and prosperity are
            within everyone&apos;s reach.
          </p>
        </div>
      </section>
    </main>
  );
}
