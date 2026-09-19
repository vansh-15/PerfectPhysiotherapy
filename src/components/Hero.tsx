import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Phone,
  Star,
} from "lucide-react";

function Hero() {
  const base = import.meta.env.BASE_URL;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-28 sm:pt-32"
    >
      {/* Background brand glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-[#FFD600]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#E31B23]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            {/* Brand label */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#E31B23]/10 bg-[#FFFDF5] px-4 py-2.5 shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E31B23] text-white">
                <Check size={13} strokeWidth={3} />
              </span>

              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#B5121B]">
                Perfect Physiotherapy Centre
              </span>
            </div>

            {/* Main heading */}
            <h1 className="max-w-3xl text-[48px] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#171717] sm:text-[62px] lg:text-[70px]">
              Move better.
              <br />

              <span className="relative inline-block text-[#E31B23]">
                Feel better.
                <span className="absolute -bottom-1 left-0 h-2 w-[72%] rounded-full bg-[#FFD600]" />
              </span>

              <br />

              Live better.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
              Personalized physiotherapy care focused on pain relief,
              mobility, strength and recovery — helping you return to the
              activities and lifestyle you value.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#E31B23] px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-[#E31B23]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#B5121B]"
              >
                <CalendarDays size={18} />

                Book an Appointment

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#E31B23]/15 bg-white px-6 py-4 text-sm font-extrabold text-[#B5121B] transition duration-300 hover:border-[#E31B23]/30 hover:bg-[#FFFDF5]"
              >
                <Phone size={17} />
                Call the Centre
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFD600]">
                  <Check size={13} strokeWidth={3} />
                </div>

                <span className="text-xs font-bold text-neutral-700">
                  Personalized Care
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFD600]">
                  <Check size={13} strokeWidth={3} />
                </div>

                <span className="text-xs font-bold text-neutral-700">
                  Recovery Focused
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFD600]">
                  <Check size={13} strokeWidth={3} />
                </div>

                <span className="text-xs font-bold text-neutral-700">
                  Patient First
                </span>
              </div>
            </div>

            {/* Doctor mini card */}
            <div className="mt-10 flex max-w-md items-center gap-4 border-t border-neutral-200 pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E31B23] text-white">
                <Star size={20} fill="currentColor" />
              </div>

              <div>
                <p className="text-sm font-extrabold text-neutral-900">
                  Dr. R. K. Sharma
                </p>

                <p className="mt-0.5 text-xs font-medium text-neutral-500">
                  B.P.T., M.P.T. • Physiotherapy Care
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            {/* Yellow brand curve */}
            <div className="absolute -left-8 top-10 h-[82%] w-24 rounded-l-[5rem] border-[22px] border-r-0 border-[#FFD600] sm:-left-12 lg:-left-16" />

            {/* Red decorative circle */}
            <div className="absolute -right-7 -top-7 z-0 h-24 w-24 rounded-full bg-[#E31B23] sm:-right-10 sm:-top-10" />

            {/* Main image */}
            <div className="relative z-10 overflow-hidden rounded-[2rem] border-[5px] border-white bg-neutral-100 shadow-2xl shadow-black/15">
              <img
                src={`${base}images/doctor.webp`}
                alt="Perfect Physiotherapy Centre and Dr. R. K. Sharma"
                className="h-[520px] w-full object-cover object-center sm:h-[610px]"
              />

              {/* Image gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              {/* Doctor information */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/35 p-4 text-white backdrop-blur-xl sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FFD600]">
                  Perfect Physiotherapy Centre
                </p>

                <div className="mt-1 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-lg font-extrabold">
                      Dr. R. K. Sharma
                    </p>

                    <p className="mt-0.5 text-xs text-white/70">
                      B.P.T., M.P.T.
                    </p>
                  </div>

                  <div className="hidden text-right sm:block">
                    <p className="text-[10px] uppercase tracking-wider text-white/60">
                      Philosophy
                    </p>

                    <p className="mt-1 text-xs font-bold">
                      Move Better. Feel Better.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating experience card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-7 -left-4 z-20 rounded-2xl border border-[#F0E9D2] bg-white p-4 shadow-2xl sm:-left-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFD600] text-[#171717]">
                  <Star size={19} fill="currentColor" />
                </div>

                <div>
                  <p className="text-xl font-extrabold leading-none text-[#171717]">
                    15+
                  </p>

                  <p className="mt-1 text-[11px] font-bold text-neutral-500">
                    Years of Experience
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating yellow badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -right-4 top-10 z-20 hidden rounded-2xl bg-[#FFD600] px-5 py-4 shadow-xl sm:block lg:-right-8"
            >
              <p className="text-xs font-extrabold text-[#171717]">
                Your recovery
              </p>

              <p className="mt-0.5 text-xs font-bold text-[#B5121B]">
                Our priority.
              </p>
            </motion.div>

            {/* Decorative red dots */}
            <div className="absolute -bottom-12 right-8 z-0 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#E31B23]" />
              <span className="h-3 w-3 rounded-full bg-[#FFD600]" />
              <span className="h-3 w-3 rounded-full bg-[#E31B23]/30" />
            </div>
          </motion.div>
        </div>

        {/* Bottom brand statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 rounded-3xl border border-[#F0E9D2] bg-[#FFFDF5] px-6 py-7 sm:px-8"
        >
          <div className="grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-[#F0E9D2]">
            <div className="sm:px-6 sm:first:pl-0">
              <p className="text-2xl font-extrabold text-[#E31B23]">
                Personalized
              </p>
              <p className="mt-1 text-xs font-medium text-neutral-500">
                Care built around your needs
              </p>
            </div>

            <div className="sm:px-6">
              <p className="text-2xl font-extrabold text-[#171717]">
                Goal-focused
              </p>
              <p className="mt-1 text-xs font-medium text-neutral-500">
                Focus on meaningful recovery
              </p>
            </div>

            <div className="sm:px-6 sm:last:pr-0">
              <p className="text-2xl font-extrabold text-[#171717]">
                Better movement
              </p>
              <p className="mt-1 text-xs font-medium text-neutral-500">
                Supporting an active lifestyle
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;