"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { tv } from "tailwind-variants";
import Link from "next/link";
import { NavLink } from "./components/nav-link";
import { Button } from "../button/button";
import { Container } from "@/common/components/container";
import { PopoverComponent } from "@/common/components/popover";
import { useEffect, useState } from "react";
import classNames from "classnames";

const headerNav = tv({
  slots: {
    headerPrimitive:
      "fixed top-0 left-0 right-0 z-50 flex items-center h-28 transition-colors duration-300 px-20",
    left: "flex flex-1 justify-start items-center",
    center: "flex flex-1 justify-center items-center",
    right: "flex flex-1 justify-end items-center",
    navItems: "hidden items-center gap-8 tablet:flex",
    desktopLogo: "hidden tablet:block",
    mobileLogo: "block tablet:hidden",
  },
});

export function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const {
    headerPrimitive,
    left,
    center,
    right,
    navItems,
    desktopLogo,
    mobileLogo,
  } = headerNav();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const publicLinks = [
    { href: "#sobre", name: "Sobre" },
    { href: "#areas", name: "Áreas" },
    { href: "#relatos", name: "Relatos" },
    { href: "#duvidas", name: "Dúvidas" },
    { href: "#contato", name: "Contato" },
  ];

  return (
    <Container>
      <header
        className={classNames(
          headerPrimitive(),
          scrolled
            ? "backdrop-blur bg-white/60 border-b border-zinc-200 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className={left()}>
          <nav className={navItems()}>
            {publicLinks.map((link) => {
              const itemActive = pathname === link.href;
              return (
                <NavLink key={link.name} link={link} itemActive={itemActive} />
              );
            })}
          </nav>
        </div>

        <div className={center()}>
          <Link href="/">
            <Image
              className={desktopLogo()}
              src="/assets/noBgBlack.png"
              alt="Logo"
              width={200}
              height={200}
            />
            <Image
              className={mobileLogo()}
              src="/assets/logo-preta.png"
              alt="Logo"
              width={75}
              height={130}
            />
          </Link>
        </div>
        <div className={right()}>
          <div className="hidden tablet:block">
            <Button
              className="rounded-sm"
              text="Entre em contato"
              phone="5521987291341"
              message="Olá! vim pelo site :)"
            />
          </div>
          <div className="block tablet:hidden">
            <PopoverComponent />
          </div>
        </div>
      </header>
    </Container>
  );
}
