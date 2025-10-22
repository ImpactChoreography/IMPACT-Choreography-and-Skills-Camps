import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function ImpactWebsite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 bg-[#0d0d0d] border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <img src="/IMG_2208.png" alt="IMPACT Logo" className="w-12" />
          <h1 className="text-xl font-bold text-red-500">IMPACT</h1>
        </div>
        <div className="flex space-x-6 text-gray-300 text-lg">
          <a href="#home" className="hover:text-red-500">Home</a>
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#register" className="hover:text-red-500">Register</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-32 bg-gradient-to-b from-black via-[#111] to-[#222]">
        <motion.img
          src="/IMG_2208.png"
          alt="IMPACT Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-40 mb-8"
        />
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-red-500 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          The Goal is to Win.<br /> The Mission is to Grow.
        </motion.h1>
        <p className="text-lg mt-4 max-w-2xl text-gray-300">
          Elite choreography and skills camps designed to push athletes beyond limits.
        </p>
        <div className="mt-8 flex gap-4">
          <Button className="bg-red-600 text-white hover:bg-red-700 text-lg px-6 py-3 rounded-2xl">
            Book a Camp
          </Button>
          <Button variant="outline" className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black text-lg px-6 py-3 rounded-2xl">
            Join the Movement
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 text-center bg-[#0d0d0d]">
        <h2 className="text-4xl font-bold text-babyblue mb-6">About IMPACT</h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-10">
          At IMPACT, we believe effort builds champions. Every routine is crafted with precision, creativity, and care — because excellence isn’t given, it’s earned. We transform potential into performance and passion into power.
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: 'Integrity', desc: 'We hold ourselves to the highest standard—on and off the floor.' },
            { title: 'Precision', desc: 'Every routine is engineered, every detail refined.' },
            { title: 'Passion', desc: 'We bring heart, fire, and creativity to every training moment.' },
          ].map((pillar, i) => (
            <Card key={i} className="bg-[#111] text-white border border-gray-700 rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-red-500 mb-4">{pillar.title}</h3>
                <p className="text-gray-400">{pillar.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-24 bg-black text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">Join the Movement</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Ready to take your team to the next level? Secure your spot at our next camp.
        </p>
        <Button
          as="a"
          href="https://impact.wufoo.com/forms/z13uxkzq0elcd6w/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-4 rounded-2xl"
        >
          Register Now
        </Button>
      </section>

      <footer className="py-8 bg-[#0d0d0d] text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} IMPACT Choreography & Skills Camps. All Rights Reserved.
      </footer>
    </div>
  )
}
