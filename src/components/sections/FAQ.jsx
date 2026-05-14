import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Is Pitch Studio completely free?',
      answer: 'Pitch Studio is free for founders to join and participate in events. We offer premium membership tiers for investors with additional perks like exclusive deal flow access and reserved seating at events.'
    },
    {
      question: 'How do you vet founders and investors?',
      answer: 'Every member goes through a simple verification process. Founders provide basic traction metrics or background. Investors verify their fund/investment history. This ensures quality and seriousness from everyone in the community.'
    },
    {
      question: 'Does joining Pitch Studio guarantee investment?',
      answer: 'No. Pitch Studio is a platform and community, not a guarantee fund. What we guarantee is access, exposure, and a fair arena to be discovered. The quality of your idea, team, and execution determines outcomes – just like in real investing.'
    },
    {
      question: 'How often are events held?',
      answer: 'We host monthly pitch events in Bangalore and Kerala with 50+ attendees each. We also run bi-weekly mentorship circles, founder office hours, and investor dinners. Check the calendar for upcoming events in your city.'
    },
    {
      question: 'Can I participate remotely?',
      answer: "Yes! While in-person events are our specialty, we stream select events and host virtual office hours for members in other cities. We're expanding to your city soon, so stay tuned."
    },
    {
      question: 'What makes Pitch Studio different from other startup communities?',
      answer: "We focus on ecosystem building, not just transactions. We celebrate the entire journey – mentors advising, investors supporting, founders learning from each other. It's a movement where everyone wins together."
    },
    {
      question: 'How much equity/commission do you take?',
      answer: 'We take zero equity and no commission. Our model is sustainable through premium memberships and corporate partnerships. Founders and investors keep 100% of their deals.'
    },
    {
      question: 'How do I get started?',
      answer: "Head to our website and join as a founder, investor, or mentor. Complete your profile (takes 5 minutes), verify your email, and you're in! Attend your first event and start building connections."
    }
  ]

  return (
    <section id="faq" className="py-32 bg-[#020202] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="px-4 py-1 border border-blue-500/30 rounded-full bg-blue-500/5 text-blue-500 text-[10px] font-black tracking-[0.4em] uppercase mb-6"
          >
            Support Terminal // FAQ
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
            ANY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">QUESTIONS?</span>
          </h2>
        </div>

        {/* ACCORDION GRID */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white/[0.02] backdrop-blur-3xl border transition-all duration-300 rounded-2xl overflow-hidden ${
                openIndex === index ? 'border-blue-500/50 bg-white/[0.05]' : 'border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-blue-500/50">0{index + 1}</span>
                  <span className={`text-lg md:text-xl font-bold uppercase italic tracking-tight transition-colors ${
                    openIndex === index ? 'text-blue-400' : 'text-white'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-500 ${
                  openIndex === index ? 'rotate-180 bg-blue-500 border-blue-500' : ''
                }`}>
                  <svg className={`w-4 h-4 ${openIndex === index ? 'text-white' : 'text-blue-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-8 pt-2 ml-14">
                      <p className="text-white/50 text-lg leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* FOOTER CTA: CONTACT COMMAND */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 bg-gradient-to-br from-blue-600 to-blue-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden group shadow-[0_20px_50px_-15px_rgba(37,99,235,0.4)]"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-8xl italic select-none">?</div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
                Still have questions?
              </h3>
              <p className="text-blue-100/70 font-medium italic">
                Our operations team is standing by to assist you.
              </p>
            </div>
            <a href="#contact" rel="noopener noreferrer">
              <button className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all shadow-xl">
                Get in Touch
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}