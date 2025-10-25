import Link from "next/link";
import Image from "next/image";

const user = {};

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/screen.svg"
            alt="Logo"
            width={56}
            height={56}
          />
          <h1>ScreenCat</h1>
        </Link>

        {user && (
          <figure>
            <button>
              <Image
                src="/assets/images/dummy.jpg"
                alt="User"
                width={36}
                height={36}
                className="rounded-full aspect-square"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
