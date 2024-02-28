import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ArrowUpRight } from "lucide-react";
import { navigationMenuTriggerStyle } from "./navigation-menu";
import { cn } from "@/lib/utils";

export const NavTriggerLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}
    {""}
    <ArrowUpRight
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-45"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavTriggerLink.displayName = NavigationMenuPrimitive.Trigger.displayName;
