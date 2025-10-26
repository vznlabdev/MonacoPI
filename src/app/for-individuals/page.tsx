import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Individuals - Monaco PI",
  description: "Professional investigation services with complete discretion for relationship concerns, missing persons, and personal security.",
};

export default function ForIndividualsPage() {
  return (
    <div className="bg-[#FAFAF9]">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"></div>
        
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">
            For Individuals
          </h1>
          <p className="text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            When your personal life demands professional answers
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 md:py-40">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-2xl md:text-3xl text-neutral-700 font-light leading-relaxed mb-12">
              When your world feels uncertain and you need answers, you shouldn't have to navigate this alone.
            </p>
            <p className="text-xl text-neutral-600 font-light leading-relaxed">
              Whether you're dealing with a relationship crisis, searching for someone important, or protecting what matters most to you, Monaco PI provides the professional expertise and compassionate support you need during life's most challenging moments.
            </p>
          </div>
        </div>
      </section>

      {/* Situations We Handle */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-24">Situations We Handle</h2>
          
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl font-light text-neutral-900 mb-6 tracking-tight">
                Relationship & Marriage Concerns
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed mb-6">
                When trust has been broken and you need to know the truth. Our surveillance and investigation services provide the clarity you need to make informed decisions about your future.
              </p>
              <p className="text-sm text-neutral-500 font-light italic">
                "Everyone kept saying I was being paranoid. Well guess what? I WASN'T."
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-light text-neutral-900 mb-6 tracking-tight">
                Missing Person Investigations
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed mb-6">
                Reconnecting with lost family members, locating estranged relatives, or finding someone who's disappeared from your life. We use advanced databases and investigative techniques others can't access.
              </p>
              <p className="text-sm text-neutral-500 font-light italic">
                "She's okay!! She's really okay. I can't stop crying. Thank you thank you thank you"
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-light text-neutral-900 mb-6 tracking-tight">
                Background Investigations
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Before you make important personal decisions – whether it's a new relationship, business partnership, or childcare provider – know who you're really dealing with.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-light text-neutral-900 mb-6 tracking-tight">
                Asset & Financial Investigations
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed mb-6">
                Uncovering hidden assets, suspicious financial activity, or protecting yourself from fraud. We follow the money trail that others miss.
              </p>
              <p className="text-sm text-neutral-500 font-light italic">
                "Dude you found him in 2 days. TWO DAYS. I've been looking for months!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Help */}
      <section className="py-32 md:py-40 bg-neutral-900">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-500 mb-24">Why Professional Help</h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-2xl font-light text-white mb-6 tracking-tight">
                You Can't Afford Mistakes
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed mb-6">
                DIY investigations often backfire. Social media stalking, confronting people directly, or hiring inexperienced investigators can make your situation worse.
              </p>
              <p className="text-sm text-neutral-500 font-light italic">
                "I thought I was going insane. Turns out my gut was right all along."
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-white mb-6 tracking-tight">
                Your Privacy Is Everything
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                We understand that discretion isn't just preferred – it's essential. Our investigations are conducted with complete confidentiality using unmarked vehicles and encrypted communications.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-white mb-6 tracking-tight">
                Compassionate Support
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Our team combines professional expertise with genuine empathy. We listen to your concerns and provide the emotional support you need while delivering the facts you deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8 tracking-tight">
            Get the answers you deserve
          </h2>
          <p className="text-lg text-neutral-600 font-light mb-12 leading-relaxed">
            Take the first step toward peace of mind with your free confidential consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-neutral-900 text-white text-sm font-normal tracking-wide hover:bg-neutral-700 transition-all duration-300 rounded-sm"
          >
            Request Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
