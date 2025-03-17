import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DiscIcon, GithubIcon, Settings, MessageSquare, Twitter, Youtube, ChevronDown, PlusCircle, ChevronRight, BookOpen, Users,
  Github
} from "lucide-react";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Gloock, Montserrat } from "next/font/google";

const gloock = Gloock({
  subsets: ['latin'],
  weight: "400"
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "200"
})

export function Page1() {
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
      <section className="relative w-full h-full bg-[url('/bg1.png')] bg-cover bg-center">
        {/* Background elements */}
        <div className="relative w-full h-full">
          <Image
            className="absolute top-[70px] left-[100px] object-cover h-20 w-20"
            alt="Background grid"
            src="WiEP Logo.png"
            width={48}
            height={48}
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
            <NavigationMenuList className="w-full h-[43px] bg-[#fffeec] rounded-[50px] px-[25px] py-2 flex justify-between gap-4">
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
                <h2 className={`${gloock.className} text-5xl text-[#fffeec] text-center tracking-[0] leading-[123.1px]`}>
                  Women in Ethereum Protocol
                </h2>

                <h1 className={`${gloock.className} text-[140px] text-[#fffeec] text-center tracking-[0] leading-[125px] max-w-[1561px]`}>
                  Empowering Diversity in Ethereum's Future
                </h1>

                <p className={`${montserrat.className} text-xl text-[#fffeec] text-center tracking-[0] max-w-[1303px] mt-6`}>
                  Women in Ethereum Protocol (WiEP) is a community advancing
                  gender diversity in the Ethereum ecosystem. Founded by Avarch,
                  WiEP fosters innovation, collaboration, and inclusivity,
                  building a decentralized future where every voice matters.
                </p>
              </div>

              {/* Discord button */}
              <div className="flex justify-center mt-8">
                <Button className="flex items-center justify-center gap-0.5 bg-[#fffeec] text-[#bcb4fe] rounded-[300px] h-11 px-[9px] py-[9px]">
                  <DiscIcon className="w-[25px] h-[25px] mr-0.5" />
                  <span className="font-jithya24-wixstudio-com-montserrat-regular">
                    Join Discord Server
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}




export function Page2() {
  // Data for the about section
  const aboutText =
    "Women in Ethereum Protocol (WiEP) is a community committed to advancing gender diversity within the Ethereum ecosystem. Initiated by the Ethereum Foundation and Ethereum Cat Herders, the group focuses on driving innovation, fostering collaboration, and ensuring that the Ethereum protocol evolves into a decentralized future where every voice is heard. Our mission is to create an environment where developers of all genders feel valued, inspired, and supported, making diversity the norm rather than the exception in blockchain technology.";

  // Links for the organizations
  const links = [
    { name: "Ethereum Foundation", url: "https://ethereum.foundation/" },
    { name: "Ethereum Cat Herders", url: "https://www.ethcatherders.com/" },
  ];

  return (
    <div className="relative bg-[#fffeec] overflow-hidden">
      {/* Top section with dark background */}
      <section className="relative bg-[#222223] py-12">
        <div className="absolute inset-0 bg-[#fffeec80] opacity-20"></div>

        <div className="container mx-auto px-12">
          {/* Heading */}
          <div className="mb-10">
            <h1 className={`${gloock.className} font-normal text-9xl tracking-[0] leading-[200px] whitespace-nowrap`}>
              <span className="text-[#bcb4ff]">A</span>
              <span className="text-[#fffeec]">bout Us</span>
            </h1>
          </div>

          {/* About text */}
          <div className={`max-w-[1368px] ${montserrat.className} font-normal text-[#fffeec] text-2xl tracking-[0] leading-normal mb-16`}>
            {aboutText.split("Ethereum Foundation").map((part, index) => {
              if (index === 0) return part;
              const remainingText = aboutText.slice(
                part.length + aboutText.indexOf(part),
              );
              const catHerdersIndex = remainingText.indexOf(
                "Ethereum Cat Herders",
              );

              return (
                <React.Fragment key={index}>
                  <a
                    href={links[0].url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-[#fffeec]"
                  >
                    Ethereum Foundation
                  </a>
                  {remainingText.slice(0, catHerdersIndex)}
                  <a
                    href={links[1].url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-[#fffeec]"
                  >
                    Ethereum Cat Herders
                  </a>
                  {remainingText.slice(
                    catHerdersIndex + "Ethereum Cat Herders".length,
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex gap-6">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 h-[39px] w-[140px] bg-[#fffeec] rounded-[300px] text-[#bcb4fe] hover:bg-[#fffeec]/90 hover:text-[#bcb4fe]"
            >
              <BookOpen className="w-[25px] h-[22.95px]" />
              <span className="font-jithya24-wixstudio-com-montserrat-regular">
                Know More
              </span>
            </Button>

            <Button
              variant="default"
              className="flex items-center justify-center gap-2 h-[39px] w-[140px] bg-[#bcb4ff] rounded-[300px] text-[#fffeec] hover:bg-[#bcb4ff]/90"
            >
              <Users className="w-[25px] h-[22.95px]" />
              <span className="font-jithya24-wixstudio-com-montserrat-regular">
                Study Group
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom section with light background */}
      <section className="bg-[#fffeec] py-12 text-6xl">
        <div className="container mx-auto px-12">
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <h2 className={`${gloock.className} text-[#bcb4fe] text-center py-12`}>
                Diverse Code, Stronger
                <br />
                Chain: Elevate Ethereum
                <br />
                with Us!
              </h2>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}


export function Page3() {
  // Study sessions data
  const studySessions = [
    {
      id: "01",
      title: "Introduction to ETH World",
      date: "11 Mar,2025, Tue at UTC 14:30",
    },
    {
      id: "02",
      title: "Introduction to ETH World",
      date: "11 Mar,2025, Tue at UTC 14:30",
    },
    {
      id: "03",
      title: "Introduction to ETH World",
      date: "11 Mar,2025, Tue at UTC 14:30",
    },
    {
      id: "04",
      title: "Introduction to ETH World",
      date: "11 Mar,2025, Tue at UTC 14:30",
    },
  ];

  // Workshop events data
  const workshopEvents = [
    {
      title: "Smart Contract Security Workshop",
      date: "April 22, 2024",
      description:
        "Learn best practices for writing secure smart contracts and identifying common vulnerabilities",
    },
    {
      title: "Smart Contract Security Workshop",
      date: "April 22, 2024",
      description:
        "Learn best practices for writing secure smart contracts and identifying common vulnerabilities",
    },
    {
      title: "Smart Contract Security Workshop",
      date: "April 22, 2024",
      description:
        "Learn best practices for writing secure smart contracts and identifying common vulnerabilities",
    },
  ];

  // Partners data
  const partners = ["Eth", "WiEP", "Avarch"];

  return (
    <div className="relative bg-[#fffeec] overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full bg-[#222223] relative">
        <div className="max-w-[1600px] mx-auto relative">
          <div className="relative">
            <div className="absolute w-full h-full bg-[#fffeec80] opacity-20" />

            <div className="container px-12 py-20 relative">
              <h1 className={`${gloock.className} text-9xl text-[#fffeec] font-normal leading-[94.8px] mb-16`}>
                STUDY GROUP
              </h1>

              <div className="flex flex-col md:flex-row gap-16">
                <div className="max-w-md">
                  <p className={`${montserrat.className} text-[#fffeec] text-[17.7px] leading-[25px]`}>
                    The WiEP Study Group is a supportive community for women to
                    learn, connect, and contribute to Ethereum. Through
                    collaborative sessions, members explore EIPs, smart
                    contracts, and consensus mechanisms while developing
                    technical skills. WiEP fosters mentorship, networking, and
                    leadership, empowering women to take initiative and make
                    their first Pull Request. Committed to increasing diversity
                    in the Ethereum ecosystem, we invite you to join us on
                    GitHub!
                  </p>
                </div>

                <div className="grid gap-2 w-full">
                  {studySessions.map((value) => {
                    return (
                      <div id={value.id} className={`${montserrat.className} flex items-center justify-between rounded-full w-full bg-[#fffeec] p-4`}>
                        <div>{value.id}.</div>
                        <div>{value.title}</div>
                        <div>{value.date}</div>
                        <div><PlusCircle size={23} /></div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 flex flex-col items-center">
              <div className="w-[42px] h-[42px] flex items-center justify-center bg-[#c3b1e1] rounded-full">
                <ChevronDown size={25} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="w-full bg-[#bcb4fe] relative">
        <div className="w-full h-full bg-[url('/bg2.png')] bg-cover bg-center">
          <div className="max-w-[1600px] mx-auto relative py-16">
            <div className="absolute inset-0 opacity-20">
            </div>

            <div className="container px-12 relative">
              <div className="flex justify-between items-center mb-10">
                <h2 className={`${gloock.className} text-9xl text-[#fffeec] font-normal leading-[94.8px]`}>
                  UPCOMING <span className="bg-slate-900 rounded-2xl p-2">EVENTS</span>
                </h2>
              </div>

              <p className={`${montserrat.className} text-[#fffeec] text-[17.7px] leading-[25px] max-w-4xl mb-16`}>
                Join our community events to learn, network, and collaborate with
                other women and allies in the Ethereum ecosystem.work, and
                collaborate with other women and allies in the Ethereum ecosystem.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workshopEvents.map((event, index) => (
                  <Card
                    key={index}
                    className="bg-[#fffeec] rounded-[20px] overflow-hidden border-none"
                  >
                    <CardContent className="p-0">
                      <div className="p-6">
                        <div className="flex justify-between">
                          <h3 className={`${gloock.className} font-normal text-black text-[32px] leading-[39.2px] max-w-[348px] mb-6`}>
                            {event.title}
                          </h3>
                          <span className={`${montserrat.className} font-normal text-black text-xl`}>
                            {event.date}
                          </span>
                        </div>
                        <p className={`${montserrat.className} font-normal text-black text-xl leading-[19.2px] mb-8`}>
                          {event.description}
                        </p>
                        <div className="flex justify-center">
                          <Button className="bg-[#bcb4ff] text-[#fffeec] rounded-full px-8 py-2 h-11 hover:bg-[#a99dff]">
                            <span className="mr-2">
                              <PlusCircle size={25} />
                            </span>
                            REGISTER NOW!
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-16">
                <div className="w-20 h-20 bg-[#fffeec] rounded-[40px] flex items-center justify-center">
                  <ChevronDown size={56} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full bg-[#fffeec] py-10">
        <div className="container mx-auto">
          <h2 className={`${gloock.className} font-normal text-black text-5xl leading-[39.2px] mb-10 text-center`}>
            Associates &amp; Partners
          </h2>

          <div className="overflow-hidden">
            <div className="flex gap-16 animate-marquee">
              {Array(8)
                .fill(partners)
                .flat()
                .map((partner, index) => (
                  <span
                    key={index}
                    className="font-jithya24-wixstudio-com-playfair-display-regular text-jithya24wixstudiocomblack-charcoal whitespace-nowrap text-[38px]"
                  >
                    {partner}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Page4() {
  // Navigation links data
  const linkSections = [
    {
      title: "Links",
      links: [
        "About",
        "Membership",
        "Events",
        "Collaborate",
        "Study Groups",
        "Contact Us",
      ],
    },
    {
      title: "Know More",
      links: ["Code of Conduct", "Associates & Partners"],
    },
    {
      title: "Contact Us",
      content: "E-mail ID: asdfg@gmail.com",
    },
    {
      title: "Social",
      icons: [
        { icon: <Youtube className="h-5 w-5" />, href: "#" },
        { icon: <Twitter className="h-5 w-5" />, href: "#" },
        { icon: <Github className="h-5 w-5" />, href: "#" },
        { icon: <MessageSquare className="h-5 w-5" />, href: "#" },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fffeec] overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Background elements */}
        <div className="w-full h-[373px] bg-[#bcb4fe] relative">
          {/* Overlay with waves pattern */}
          <div className="absolute inset-0 opacity-[0.06] bg-[url(/BG-HOME-waves.png)] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[#fffeec80] opacity-20" />

          {/* Main content container */}
          <div className="container mx-auto px-4 pt-[37px] relative z-10">
            {/* Heading text */}
            <h1 className={`${gloock.className} max-w-[1068px] text-5xl leading-[57px] font-normal`}>
              <span className="text-[#222223]">Discover</span>
              <span className="text-[#fffeec]">
                {" "}
                exciting opportunities to grow, collaborate, and innovate with{" "}
              </span>
              <span className="text-[#222223] bg-[#fffeec] rounded-full p-2">WiEP</span>
              <span className="text-[#fffeec]">
                . Join us in shaping a more inclusive Ethereum ecosystem.
              </span>
            </h1>

            {/* Discover more button */}
            <Button
              variant="outline"
              className="mt-[60px] h-[41px] bg-[#fffeec] text-[#bcb4fe] rounded-[300px] font-jithya24-wixstudio-com-montserrat-regular hover:bg-[#fffeec]/90"
            >
              <ChevronRight className="mr-2 h-5 w-5" />
              DISCOVER MORE
            </Button>
          </div>
        </div>

        {/* Footer section */}
        <footer className="w-full bg-[#222223] text-white">
          <div className="container mx-auto px-4 py-12">
            {/* Footer content grid */}
            <div className="flex flex-wrap justify-between">
              {/* Logo section */}
              <div className="w-full md:w-1/5 mb-8 md:mb-0">
                <div className="w-[120px] h-[120px] bg-[#fffeec] rounded-full flex items-center justify-center">
                  <img
                    src="/WiEP Logo.png"
                    alt="WiEP Logo"
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
              </div>

              {/* Navigation sections */}
              <div className="w-full md:w-3/4 flex flex-wrap">
                {linkSections.map((section, index) => (
                  <div key={index} className="w-full sm:w-1/2 md:w-1/4 mb-6">
                    <h3 className="text-lg font-medium mb-4">
                      {section.title}
                    </h3>

                    {section.links && (
                      <ul className="space-y-2">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a href="#" className="hover:underline">
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.content && <p>{section.content}</p>}

                    {section.icons && (
                      <div className="flex space-x-4">
                        {section.icons.map((icon, iconIndex) => (
                          <a
                            key={iconIndex}
                            href={icon.href}
                            className="hover:text-gray-300 transition-colors"
                          >
                            {icon.icon}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm">
              © 2023 WiEP | All Rights Reserved
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}



export default function Page() {
  return (
    <main>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </main>
  )
}
