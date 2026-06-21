import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Heart,
  BookOpen,
  Shield,
  Sparkles,
  Rocket,
  Star,
  ChevronDown,
  Music2,
  Pause,
  X,
  Mail,
  Images,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero-father.png";
import logo from "@/assets/logo_father.png";
import mChild from "@/assets/memory-childhood.jpeg";
import mChild2 from "@/assets/memory-childhood2.jpeg";
import mSchool from "@/assets/memory-school.jpeg";
import mAchieve from "@/assets/memory-achievement.jpeg";
import mDifficult from "@/assets/memory-difficult.jpg";
import mToday from "@/assets/memory-today.jpg";
import happy1 from "@/assets/happy1.jpeg";
import happy2 from "@/assets/happy2.jpeg";
import happy3 from "@/assets/happy3.jpeg";
import happy4 from "@/assets/happy4.jpg";
import happy5 from "@/assets/happy5.jpg";
import happy6 from "@/assets/happy6.jpg";
import happy7 from "@/assets/happy7.jpg";
import happy8 from "@/assets/happy8.jpg";
import happy9 from "@/assets/happy9.jpg";
import happy10 from "@/assets/happy10.jpg";
import happy11 from "@/assets/happy11.jpeg";
import happy12 from "@/assets/happy12.jpeg";

import { FloatingHearts, Starfield } from "@/components/Particles";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For Our Father ❤️ — A Tribute to Naveen Kumar Sharma" },
      {
        name: "description",
        content:
          "An emotional Father's Day tribute to Naveen Kumar Sharma — letters, memories, and gratitude for the world's best father.",
      },
      { property: "og:title", content: "For Our Father ❤️" },
      {
        property: "og:description",
        content: "A heartfelt Father's Day tribute to Naveen Kumar Sharma.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "icon",
        href: logo,
      }
    ]
  }),
  component: Home,
});

const FATHER = "Naveen Kumar Sharma";

const ROTATING = ["My Hero", "My Guide", "My Inspiration", "My Father"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROTATING[i];
    const speed = deleting ? 55 : 110;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((p) => (p + 1) % ROTATING.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="inline-flex items-baseline">
      <span className="shimmer-text font-display text-3xl font-semibold sm:text-5xl">{text || "\u00A0"}</span>
      <span className="caret ml-1 inline-block h-8 w-[3px] bg-[color:var(--gold)] sm:h-12" aria-hidden />
    </span>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());
  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2.2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, mv]);
  return (
    <span ref={ref} className="font-display gradient-gold-text text-5xl font-bold sm:text-6xl">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const LETTER = `Thank you for every sacrifice you made silently,
every lesson you taught patiently,
and every moment you stood beside me.

Your love became our confidence
and your support became our strength.

You are our first hero and our forever home, Papa.

Happy Father's Day. ❤️`;

function Letter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="paper relative mx-auto max-w-2xl rounded-2xl p-8 sm:p-14">
      <div className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rounded-sm bg-[color:var(--gold)]/30 backdrop-blur-sm" />
      <h3 className="font-hand text-4xl text-[color:var(--gold)] sm:text-5xl">Dear Dad,</h3>
      <p className="font-hand mt-6 whitespace-pre-line text-2xl leading-relaxed text-[color:var(--foreground)] sm:text-3xl">
        {LETTER.split("").map((ch, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: i * 0.018, duration: 0.01 }}
          >
            {ch}
          </motion.span>
        ))}
      </p>
      <div className="mt-8 flex items-center justify-between">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[color:var(--gold)]/50 to-transparent" />
        <span className="font-hand mx-4 text-2xl text-[color:var(--gold)]">— Your Children</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[color:var(--gold)]/50 to-transparent" />
      </div>
    </div>
  );
}

const TIMELINE = [
  { title: "Childhood", year: "The Beginning", img: mChild, text: "Carried me on your shoulders so I could see the world a little higher." },
  { title: "Childhood", year: "The Beginning", img: mChild2, text: "Carried me on your shoulders so I could see the world a little higher." },
  { title: "School Days", year: "Learning to Ride", img: mSchool, text: "You never let go of us — and We learned to trust myself." },
  { title: "First Achievement", year: "My Family Day", img: mAchieve, text: "Your eyes that day told us everything We needed to know." },
  { title: "Difficult Times", year: "Meditaion", img: mDifficult, text: "You sat with silence. That silence held everything together." },
  { title: "Today", year: "Side by Side", img: mToday, text: "Same laugh, same love — only the years between us have grown." },
];

function Timeline() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="relative">
      <div className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 sm:px-8">
        {TIMELINE.map((t, i) => (
          <motion.button
            key={t.title}
            onClick={() => setActive(i)}
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group relative w-[260px] flex-shrink-0 snap-center overflow-hidden rounded-2xl text-left sm:w-[320px]"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src={t.img}
                alt={t.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/95 via-[color:var(--navy)]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">{t.year}</p>
                <h4 className="font-display mt-1 text-2xl font-semibold">{t.title}</h4>
                <p className="mt-2 line-clamp-2 text-sm opacity-80">{t.text}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative w-full max-w-3xl overflow-hidden rounded-3xl"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white"
              >
                <X size={18} />
              </button>
              <img src={TIMELINE[active].img} alt="" className="aspect-video w-full object-cover" />
              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">{TIMELINE[active].year}</p>
                <h3 className="font-display mt-2 text-3xl">{TIMELINE[active].title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-[color:var(--muted-foreground)]">{TIMELINE[active].text}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const GALLERY = [
  { src: mChild, caption: "On your shoulders, on top of the world", span: "row-span-2" },
  { src: mSchool, caption: "The day you let go of the bike", span: "" },
  { src: mAchieve, caption: "First trophy — your eyes shone brighter", span: "" },
  { src: mToday, caption: "Still laughing at your jokes", span: "row-span-2" },
  { src: mDifficult, caption: "When the world was loud, you were still", span: "" },
  { src: happy1, caption: "The days that became our forever memories", span: "row-span-2" },
  { src: happy2, caption: "Every smile carried a thousand moments", span: "row-span-2" },
  { src: happy3, caption: "Growing up with your hand in mine", span: "row-span-2" },
  { src: happy4, caption: "The little moments that meant everything", span: "row-span-2" },
  { src: happy5, caption: "Laughing through every chapter together", span: "row-span-2" },
  { src: happy6, caption: "Where happiness always felt like home", span: "row-span-2" },
  { src: happy7, caption: "You made ordinary days unforgettable", span: "row-span-2" },
  { src: happy8, caption: "Every journey felt easier beside you", span: "row-span-2" },
  { src: happy9, caption: "Moments We will carry forever", span: "row-span-2" },
  { src: happy10, caption: "A lifetime of love in a single frame", span: "row-span-2" },
  { src: happy11, caption: "Still making memories, one smile at a time", span: "row-span-2" },
  { src: happy12, caption: "Walking through life together, always", span: "row-span-2" },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-4">
        {GALLERY.map((g, i) => (
          <motion.button
            key={i}
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className={`group relative overflow-hidden rounded-2xl ${g.span}`}
          >
            <img
              src={g.src}
              alt={g.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <p className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left text-sm font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {g.caption}
            </p>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              src={GALLERY[open].src}
              alt={GALLERY[open].caption}
              className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
            />
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white">
              {GALLERY[open].caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const QUALITIES = [
  { icon: Shield, title: "Protector", emoji: "🛡️", text: "Always the wall between me and the storm." },
  { icon: BookOpen, title: "Teacher", emoji: "📘", text: "Every lesson you taught still lives in me." },
  { icon: Heart, title: "Support System", emoji: "❤️", text: "The quiet certainty that someone has me." },
  { icon: Star, title: "Best Friend", emoji: "🌟", text: "The one We want to call first, every single time." },
  { icon: Rocket, title: "Inspiration", emoji: "🚀", text: "You dreamed for us before We knew how to dream." },
  { icon: Sparkles, title: "Superhero", emoji: "🦸", text: "No cape needed — just your steady hands." },
];

function Qualities() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {QUALITIES.map((q, i) => {
        const Icon = q.icon;
        return (
          <motion.div
            key={q.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="glass group relative overflow-hidden rounded-2xl p-7"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[color:var(--gold)]/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{q.emoji}</span>
                <Icon className="text-[color:var(--gold)]" size={22} />
              </div>
              <h3 className="font-display mt-4 text-2xl font-semibold">{q.title}</h3>
              <p className="mt-2 text-[color:var(--muted-foreground)]">{q.text}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function SurpriseMessage() {
  const [open, setOpen] = useState(false);
  const fire = () => {
    setOpen(true);
    const end = Date.now() + 2000;
    const colors = ["#F59E0B", "#FCD34D", "#FFF7ED", "#FBBF24"];
    (function frame() {
      confetti({ particleCount: 4, angle: 60, spread: 70, origin: { x: 0 }, colors });
      confetti({ particleCount: 4, angle: 120, spread: 70, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };
  return (
    <>
      <motion.button
        onClick={fire}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="group relative overflow-hidden rounded-full px-10 py-5 text-lg font-semibold text-[color:var(--navy)] shadow-[var(--shadow-glow)]"
        style={{ background: "var(--gradient-gold)" }}
      >
        <span className="relative z-10">✨ Open Special Message</span>
        <span className="absolute inset-0 -translate-x-full bg-white/40 transition-transform duration-700 group-hover:translate-x-full" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative max-w-xl rounded-3xl p-10 text-center"
            >
              <Heart className="mx-auto text-[color:var(--gold)]" size={48} fill="currentColor" />
              <p className="font-display mt-6 text-2xl leading-relaxed text-[color:var(--foreground)] sm:text-3xl">
                "No words can truly express what you mean to Us. Happy Father's Day. Thank you for being our father."
              </p>
              <p className="font-hand mt-6 text-2xl text-[color:var(--gold)]">— For {FATHER}</p>
              <button
                onClick={() => setOpen(false)}
                className="mt-8 rounded-full border border-[color:var(--gold)]/40 px-6 py-2 text-sm text-[color:var(--gold)] hover:bg-[color:var(--gold)]/10"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement>(null);
  const toggle = () => {
    if (!ref.current) return;
    if (playing) ref.current.pause();
    else ref.current.play().catch(() => {});
    setPlaying(!playing);
  };
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio
        ref={ref}
        loop
        preload="none"
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=relaxing-piano-music-112191.mp3"
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className="glass flex h-14 w-14 items-center justify-center rounded-full text-[color:var(--gold)] shadow-[var(--shadow-glow)] transition-transform hover:scale-110"
      >
        {playing ? <Pause size={20} /> : <Music2 size={20} />}
      </button>
    </div>
  );
}

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[color:var(--background)] text-[color:var(--foreground)]">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-40 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-display flex items-center gap-2 text-lg font-semibold">
              <img
                src={logo}
                alt="For Our Father"
                className="h-10 w-10 rounded-full object-cover border border-[color:var(--gold)]/40 shadow-lg transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top hover:translate-y-4 hover:scale-[6] hover:rotate-6 hover:shadow-[0_30px_60px_rgba(245,158,11,0.45)]"
              />
          <span>For Our Father</span>
        </a>
        <ThemeToggle />
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Father and child silhouette at sunset"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.78 }} />
        <Starfield />
        <FloatingHearts />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-hand text-2xl text-[color:var(--gold)] sm:text-3xl"
          >
            A tribute to
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-display mt-2 text-xl font-light tracking-[0.3em] uppercase text-white/80 sm:text-2xl"
          >
            {FATHER}
          </motion.h2>
          <h1 className="font-display mt-8 text-5xl font-bold leading-tight sm:text-7xl md:text-8xl">
            Happy Father's <br />
            <span className="gradient-gold-text inline-flex items-center gap-4">Day<img src={logo} alt="Father Logo" className=" inline-block align-middle h-20 w-20 rounded-full object-cover border border-[color:var(--gold)]/40 shadow-lg transition-all duration-700 hover:translate-y-4 hover:scale-[5] hover:rotate-6 hover:shadow-[0_30px_60px_rgba(245,158,11,0.45)] " /></span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            To the man who taught us strength, kindness, and how to dream bigger.
          </p>
          <div className="mt-10 flex min-h-[60px] items-center justify-center">
            <Typewriter />
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#letter"
              className="group relative overflow-hidden rounded-full px-8 py-4 font-semibold text-[color:var(--navy)] shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
              style={{ background: "var(--gradient-gold)" }}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                <Mail size={18} /> Read Our Message
              </span>
            </a>
            <a
              href="#memories"
              className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium text-white transition-transform hover:scale-105"
            >
              <Images size={18} /> Memories
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* LETTER */}
      <section id="letter" className="relative px-6 py-32">
        <SectionHeader eyebrow="A handwritten note" title="A Letter, From Our Heart" />
        <Letter />
      </section>

      {/* TIMELINE */}
      <section id="memories" className="relative px-0 py-32">
        <div className="px-6">
          <SectionHeader eyebrow="Through the years" title="Our Memory Timeline" />
        </div>
        <Timeline />
      </section>

      {/* GALLERY */}
      <section className="relative mx-auto max-w-7xl px-6 py-32">
        <SectionHeader eyebrow="Frozen moments" title="Photo Memories" />
        <Gallery />
      </section>

      {/* QUALITIES */}
      <section className="relative mx-auto max-w-7xl px-6 py-32">
        <SectionHeader eyebrow="Everything you are" title={`What You Means to Us`} />
        <Qualities />
      </section>

      {/* COUNTERS */}
      <section className="relative px-6 py-32">
        <div
          className="mx-auto max-w-6xl overflow-hidden rounded-3xl p-10 sm:p-16"
          style={{
            background: "linear-gradient(135deg, oklch(0.22 0.05 265), oklch(0.18 0.04 265))",
          }}
        >
          <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "∞", label: "Infinite Love", count: null },
              { value: 999, label: "Countless Sacrifices", count: 999 },
              { value: 365, label: "Endless Support, Daily", count: 365 },
              { value: 9999, label: "Lifetime Memories", count: 9999 },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                {s.count === null ? (
                  <span className="font-display gradient-gold-text text-6xl font-bold sm:text-7xl">∞</span>
                ) : (
                  <Counter to={s.count} suffix="+" />
                )}
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/70">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SURPRISE */}
      <section className="relative overflow-hidden px-6 py-32 text-center">
        <FloatingHearts count={10} />
        <SectionHeader eyebrow="One more thing" title="A Little Surprise For You" />
        <p className="mx-auto -mt-4 mb-10 max-w-xl text-[color:var(--muted-foreground)]">
          Tap the button. Some things are too big for words alone.
        </p>
        <SurpriseMessage />
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-[color:var(--border)] px-6 py-12 text-center">
        <img src={logo} alt="Father Logo" className=" inline-block align-middle h-20 w-20 rounded-full object-cover border border-[color:var(--gold)]/40 shadow-lg transition-all duration-700 hover:hover:scale-[3] hover:rotate-6 hover:shadow-[0_30px_60px_rgba(245,158,11,0.45)] " />
        <p className="font-display mt-3 text-lg">
          Made with love for the world's best father — <span className="gradient-gold-text font-semibold">{FATHER}</span> ❤️
        </p>
        <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
          © {new Date().getFullYear()} · A Father's Day tribute
        </p>
      </footer>

      <MusicPlayer />
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs uppercase tracking-[0.35em] text-[color:var(--gold)]"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display mt-3 text-4xl font-bold sm:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent"
      />
    </div>
  );
}
