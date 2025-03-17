import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen bg-[#2D1B69] text-white">
      {/* Header */}
      <header className="bg-[#1A103F] py-6">
        <div className="container mx-auto px-4">
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
            <Button variant="ghost" className="text-white hover:text-purple-300" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-8 text-center">WiEP - Code of Conduct</h1>

          <div className="bg-[#3A2483] p-8 rounded-xl space-y-6">
            <section>
              <h2 className="text-2xl font-serif text-white mb-3">Respect and Inclusion</h2>
              <p className="text-purple-100">
                We are committed to fostering an inclusive environment where all individuals, regardless of gender,
                race, ethnicity, sexual orientation, disability, or background, are respected and valued.
                Discrimination, harassment, or exclusionary behavior of any kind will not be tolerated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-3">Professionalism</h2>
              <p className="text-purple-100">
                All members are expected to conduct themselves professionally and with integrity. This includes
                maintaining a positive and supportive attitude during discussions, collaborations, and events. Personal
                attacks, trolling, and derogatory language are strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-3">Collaboration and Support</h2>
              <p className="text-purple-100">
                We encourage open collaboration and the sharing of knowledge. Members should feel comfortable asking
                questions, offering support, and contributing ideas. Constructive feedback should be given with the
                intent to help others grow, and any criticism should be delivered respectfully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-3">Privacy and Confidentiality</h2>
              <p className="text-purple-100">
                Respect the privacy of others. Do not share personal information, private communications, or
                confidential discussions without explicit consent. Sensitive information discussed within the group
                should remain within the group unless agreed upon otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-3">Anti-Harassment Policy</h2>
              <p className="text-purple-100">
                Harassment includes, but is not limited to, offensive verbal comments, unwanted attention, stalking, and
                unwelcome physical contact. Any member who experiences or witnesses harassment should report it
                immediately to the group moderators or organizers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-3">Commitment to Diversity</h2>
              <p className="text-purple-100">
                We believe that diversity drives innovation and creativity. All efforts should be made to include
                diverse voices and perspectives in discussions, projects, and events. Members should actively work to
                ensure that the group remains a welcoming space for women and non-binary individuals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-3">Accountability</h2>
              <p className="text-purple-100">
                Members are accountable for their actions and behavior within the group. Violations of this Code of
                Conduct may result in warnings, suspension, or removal from the group. Group moderators and organizers
                have the authority to enforce this Code of Conduct and take appropriate actions to address any issues
                that arise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-3">Continuous Improvement</h2>
              <p className="text-purple-100">
                The Code of Conduct is a living document and may be updated as needed. Members are encouraged to provide
                feedback and suggestions to improve the group's culture and policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-3">Commitment to the Ethereum Ecosystem</h2>
              <p className="text-purple-100">
                Members should actively work towards the betterment of the Ethereum protocol and the broader blockchain
                ecosystem. This includes contributing positively to discussions, projects, and initiatives that advance
                the technology and its adoption.
              </p>
            </section>
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-purple-500 hover:bg-purple-400 text-white" asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#1A0D35] text-purple-100">
        <div className="container mx-auto text-center">
          <p>© 2025 Women in Ethereum Protocol. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

