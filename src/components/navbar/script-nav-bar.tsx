"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Image from "next/image";

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-200",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
/////
export const ListItemGovernence = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-200",
            className,
          )}
          {...props}
        >
          <Image
            src={"/Exclude.svg"}
            alt="N"
            width={32}
            height={32}
            className="my-3 w-5"
            priority
          />
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItemGovernence.displayName = "ListItemGovernence";
