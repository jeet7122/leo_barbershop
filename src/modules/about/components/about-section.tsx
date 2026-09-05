"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import {siteConfig} from "@/src/config/site";

export function AboutSection() {
    return (
        <section
            id="about"
            className="overflow-hidden bg-charcoal px-[clamp(1.25rem,4vw,4rem)] py-28 md:py-36 lg:py-44"
        >
            <div className="mx-auto max-w-[1440px]">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-16 flex items-center gap-4 md:mb-20"
                >
                    <span className="h-px w-8 bg-gold" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-bright">
                        Meet Leo
                    </span>
                </motion.div>

                <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24 xl:gap-32">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/leo-about.png"
                                alt="Leo at his barber shop"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                        </div>

                        {/* Image detail */}
                        <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 border border-gold/40 bg-ink p-4 sm:block">
                            <div className="flex h-full flex-col justify-between">
                                <Image
                                    src="/images/logo.png"
                                    alt={siteConfig.name}
                                    width={120}
                                    height={120}
                                    priority
                                    className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="max-w-2xl font-display-family text-[clamp(2.75rem,5vw,5rem)] leading-[0.98] tracking-[-0.035em] text-ivory"
                        >
                            A haircut should feel{" "}
                            <span className="text-ivory/35">
                                personal.
                            </span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-10 max-w-xl space-y-5 text-sm leading-7 text-ivory/55 md:text-base"
                        >
                            <p>
                                Leo&apos;s Barber Shop was created with a
                                simple idea — great barbering should be
                                personal, precise, and built around the person
                                sitting in the chair.
                            </p>

                            <p>
                                Every cut is approached with attention to
                                detail, an understanding of individual style,
                                and the goal of making sure you leave feeling
                                confident in your look.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-12"
                        >
                            <a
                                href="#services"
                                className="group inline-flex items-center gap-4 border-b border-gold/50 pb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory transition-colors duration-300 hover:border-gold hover:text-gold-bright"
                            >
                                <span>Explore the Services</span>

                                <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}