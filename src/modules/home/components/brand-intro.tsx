"use client"
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "@/src/config/site";

export function BrandIntro() {
    return (
        <section className="bg-ink px-[clamp(1.25rem,4vw,4rem)] py-28 md:py-36 lg:py-44">
            <div className="mx-auto max-w-[1440px]">
                <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
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

                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-bright">
                                The Leo&apos;s Standard
                            </p>

                            <p className="mt-3 max-w-[180px] text-xs leading-6 text-ivory/40">
                                Precision, personality and a fresh
                                perspective on traditional barbering.
                            </p>
                        </div>
                    </motion.div>

                    {/* Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <p className="max-w-5xl font-display-family text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.98] tracking-[-0.035em] text-ivory">
                            Great grooming is more than a haircut.
                            <span className="text-ivory/35">
                                {" "}
                                It&apos;s how you carry yourself when you walk
                                out the door.
                            </span>
                        </p>

                        <div className="mt-12 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory/35">
                            <span>Discover {siteConfig.shortName}</span>

                            <ArrowDown
                                size={14}
                                strokeWidth={1.5}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}