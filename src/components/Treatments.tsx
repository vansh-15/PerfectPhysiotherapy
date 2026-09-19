import { motion } from "framer-motion";
import {
  Activity,
  Bone,
  Dumbbell,
  HeartPulse,
  Move,
  Sparkles,
} from "lucide-react";

const treatments = [
  {
    icon: Bone,
    title: "Orthopedic Rehabilitation",
    description:
      "Structured physiotherapy support for musculoskeletal pain, injuries and recovery.",
    image: "/images/treatment.webp",
  },
  {
    icon: Activity,
    title: "Pain Management",
    description:
      "Personalized care focused on reducing pain and improving everyday movement.",
    image: "/images/therapy.webp",
  },
  {
    icon: Move,
    title: "Mobility & Movement",
    description:
      "Improve flexibility, range of motion, balance and functional movement.",
    image: "/images/clinic.webp",
  },
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    description:
      "Progressive exercises designed to rebuild strength and support long-term recovery.",
    image: "/images/therapy.webp",
  },
  {
    icon: HeartPulse,
    title: "Post-Injury Recovery",
    description:
      "Guided rehabilitation to help you return safely to your normal activities.",
    image: "/images/treatment.webp",
  },
  {
    icon: Sparkles,
    title: "Personalized Physiotherapy",
    description:
      "A treatment approach adapted to your condition, goals and recovery journey.",
    image: "/images/doctor.webp",
  },
];

function Treatments() {
  return (
    <section
      id="treatments"
      className="relative overflow-hidden bg-[#faf9f7] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#b91c1c]/8 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#b91c1c]" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#b91c1c]">
              Our Treatments
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-[-0.035em] text-neutral-950 sm:text-5xl">
            Care designed around
            <span className="text-[#b91c1c]"> your recovery.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600">
            From pain management to rehabilitation, our approach focuses on
            helping you move better, feel stronger and get back to the things
            that matter.
          </p>
        </motion.div>

        {/* Treatment grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;

            return (
              <motion.article
                key={treatment.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  {/* Icon */}
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-[#b91c1c] shadow-lg backdrop-blur-sm">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-extrabold tracking-tight text-neutral-900">
                    {treatment.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-500">
                    {treatment.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#b91c1c]">
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Treatments;