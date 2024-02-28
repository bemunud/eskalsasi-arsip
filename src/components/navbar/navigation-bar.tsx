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
import { ListItem, ListItemGovernence } from "./script-nav-bar";

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className="hidden lg:inline">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium">
            Governance
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[800px] ">
              {GOVERNANCE.map((component) => (
                <ListItemGovernence
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItemGovernence>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium">
            Audit
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
              {AUDIT.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavTriggerLink className="font-medium">
              Berita{" "}
            </NavTriggerLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavTriggerLink className="font-medium">Publikasi</NavTriggerLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium">
            Tentang
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[700px] p-4 lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 bg-slate-600 rounded-md mr-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image src="./logo-brand.svg" alt="N" className="h-12 w-12" width={32} height={32} priority/>
                    <div className="text-base font-medium">
                      Kabinet Eskalasi Cita Udayana
                    </div>
                    <p className="text-xs leading-tight text-muted-foreground">
                      Sekilas tentang kabinet kami
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {TENTANG.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
