import { motion } from "framer-motion";
import {
  Check,
  HeartHandshake,
  Target,
  UsersRound,
} from "lucide-react";

const highlights = [
  "Individual attention for every patient",
  "Treatment plans built around your goals",
  "Focus on movement, mobility and recovery",
  "A comfortable and supportive environment",
];

function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.95fr_1fr] lg:px-8">

        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/clinic.webp"
              alt="Perfect Physiotherapy Centre"
              className="h-[520px] w-full object-cover"
            />
          </div>

          {/* Decorative card */}
          <div className="absolute -bottom-6 -right-4 max-w-[230px] rounded-2xl border border-neutral-100 bg-white p-5 shadow-xl sm:-right-7">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4c542]/20 text-[#8a6500]">
              <HeartHandshake size={20} />
            </div>

            <p className="text-sm font-extrabold text-neutral-900">
              Care that puts you first
            </p>

            <p className="mt-1 text-xs leading-5 text-neutral-500">
              Every recovery journey is different. Your treatment should be
              too.
            </p>
          </div>

          {/* Yellow decoration */}
          <div className="absolute -left-8 -top-8 -z-10 h-28 w-28 rounded-full bg-[#f4c542]/70" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#b91c1c]/8 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#b91c1c]" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#b91c1c]">
              About The Centre
            </span>
          </div>

          <h2 className="max-w-xl text-4xl font-extrabold tracking-[-0.035em] text-neutral-950 sm:text-5xl">
            Physiotherapy with a
            <span className="text-[#b91c1c]"> personal approach.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600">
            At Perfect Physiotherapy Centre, the focus is on understanding
            your movement, your discomfort and your goals before shaping a
            treatment approach around you.
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
            Whether you're working through an injury, managing ongoing pain or
            looking to improve mobility, physiotherapy can be part of a
            structured journey toward better movement and everyday function.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b91c1c]/10 text-[#b91c1c]">
                  <Check size={13} strokeWidth={3} />
                </div>

                <span className="text-sm font-semibold leading-5 text-neutral-700">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          {/* Philosophy cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-[#faf9f7] p-5">
              <Target size={21} className="text-[#b91c1c]" />

              <h3 className="mt-4 text-sm font-extrabold text-neutral-900">
                Goal-oriented care
              </h3>

              <p className="mt-2 text-xs leading-5 text-neutral-500">
                Treatment focused on meaningful improvements in movement and
                function.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-[#faf9f7] p-5">
              <UsersRound size={21} className="text-[#b91c1c]" />

              <h3 className="mt-4 text-sm font-extrabold text-neutral-900">
                Patient-focused
              </h3>

              <p className="mt-2 text-xs leading-5 text-neutral-500">
                A supportive environment where your concerns and goals remain
                central.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;