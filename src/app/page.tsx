"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const skills = [
    { name: "MS Excel", icon: "📊" },
    { name: "Communication", icon: "💬" },
    { name: "HTML", icon: "🌐" },
    { name: "Next.js", icon: "⚡" },
    { name: "Canva", icon: "🎨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Web Development", icon: "💻" },
    { name: "Artificial Intelligence", icon: "🤖" },
    { name: "Rock Identification", icon: "🪨" },
    { name: "Geological Mapping", icon: "🗺️" },
    { name: "Problem Solving", icon: "🧠" },
  ];

  const projects = [
    {
      number: "01",
      icon: "🪨",
      category: "GEOLOGY",
      title: "Asif — Identification of Rocks",
      description:
        "An academic geology project focused on identifying rocks through their physical characteristics, texture, mineral composition, and geological properties.",
      tags: ["Geology", "Rock Identification", "Mineralogy"],
      gradient: "from-amber-500/20 via-orange-500/10 to-slate-900",
    },
    {
      number: "02",
      icon: "🌐",
      category: "WEB DEVELOPMENT",
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio showcasing my education, technical skills, academic interests, and projects using modern frontend technologies.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-blue-500/20 via-cyan-500/10 to-slate-900",
    },
    {
      number: "03",
      icon: "🗺️",
      category: "GEOLOGY & GIS",
      title: "Geological Mapping & DEM",
      description:
        "An academic project concept exploring geological maps and digital elevation models to visualize terrain and understand geological features.",
      tags: ["GIS", "DEM", "Earth Science"],
      gradient: "from-emerald-500/20 via-teal-500/10 to-slate-900",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );

    window.location.href = `mailto:awaiszahid37643@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080d1b] text-slate-100 selection:bg-blue-500/30 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080d1b]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-black shadow-lg shadow-blue-600/25">
              AZ
            </span>
            <span className="text-lg font-bold tracking-tight">
              Awais<span className="text-blue-400">.dev</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-blue-400"
                >
                  {item}
                </a>
              ),
            )}
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Let&apos;s Talk
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 px-3 py-2 text-xl text-slate-200 transition hover:border-blue-500 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/[0.07] bg-[#080d1b] px-5 py-4 md:hidden">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-blue-500/10 hover:text-blue-400"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative scroll-mt-24 px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:px-12 lg:pt-36"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/[0.12] blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              BS Geology Student · Aspiring Developer
            </div>

            <p className="mb-4 text-lg font-medium text-slate-400">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Muhammad
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Awais Zahid
              </span>
            </h1>

            <h2 className="mt-7 text-xl font-semibold text-slate-200 sm:text-2xl">
              Exploring the world of
              <br />
              <span className="text-blue-400">
                Geology, Web Development & AI.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              I&apos;m a BS Geology student at the University of Sargodha,
              passionate about Earth sciences and learning modern technology.
              I&apos;m developing my skills in web development, artificial
              intelligence, and digital tools to turn ideas into practical
              solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Explore My Work
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/[0.08]"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="text-blue-400">✦</span> Lifelong Learning
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
              <span className="flex items-center gap-2">
                <span className="text-blue-400">⌘</span> Science & Technology
              </span>
            </div>
          </div>

          {/* Profile Illustration */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-600/30 via-cyan-500/10 to-violet-600/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1426] shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-slate-500">
                  awais-portfolio.tsx
                </span>
                <span className="text-xs text-slate-500">TS</span>
              </div>

              <div className="p-6 font-mono text-sm leading-8 sm:p-8">
                <p className="text-slate-500">// A little about me</p>
                <p className="mt-3">
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-cyan-300">awais</span> = {"{"}
                </p>
                <p className="pl-5">
                  <span className="text-slate-300">name</span>:{" "}
                  <span className="text-emerald-300">
                    &quot;Awais Zahid&quot;
                  </span>
                  ,
                </p>
                <p className="pl-5">
                  <span className="text-slate-300">degree</span>:{" "}
                  <span className="text-emerald-300">
                    &quot;BS Geology&quot;
                  </span>
                  ,
                </p>
                <p className="pl-5">
                  <span className="text-slate-300">university</span>:{" "}
                  <span className="text-emerald-300">
                    &quot;University of Sargodha&quot;
                  </span>
                  ,
                </p>
                <p className="pl-5 text-slate-300">interests: [</p>
                <p className="pl-10 text-emerald-300">
                  &quot;Web Development&quot;,
                </p>
                <p className="pl-10 text-emerald-300">
                  &quot;Artificial Intelligence&quot;,
                </p>
                <p className="pl-10 text-emerald-300">
                  &quot;Geology & GIS&quot;
                </p>
                <p className="pl-5 text-slate-300">],</p>
                <p className="pl-5">
                  <span className="text-slate-300">mindset</span>:{" "}
                  <span className="text-emerald-300">
                    &quot;Keep learning&quot;
                  </span>
                </p>
                <p>{"};"}</p>
                <p className="mt-4 animate-pulse text-blue-400">▋</p>
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.07] bg-white/[0.02] px-6 py-4">
                <span className="text-xs text-slate-500">
                  Building skills every day
                </span>
                <span className="flex items-center gap-2 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Learning mode
                </span>
              </div>
            </div>

            <div className="absolute -left-5 top-12 hidden rounded-2xl border border-white/10 bg-[#111b30] p-4 shadow-xl sm:block">
              <span className="text-2xl">🪨</span>
              <p className="mt-2 text-xs font-semibold text-slate-300">
                Earth Sciences
              </p>
            </div>

            <div className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-white/10 bg-[#111b30] p-4 shadow-xl sm:block">
              <span className="text-2xl">💻</span>
              <p className="mt-2 text-xs font-semibold text-slate-300">
                Future Developer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-20 border-y border-white/[0.06] bg-white/[0.015] px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              About Me
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Curious mind.
              <br />
              <span className="text-blue-400">Growing skills.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-400">
              I&apos;m Muhammad Awais Zahid, a BS Geology student at the
              University of Sargodha, Pakistan. My academic interests include
              rock identification, mineralogy, geological mapping, and
              understanding the Earth&apos;s structure.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-400">
              Alongside my degree, I&apos;m exploring web development and
              artificial intelligence. I enjoy learning new software,
              improving my communication skills, and using digital tools to
              present ideas creatively. My goal is to keep learning and
              connect scientific knowledge with modern technology.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.07] bg-[#0d1426] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30">
                <span className="text-2xl">🎓</span>
                <h3 className="mt-3 font-bold">Education</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  BS Geology
                  <br />
                  University of Sargodha
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-[#0d1426] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30">
                <span className="text-2xl">🚀</span>
                <h3 className="mt-3 font-bold">My Focus</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Web Development
                  <br />
                  AI, GIS & Earth Sciences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              My Toolkit
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Skills & <span className="text-blue-400">interests.</span>
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Practical skills and technical areas I&apos;m developing through
              academic study and independent learning.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#0d1426] px-5 py-3 text-sm font-medium text-slate-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/[0.08] hover:text-blue-300"
              >
                <span>{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>

          <p className="mt-7 text-center text-sm text-slate-500">
            Continuously learning, practising, and improving.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-20 border-y border-white/[0.06] bg-white/[0.015] px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                My Work
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Projects & <span className="text-blue-400">ideas.</span>
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                Academic work and technology concepts reflecting my interests
                in geology, digital tools, and web development.
              </p>
            </div>
            <span className="text-sm text-slate-500">01 — 03 / Projects</span>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0d1426] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-950/20"
              >
                <div
                  className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.12),transparent_65%)]" />
                  <div className="absolute left-5 top-5 text-xs font-semibold tracking-widest text-slate-400">
                    PROJECT / {project.number}
                  </div>
                  <span className="relative text-6xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    {project.icon}
                  </span>
                  <span className="absolute bottom-4 right-5 text-xs text-slate-500">
                    Academic & Learning
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-bold tracking-[0.17em] text-blue-400">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-bold transition-colors group-hover:text-blue-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 min-h-[120px] text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-5 text-sm">
                    <span className="text-slate-500">Learning journey</span>
                    <span className="text-lg text-blue-400 transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="pointer-events-none absolute bottom-0 left-1/2 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/[0.10] blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Get in Touch
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Let&apos;s connect
              <br />
              and <span className="text-blue-400">collaborate.</span>
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-slate-400">
              Have a project idea, an academic question, or an interest in
              geology and technology? Feel free to send me a message.
              I&apos;m always happy to connect with fellow learners.
            </p>

            <div className="mt-9 space-y-5">
              <a
                href="mailto:awaiszahid37643@gmail.com"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl transition group-hover:bg-blue-500/20">
                  ✉️
                </span>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="mt-1 break-all font-medium text-slate-200 transition group-hover:text-blue-400">
                    awaiszahid37643@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/awaiszahid37643-cell"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl transition group-hover:bg-blue-500/20">
                  💻
                </span>
                <div>
                  <p className="text-sm text-slate-500">GitHub</p>
                  <p className="mt-1 font-medium text-slate-200 transition group-hover:text-blue-400">
                    View My Repositories ↗
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl">
                  📍
                </span>
                <div>
                  <p className="text-sm text-slate-500">University</p>
                  <p className="mt-1 font-medium text-slate-200">
                    University of Sargodha, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-[#0d1426]/90 p-6 shadow-2xl shadow-black/20 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[390px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-3xl">
                  ✉️
                </span>
                <h3 className="mt-6 text-2xl font-bold">Email draft opened</h3>
                <p className="mt-3 max-w-sm leading-7 text-slate-400">
                  If your email application opened, review the message and
                  press Send to deliver it. If it didn&apos;t open, email me
                  directly at awaiszahid37643@gmail.com.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="mt-7 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold transition hover:border-blue-400/50 hover:text-blue-300"
                >
                  Write Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-[#080d1b] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#080d1b] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Write your message here..."
                    className="w-full resize-y rounded-xl border border-white/10 bg-[#080d1b] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  Send Email
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  This form opens your default email application. No backend
                  is required.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.07] bg-[#060a14] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <a href="#home" className="text-lg font-bold tracking-tight">
            Awais<span className="text-blue-400">.dev</span>
          </a>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Muhammad Awais Zahid. Built with
            curiosity and code.
          </p>

          <a
            href="#home"
            className="text-sm text-slate-400 transition-colors hover:text-blue-400"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}