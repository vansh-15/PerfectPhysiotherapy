import {
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";

const trustItems = [
  {
    icon: Stethoscope,
    title: "Professional Care",
    text: "Experienced physiotherapy guidance",
  },
  {
    icon: UserRoundCheck,
    title: "Personalized Plans",
    text: "Treatment tailored to your needs",
  },
  {
    icon: HeartPulse,
    title: "Recovery Focused",
    text: "Care designed around better movement",
  },
  {
    icon: ShieldCheck,
    title: "Patient First",
    text: "Comfort, safety and individual attention",
  },
];

function TrustBar() {
  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-neutral-200 px-6 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:px-8">
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-4 px-0 py-6 sm:px-5 lg:py-7"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b91c1c]/8 text-[#b91c1c]">
                <Icon size={20} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-neutral-500">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TrustBar;