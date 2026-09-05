"use client";

import { ArrowUpRight, Phone } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "@/src/config/site";

export function FinalCTA() {
    return (
        <section className="relative overflow-hidden bg-charcoal px-[clamp(1.25rem,4vw,4rem)] py-32 md:py-40 lg:py-48">
            {/* Atmospheric glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.035] blur-3xl" />

            <div className="relative mx-auto max-w-[1440px]">
                <div className="grid gap-16 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex items-start gap-4"
                    >
                        <span className="mt-2 h-px w-8 bg-gold" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-bright">
                            Your Next Cut
                        </span>
                    </motion.div>

                    {/* Main CTA */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.9,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="max-w-5xl font-display-family text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.86] tracking-[-0.045em] text-ivory"
                        >
                            Ready to feel{" "}
                            <span className="text-ivory/35">
                                fresh?
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-8 max-w-lg text-sm leading-7 text-ivory/45 md:text-base"
                        >
                            Give us a call and come experience precision
                            barbering, personal service, and a cut made for
                            you.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center"
                        >
                            <a
                                href={`tel:${siteConfig.contact.phone}`}
                                className="group inline-flex w-fit items-center gap-4 bg-gold px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-gold-bright"
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

                            <span className="text-xs tracking-[0.08em] text-ivory/35">
                                {siteConfig.contact.phone}
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}