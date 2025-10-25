import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
  return (
    <header className="header">
      <section className="header-container">
        <div className="details">
          <Image
            src={userImg || "/assets/images/dummy.jpg"}
            alt="user"
            width={66}
            height={66}
            className="rounded-full"
          />
          <article>
            <p>{subHeader}</p>
            <h1>{title}</h1>
          </article>
        </div>

        <aside>
           
        </aside>

      </section>
    </header>
  );
};

export default Header;
