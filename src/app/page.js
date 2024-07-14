import Image from "next/image";

export default function Home() {
  return (
<main className="min-h-screen">
  <nav className="flex items-center justify-between bg-beige h-20 pr-20 font-sans">
    <div className="font-bold text-xl flex flex-row items-center">
    <Image src="/logo2.png" alt="ChangeSpark Foundation logo" width={100} height={100} className="h-min w-40 pl-5 bg-transparent"/>
    <h1 className="text-purp">ChangeSpark<span className="text-gren"> Foundation</span></h1></div>
    <ul className="flex space-x-20">
      <li className="list-none">
        <a
          href="/"
          className="text-base font-medium text-gray-900 capitalize hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-black hover:after:m-auto"
        >
          HOME
        </a>
      </li>
      <li className="list-none">
        <a
          href="#about"
          className="text-base font-medium text-gray-900 capitalize hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-black hover:after:m-auto"
        >
          ABOUT US
        </a>
      </li>
      <li className="list-none">
        <a
          href="#team"
          className="text-base font-medium text-gray-900 capitalize hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-black hover:after:m-auto"
        >
          TEAM
        </a>
      </li>
      <li className="list-none">
        <a
          href="#projects"
          className="text-base font-medium text-gray-900 capitalize hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-black hover:after:m-auto"
        >
          PROJECTS
        </a>
      </li>
      <li className="list-none">
        <a
          href="#join-us"
          className="text-base font-medium text-gray-900 capitalize hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-black hover:after:m-auto"
        >
          JOIN US
        </a>
      </li>
      <li className="list-none">
        <a
          href="#donate"
          className="text-base font-medium text-gray-900 capitalize hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-black hover:after:m-auto"
        >
          DONATE
        </a>
      </li>
    </ul>
  </nav>
</main>

  );
}
