"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { services } from "../data/services";

export function ServicesSection() {
    return (
        <section
            id="services"
            className="bg-ink px-[clamp(1.25rem,4vw,4rem)] py-28 md:py-36 lg:py-44"
        >
            <div className="mx-auto max-w-[1440px]">
                {/* Header */}
                <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
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
                            Services
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <h2 className="max-w-4xl font-display-family text-[clamp(3rem,6vw,6rem)] leading-[1.11] tracking-[-0.04em] text-ivory">
                            Crafted for your{" "}
                            <span className="text-ivory/35">
                                style.
                            </span>
                        </h2>

                        <p className="mt-9 max-w-lg text-sm leading-7 text-ivory/45 md:text-base">
                            From a clean everyday cut to a complete grooming
                            experience, every service is finished with
                            precision and attention to detail.
                        </p>
                    </motion.div>
                </div>

                {/* Service list */}
                <div className="mt-20 border-t border-white/10 md:mt-28">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group border-b border-white/10"
                        >
                            <div className="grid gap-5 py-8 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-8 md:py-10">
                                {/* Number */}
                                <span className="font-mono text-[10px] tracking-[0.2em] text-ivory/25">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* Main content */}
                                <div>
                                    <div className="flex items-center gap-4">
                                        <h3 className="font-display-family text-3xl tracking-[-0.02em] text-ivory transition-colors duration-300 group-hover:text-gold-bright md:text-4xl lg:text-5xl">
                                            {service.name}
                                        </h3>

                                        <ArrowUpRight
                                            size={17}
                                            strokeWidth={1.4}
                                            className="text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                                        />
                                    </div>

                                    <p className="mt-3 max-w-xl text-xs leading-6 text-ivory/40 md:text-sm">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Price / duration */}
                                <div className="flex items-center gap-5 md:flex-col md:items-end md:gap-1">
                                    <span className="font-display-family text-2xl text-ivory md:text-3xl">
                                        {service.price}
                                    </span>

                                    {service.duration && (
                                        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ivory/30">
                                            {service.duration}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mt-8 flex items-start justify-between gap-8"
                >
                    <p className="max-w-md text-[10px] leading-5 text-ivory/25">
                        Services and pricing may be updated periodically.
                        Please contact Leo&apos;s Barber Shop for current
                        availability.
                    </p>

                    <span className="hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-ivory/20 sm:block">
                        Leo&apos;s Barber Shop
                    </span>
                </motion.div>
            </div>
        </section>
    );
}