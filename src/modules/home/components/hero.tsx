"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

import { siteConfig } from "@/src/config/site";

export function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-ink"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <motion.div
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 1.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative h-full w-full"
                >
                    <Image
                        src="/images/hero_image.png"
                        alt="Leo's Barber Shop"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </motion.div>

                {/* Dark cinematic overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Left-side gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/20" />

                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-[clamp(1.25rem,4vw,4rem)] pb-16 pt-32 md:pb-20 lg:pb-24">
                <div className="max-w-4xl">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.25,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mb-6 flex items-center gap-3"
                    >
                        <span className="h-px w-8 bg-gold" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-bright">
                            Est. 2026 · Windsor, Ontario
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-4xl font-display-family text-[clamp(4rem,10vw,9rem)] leading-[0.82] tracking-[-0.045em] text-ivory"
                    >
                        Feel Fresh.
                        <br />
                        <span className="text-ivory/75">Look Great.</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 max-w-md text-sm leading-7 text-ivory/65 md:text-base"
                    >
                        Precision barbering, personal service, and timeless
                        style — crafted for the modern gentleman.
                    </motion.p>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-9 flex flex-col gap-3 sm:flex-row"
                    >
                        <a
                            href={`tel:${siteConfig.contact.phone}`}
                            className="group inline-flex w-fit items-center gap-4 bg-gold px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:bg-gold-bright"
                        >
                            <Phone
                                size={15}
                                strokeWidth={1.5}
                            />

                            <span>Call Now</span>

                            <ArrowUpRight
                                size={15}
                                strokeWidth={1.5}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </a>

                        <a
                            href="#gallery"
                            className="group inline-flex w-fit items-center gap-3 border border-white/25 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:border-white/50 hover:bg-white/10"
                        >
                            <span>Explore Our Work</span>

                            <ArrowDown
                                size={15}
                                strokeWidth={1.5}
                                className="transition-transform duration-300 group-hover:translate-y-1"
                            />
                        </a>
                    </motion.div>
                </div>

                {/* Bottom Information */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 1,
                    }}
                    className="mt-16 flex items-center justify-between border-t border-white/10 pt-5"
                >
                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory/45">
                        <MapPin
                            size={13}
                            strokeWidth={1.5}
                        />

                        <span>
                            {siteConfig.location.city},{" "}
                            {siteConfig.location.province}
                        </span>
                    </div>

                    <a
                        href="#about"
                        aria-label="Scroll to learn more"
                        className="hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory/45 transition-colors duration-300 hover:text-gold-bright sm:flex"
                    >
                        <span>Discover More</span>

                        <ArrowDown
                            size={13}
                            strokeWidth={1.5}
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}