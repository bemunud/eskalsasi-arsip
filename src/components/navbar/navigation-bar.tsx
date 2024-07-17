"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavTriggerLink } from "../ui/rehype";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { GOVERNANCE, AUDIT, TENTANG } from "@/scripts";
import { ListItem } from "./script-nav-bar";

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className="hidden lg:inline">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium">
            Governance
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[800px]">
              {GOVERNANCE.map((component) => (
                <li key={component.title}>
                  <Link
                    href={`${component.href}`}
                    className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md bg-white p-4 leading-none no-underline outline-none transition-colors hover:bg-stone-200"
                  >
                    <Image
                      src={`${component.icon}`}
                      alt="N"
                      width={32}
                      height={32}
                      className="w-7 py-2"
                      priority
                    />
                    <div className="text-sm font-semibold leading-none">
                      {component.title}
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      {component.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium">
            Audit
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
              {AUDIT.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  target={component.target}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavTriggerLink className="font-medium">
              Informasi Terkini
            </NavTriggerLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium">
            Tentang
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[700px] p-4 lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 mr-3 rounded-md bg-slate-300">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-3 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src="/logo-brand.svg"
                      alt="N"
                      className="h-12 w-12"
                      width={32}
                      height={32}
                      priority
                    />
                    <div className="text-base font-medium">
                      Tentang Kabinet{" "}
                    </div>
                    <p className="text-muted-foreground text-xs leading-tight">
                      Sekilas tentang kabinet Eskalasi Cita Udayana
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {TENTANG.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
