import "./navbar.css";

type Section = {
  id: string;
  name: string;
};

type NavbarProps = {
  sections: Section[];
};

export default function Navbar({ sections }: NavbarProps) {
  return (
    <nav className="fixed top-0 z-10 m-0 flex min-h-[8vh] w-screen items-center justify-center bg-black bg-opacity-70 px-[2vw] mix-blend-normal sm:justify-start sm:mix-blend-screen">
      {sections.map((section) => {
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="relative m-[1vw] mr-[2em] text-[1.1rem] text-gray-200 sm:text-[1.2em]"
          >
            {section.name}
          </a>
        );
      })}
    </nav>
  );
}
