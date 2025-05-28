import Link from "next/link";
import { tv } from "tailwind-variants";

const navLink = tv({
  slots: {
    itemNotification: "flex items-center gap-4",
    pageNames: "font-02 text-2xs font-medium text-main transition-colors duration-300 hover:text-accent",
    activeBottomBorder: "relative top-4 border-b-2 tablet:top-3",
  },
  variants: {
    itemActive: {
      true: {
        pageNames: "text-main",
        activeBottomBorder: "border-b-primary-500",
      },
      false: {
        activeBottomBorder: "border-b-transparent",
      },
    },
  },
});

interface NavLinkProps {
  link: {
    href: string;
    name: string;
    mobileName?: string;
  };
  itemActive: boolean;
  isMobileView?: boolean;
}

export function NavLink({ link, itemActive, isMobileView }: NavLinkProps) {
  const { itemNotification, pageNames, activeBottomBorder } = navLink();
  return (
    <Link key={link.href} href={link.href}>
      <div className={itemNotification()}>
        <p className={pageNames({ itemActive })}>
          {isMobileView && link.mobileName ? link.mobileName : link.name}
        </p>
      </div>
      <div className={activeBottomBorder({ itemActive })} />
    </Link>
  );
}
