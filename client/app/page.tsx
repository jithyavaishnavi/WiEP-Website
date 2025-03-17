"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, DiscIcon as Discord, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Page() {
  // Add smooth scrolling functionality
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleNavLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check if the clicked element is a navigation link with a hash
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const href = target.getAttribute("href")

        if (href) {
          // Get the target section
          const targetSection = document.querySelector(href)

          if (targetSection) {
            // Scroll smoothly to the section
            targetSection.scrollIntoView({ behavior: "smooth" })

            // Update URL without page reload
            window.history.pushState({}, "", href)
          }
        }
      }
    }

    // Add event listener to the navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]')
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick as EventListener)
    })

    // Add event listener to the footer quick links
    const footerLinks = document.querySelectorAll('footer a[href^="#"]')
    footerLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick as EventListener)
    })

    // Cleanup event listeners on component unmount
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick as EventListener)
      })
      footerLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick as EventListener)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#2D1B69] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#2D1B69]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WiEP%20Logo-p81dKYggADUcPwPMfG0gJjNhZA7a1h.png"
                alt="WiEP Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <span className="text-white font-semibold text-xl">WiEP</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-white hover:text-purple-300 transition">
                About
              </Link>
              <Link href="#membership" className="text-white hover:text-purple-300 transition">
                Membership
              </Link>
              <Link href="#study-groups" className="text-white hover:text-purple-300 transition">
                Study Groups
              </Link>
              <Link href="#events" className="text-white hover:text-purple-300 transition">
                Events
              </Link>
              <Link href="#collaborate" className="text-white hover:text-purple-300 transition">
                Collaborate
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D1B69] to-[#6B46C1] opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl text-purple-300 mb-2 font-serif">Women In Ethereum Protocol</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight animate-fade-in">
              Empowering Diversity In Ethereum&apos;s Future
            </h1>
            <p className="max-w-3xl mx-auto text-lg mb-10">
              Women in Ethereum Protocol (WiEP) is a community advancing gender diversity in the Ethereum ecosystem.
              Founded by Avarch, WiEP fosters innovation, collaboration, and inclusivity, building a decentralized
              future where every voice matters.
            </p>
            <Button className="rounded-full bg-white text-purple-800 hover:bg-gray-100">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                  fill="#5865F2"
                />
              </svg>
              Join Discord Server
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#1A103F]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">About Us</h2>
            <p className="text-purple-100 text-lg leading-relaxed mb-8">
              Women in Ethereum Protocol (WiEP) is a community advancing gender diversity in the Ethereum ecosystem.
              Founded by the Ethereum Foundation and Ethereum Cat Herders, WiEP fosters
              <span className="italic text-purple-300"> innovation, collaboration, and inclusivity</span>: building a
              decentralized future where every voice matters.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="secondary"
                className="bg-purple-700 text-white hover:bg-purple-600 flex items-center gap-2"
              >
                Know More
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-black border-purple-400 hover:bg-purple-800/50">
                Study Group
              </Button>
            </div>
          </div>
          <div className="fixed bottom-8 right-8">
            <Link href="https://github.com" className="text-white hover:opacity-80 transition-opacity">
              <Github size={40} />
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 px-4 bg-[#2D1B69]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 text-center">Membership</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-[#3A2483] p-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                <h3 className="text-2xl font-serif text-white mb-4">Community Member</h3>
                <p className="text-purple-100 mb-6">
                  Join our vibrant community of women and allies in the Ethereum ecosystem. Connect, learn, and grow
                  with us.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-400 p-1 mt-1">
                      <svg className="h-3 w-3 text-[#3A2483]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Access to Discord community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-400 p-1 mt-1">
                      <svg className="h-3 w-3 text-[#3A2483]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Participate in events and workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-400 p-1 mt-1">
                      <svg className="h-3 w-3 text-[#3A2483]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Network with industry professionals</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-400 text-white">Join Now</Button>
              </div>

              <div className="bg-[#3A2483] p-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                <h3 className="text-2xl font-serif text-white mb-4">Contributor</h3>
                <p className="text-purple-100 mb-6">
                  Take an active role in shaping the future of Ethereum by contributing your skills and expertise.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-400 p-1 mt-1">
                      <svg className="h-3 w-3 text-[#3A2483]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>All Community Member benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-400 p-1 mt-1">
                      <svg className="h-3 w-3 text-[#3A2483]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Contribute to WiEP initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-400 p-1 mt-1">
                      <svg className="h-3 w-3 text-[#3A2483]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Mentorship opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-400 p-1 mt-1">
                      <svg className="h-3 w-3 text-[#3A2483]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Recognition in the community</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-400 text-white">Apply Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Groups Section */}
      <section id="study-groups" className="py-20 px-4 bg-[#1A103F]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 text-center">Study Groups</h2>
            <p className="text-purple-100 text-lg text-center mb-12 max-w-2xl mx-auto">
              Join our specialized study groups to deepen your knowledge of Ethereum and blockchain technology.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#3A2483] p-6 rounded-xl hover:transform hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-white mb-2">Smart Contracts</h3>
                <p className="text-purple-100 mb-4">Learn to write, audit, and deploy smart contracts on Ethereum.</p>
                <Button variant="link" className="text-purple-300 p-0 hover:text-purple-100">
                  Join Group →
                </Button>
              </div>

              <div className="bg-[#3A2483] p-6 rounded-xl hover:transform hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-white mb-2">DeFi Fundamentals</h3>
                <p className="text-purple-100 mb-4">
                  Explore decentralized finance protocols, mechanisms, and applications.
                </p>
                <Button variant="link" className="text-purple-300 p-0 hover:text-purple-100">
                  Join Group →
                </Button>
              </div>

              <div className="bg-[#3A2483] p-6 rounded-xl hover:transform hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-white mb-2">Protocol Development</h3>
                <p className="text-purple-100 mb-4">
                  Dive deep into Ethereum protocol development and improvement proposals.
                </p>
                <Button variant="link" className="text-purple-300 p-0 hover:text-purple-100">
                  Join Group →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 bg-[#2D1B69]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 text-center">Upcoming Events</h2>
            <p className="text-purple-100 text-lg text-center mb-12 max-w-2xl mx-auto">
              Join us for workshops, webinars, and networking events designed to empower women in the Ethereum
              ecosystem.
            </p>

            <div className="space-y-6">
              <div className="bg-[#3A2483] p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-purple-800 rounded-lg p-4 text-center">
                      <span className="block text-purple-300 text-sm">MAR</span>
                      <span className="block text-white text-3xl font-bold">15</span>
                      <span className="block text-purple-300 text-sm">2025</span>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-serif text-white mb-2">Introduction to Ethereum Development</h3>
                    <p className="text-purple-100 mb-4">
                      A beginner-friendly workshop on getting started with Ethereum development. Learn about the
                      ecosystem, tools, and resources.
                    </p>
                    <div className="flex items-center gap-4">
                      <Button className="bg-purple-500 hover:bg-purple-400 text-white">Register</Button>
                      <span className="text-purple-300">Virtual Event</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#3A2483] p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-purple-800 rounded-lg p-4 text-center">
                      <span className="block text-purple-300 text-sm">APR</span>
                      <span className="block text-white text-3xl font-bold">22</span>
                      <span className="block text-purple-300 text-sm">2025</span>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-serif text-white mb-2">Women in Web3 Panel Discussion</h3>
                    <p className="text-purple-100 mb-4">
                      Join our panel of industry leaders as they discuss the challenges and opportunities for women in
                      Web3.
                    </p>
                    <div className="flex items-center gap-4">
                      <Button className="bg-purple-500 hover:bg-purple-400 text-white">Register</Button>
                      <span className="text-purple-300">New York, NY</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#3A2483] p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-purple-800 rounded-lg p-4 text-center">
                      <span className="block text-purple-300 text-sm">MAY</span>
                      <span className="block text-white text-3xl font-bold">10</span>
                      <span className="block text-purple-300 text-sm">2025</span>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-serif text-white mb-2">Ethereum Protocol Deep Dive</h3>
                    <p className="text-purple-100 mb-4">
                      An advanced workshop on Ethereum protocol development, focusing on recent EIPs and protocol
                      upgrades.
                    </p>
                    <div className="flex items-center gap-4">
                      <Button className="bg-purple-500 hover:bg-purple-400 text-white">Register</Button>
                      <span className="text-purple-300">Virtual Event</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate Section */}
      <section id="collaborate" className="py-20 px-4 bg-[#1A103F]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 text-center">Collaborate With Us</h2>
            <p className="text-purple-100 text-lg text-center mb-12 max-w-2xl mx-auto">
              We're always looking for partners, sponsors, and collaborators to help us advance our mission.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#3A2483] p-8 rounded-xl">
                <h3 className="text-2xl font-serif text-white mb-4">Partnership Opportunities</h3>
                <p className="text-purple-100 mb-6">
                  Partner with WiEP to support our initiatives and help us create a more inclusive Ethereum ecosystem.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-400 p-1 mt-1">
                      <svg className="h-3 w-3 text-[#3A2483]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Event sponsorship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-400 p-1 mt-1">
                      <svg className="h-3 w-3 text-[#3A2483]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Educational content collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-400 p-1 mt-1">
                      <svg className="h-3 w-3 text-[#3A2483]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Mentorship programs</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-400 text-white">Become a Partner</Button>
              </div>

              <div className="bg-[#3A2483] p-8 rounded-xl">
                <h3 className="text-2xl font-serif text-white mb-4">Contact Us</h3>
                <p className="text-purple-100 mb-6">
                  Have questions or ideas? We'd love to hear from you! Reach out to us through any of these channels.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Discord className="h-5 w-5 text-purple-300" />
                    <span>Join our Discord community</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                    </svg>
                    <span>Follow us on Twitter</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-purple-300" />
                    <span>Contribute on GitHub</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span>Email: info@wiep.org</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-500 hover:bg-purple-400 text-white">Send Message</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#1A0D35] text-purple-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WiEP%20Logo-p81dKYggADUcPwPMfG0gJjNhZA7a1h.png"
                  alt="WiEP Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-white font-semibold">WiEP</span>
              </div>
              <p className="text-sm mb-4">
                Women in Ethereum Protocol (WiEP) is a community advancing gender diversity in the Ethereum ecosystem.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-purple-300 hover:text-white transition">
                  <Discord className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-purple-300 hover:text-white transition">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                  </svg>
                </Link>
                <Link href="#" className="text-purple-300 hover:text-white transition">
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-purple-100 hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#membership" className="text-purple-100 hover:text-white transition">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="#study-groups" className="text-purple-100 hover:text-white transition">
                    Study Groups
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="text-purple-100 hover:text-white transition">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#collaborate" className="text-purple-100 hover:text-white transition">
                    Collaborate
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-purple-100 hover:text-white transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-100 hover:text-white transition">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-100 hover:text-white transition">
                    Ethereum Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-100 hover:text-white transition">
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-100 hover:text-white transition">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Newsletter</h3>
              <p className="text-sm mb-4">
                Subscribe to our newsletter to stay updated on our latest events and initiatives.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-[#2D1B69] border border-purple-700 rounded-l-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-purple-400"
                />
                <Button className="bg-purple-500 hover:bg-purple-400 text-white rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-800 mt-12 pt-6 text-center text-sm">
            <p>© 2025 Women in Ethereum Protocol. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-4">
              <Link href="#" className="text-purple-100 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="#" className="text-purple-100 hover:text-white transition">
                Terms of Service
              </Link>
              <Link href="/code-of-conduct" className="text-purple-100 hover:text-white transition">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

