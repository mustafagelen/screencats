"use client";

import Link from "next/link";
import Image from "next/image";

import { authClient } from "@/lib/auth-client";

const SignIn = () => {
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/screen.svg"
            alt="SnapChat Logo"
            width={96}
            height={48}
          />
          <h1>Screen Cat</h1>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="Star Icon"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
              Screen Cat ekran kaydını kolaylaştırır. Hızlı anlatımlardan tam
              sunumlara kadar her şeyde, hızlı, akıcı ve saniyeler içinde
              paylaşılabilir.
            </p>
            <article>
              <Image
                src="/assets/images/dummy.jpg"
                alt="Jason"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h2>Mustafa GELEN</h2>
                <p>Ürün Tasarımcısı</p>
              </div>
            </article>
          </section>
        </div>
        <p>© ScreenCat 2025</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/screen.svg"
              alt="SnapChat Logo"
              width={96}
              height={40}
            />
            <h1>Screen Cat</h1>
          </Link>
          <p>
            Anında ilk <span>Ekran Kaydını</span> oluştur ve paylaş!
            Arkadaşlarını davet et ve premium imkanlardan yararlan.
          </p>

          <button
          onClick={async () => {
            return await authClient.signIn.social({
              provider: "google",
            });
          }}
          >
            <Image
              src="/assets/icons/google.svg"
              alt="Google Icon"
              width={22}
              height={22}
            />
            <span>Google ile kaydolun</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default SignIn;
