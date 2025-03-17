import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { DiscordIcon, GithubIcon, Settings } from "lucide-react";
import React from "react";

export default function SectionHome(): JSX.Element {
  // Navigation menu items
  const navItems = [
    { label: "About", href: "#" },
    { label: "Events", href: "#" },
    { label: "Study Groups", href: "#" },
    { label: "Membership", href: "#" },
    { label: "Collaborate", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <main className="relative w-full h-screen bg-[#bcb4ff] overflow-hidden">
      {/* Background elements */}
      <div className="relative w-full h-full">
        {/* Grid background */}
        <img
          className="absolute w-full h-full inset-0 object-cover"
          alt="Background grid"
          src=""
        />

        {/* Wave overlay */}
        <div className="absolute w-full h-full inset-0 opacity-[0.06] bg-cover bg-center" />

        {/* Logo */}
        <div className="absolute w-[104px] h-[100px] top-[50px] left-[75px] bg-cover bg-center" />

        {/* GitHub icon */}
        <a href="#" className="absolute w-10 h-10 bottom-[65px] right-[53px]">
          <GithubIcon className="w-full h-full text-[#fffeec]" />
        </a>

        {/* Settings icon */}
        <button className="absolute w-10 h-10 top-[83px] right-[44px]">
          <Settings className="w-full h-full text-[#fffeec]" />
        </button>

        {/* Navigation */}
        <NavigationMenu className="absolute top-[81px] right-[72px] max-w-none w-[856px]">
          <NavigationMenuList className="w-full h-[43px] bg-[#fffeec] rounded-[50px] px-[25px] py-2 flex justify-between">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink className="font-jithya24-wixstudio-com-inter-regular text-[#bcb4ff] text-center whitespace-nowrap">
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Main content */}
        <div className="absolute w-full top-[314px] left-0">
          <div className="relative">
            {/* Main heading section */}
            <div className="flex flex-col items-center">
              <h2 className="font-['Gloock-Regular',Helvetica] text-5xl text-[#fffeec] text-center tracking-[0] leading-[123.1px]">
                Women in Ethereum Protocol
              </h2>

              <h1 className="font-['Gloock-Regular',Helvetica] text-[140px] text-[#fffeec] text-center tracking-[0] leading-[125px] max-w-[1561px]">
                Empowering Diversity in Ethereum's Future
              </h1>

              <p className="font-['Montserrat-Regular',Helvetica] text-xl text-[#fffeec] text-center tracking-[0] max-w-[1303px] mt-6">
                Women in Ethereum Protocol (WiEP) is a community advancing
                gender diversity in the Ethereum ecosystem. Founded by Avarch,
                WiEP fosters innovation, collaboration, and inclusivity,
                building a decentralized future where every voice matters.
              </p>
            </div>

            {/* Discord button */}
            <div className="flex justify-center mt-8">
              <Button className="flex items-center justify-center gap-0.5 bg-white text-[#bcb4fe] rounded-[300px] h-11 px-[9px] py-[9px]">
                <DiscordIcon className="w-[25px] h-[25px] mr-0.5" />
                <span className="font-jithya24-wixstudio-com-montserrat-regular">
                  Join Discord Server
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
