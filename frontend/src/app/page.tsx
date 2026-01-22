import Link from "next/link";
import PrimaryButton from "@/components/PrimaryButton";

// 1. Scalable Data: Add new features here, not in the HTML
const features = [
  {
    title: "Track Projects",
    desc: "Log your builds and escape tutorial hell.",
    href: "/dashboard", 
  },
  {
    title: "Skill Tree",
    desc: "Visualize your progress like an RPG character.",
    href: "/skills",
  },
  {
    title: "Get Hired",
    desc: "Generate a PDF portfolio of your verified builds.",
    href: "/portfolio",
  },
  {
    title: "About me",
    desc: "Learn more about who I am and what I'm passionate about",
    href: "/about",
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24 bg-black text-white overflow-hidden">
      
      {/* HEADER: 'Glass' Effect Badge */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-white/10 bg-zinc-950/50 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-zinc-800/30 lg:p-4">
          Self Improvement OS &nbsp;
          <span className="font-bold text-green-500">Alpha v0.1</span>
        </p>
      </div>

      {/* HERO SECTION: Text + CSS Glow */}
      <div className="relative flex flex-col items-center place-items-center z-0 py-20">
        {/* Performance Note: We use a simple CSS blur instead of a heavy image file */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
        
        <h1 className="relative text-5xl md:text-7xl font-bold tracking-tighter text-center mb-8">
          Stop Learning. <br /> Start <span className="text-blue-500">Building.</span>
        </h1>
        <Link href="/dashboard">
        <PrimaryButton text="Sign up" />
        </Link>
      </div>

      {/* GRID SECTION: Mapped from data */}
      <div className="grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-3 lg:text-left gap-4">
        {features.map((feature, index) => (
          <Link
            key={index}
            href={feature.href}
            className="group rounded-lg border border-white/10 px-5 py-6 transition-colors hover:border-blue-500/50 hover:bg-zinc-900/50"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {feature.title}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-blue-500">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-60 text-gray-300">
              {feature.desc}
            </p>
          </Link>
        ))}

      </div>
    </main>
  );
}