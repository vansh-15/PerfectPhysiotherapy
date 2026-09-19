import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ShieldCheck,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#faf9f7] pt-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-[#f4c542]/15 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#b91c1c]/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b91c1c]/10 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#b91c1c]" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#b91c1c]">
              Trusted Physiotherapy Care
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] text-neutral-950 sm:text-6xl lg:text-[68px]">
            Restore your
            <span className="block text-[#b91c1c]">movement.</span>

            <span className="block">
              Reclaim your
              <span className="relative ml-2 inline-block">
                life.
                <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-[#f4c542]" />
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
            Personalized physiotherapy focused on pain relief, mobility,
            strength and long-term recovery — with care designed around you.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#b91c1c] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#b91c1c]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#991b1b]"
            >
              Book an Appointment
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#treatments"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-3.5 text-sm font-bold text-neutral-800 transition duration-300 hover:border-neutral-300 hover:bg-neutral-50"
            >
              Explore Treatments
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-neutral-200 pt-7">
            <div className="pr-4">
              <p className="text-2xl font-extrabold text-neutral-900">
                15+
              </p>
              <p className="mt-1 text-xs font-medium leading-4 text-neutral-500">
                Years of
                <br />
                Experience
              </p>
            </div>

            <div className="border-l border-neutral-200 px-5">
              <p className="text-2xl font-extrabold text-neutral-900">
                Expert
              </p>
              <p className="mt-1 text-xs font-medium leading-4 text-neutral-500">
                Physiotherapy
                <br />
                Care
              </p>
            </div>

            <div className="border-l border-neutral-200 pl-5">
              <p className="text-2xl font-extrabold text-neutral-900">
                Personal
              </p>
              <p className="mt-1 text-xs font-medium leading-4 text-neutral-500">
                Treatment
                <br />
                Plans
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          {/* Main image */}
          <div className="relative overflow-hidden rounded-[2rem] bg-neutral-200 shadow-2xl shadow-black/10">
            <img
              src="/images/doctor.webp"
              alt="Perfect Physiotherapy Centre"
              className="h-[500px] w-full object-cover object-center sm:h-[600px]"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            {/* Bottom image label */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div className="rounded-2xl border border-white/20 bg-black/30 px-4 py-3 text-white backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Perfect Physiotherapy Centre
                </p>
                <p className="mt-1 text-sm font-bold">
                  Professional • Personal • Proven
                </p>
              </div>
            </div>
          </div>

          {/* Floating card - top right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -right-4 top-8 hidden rounded-2xl border border-white/80 bg-white p-4 shadow-xl sm:block lg:-right-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4c542]/20 text-[#8a6500]">
                <ShieldCheck size={21} />
              </div>

              <div>
                <p className="text-xs font-bold text-neutral-900">
                  Patient-focused
                </p>
                <p className="mt-0.5 text-[11px] text-neutral-500">
                  Personalized care
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating card - bottom left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/80 bg-white p-4 shadow-xl sm:block lg:-left-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b91c1c]/10 text-[#b91c1c]">
                <Clock3 size={20} />
              </div>

              <div>
                <p className="text-xs font-bold text-neutral-900">
                  Focused on recovery
                </p>

                <div className="mt-1 flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-green-600" />
                  <span className="text-[11px] font-medium text-neutral-500">
                    Comprehensive care
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative yellow circle */}
          <div className="absolute -bottom-10 -right-10 -z-10 h-32 w-32 rounded-full bg-[#f4c542]" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;