"use client";

import * as Popover from "@radix-ui/react-popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NavLink } from "../../components/header/components/nav-link";
import { Button } from "../../components/button/button";

const publicLinks = [
  { href: "/propostas", name: "Sobre" },
  { href: "/areas", name: "Áreas" },
  { href: "/relatos", name: "Relatos" },
  { href: "/duvidas", name: "Dúvidas" },
  { href: "/contato", name: "Contato" },
];

export function PopoverComponent() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button aria-label="Abrir menu">
          <FontAwesomeIcon
            icon={faEllipsisV}
            size="lg"
            className={`transition-transform duration-300 ease-in-out ${
              open ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          sideOffset={8}
          align="end"
          className="z-50 rounded-md bg-white p-4 shadow-md w-56 space-y-4"
        >
          <nav className="flex flex-col gap-2">
            {publicLinks.map((link) => {
              const itemActive = pathname === link.href;
              return (
                <NavLink
                  key={link.name}
                  link={link}
                  itemActive={itemActive}
                />
              );
            })}
          </nav>

          <div className="pt-2 border-t">
            <Button
              className="w-full rounded-sm"
              text="Entre em contato"
              phone="5521987291341"
              message="Olá! vim pelo site :)"
            />
          </div>

          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
