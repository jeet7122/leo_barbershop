"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { galleryItems } from "../data/gallery";

export function GallerySection() {
    return (
        <section
            id="gallery"
            className="bg-charcoal px-[clamp(1.25rem,4vw,4rem)] py-28 md:py-36 lg:py-44"
        >
            <div className="mx-auto max-w-[1440px]">
                {/* Header */}
                <div className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
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
                            The Work
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
                            Precision you can{" "}
                            <span className="text-ivory/35">
                                see.
                            </span>
                        </h2>

                        <p className="mt-9 max-w-lg text-sm leading-7 text-ivory/45 md:text-base">
                            A collection of the craft, atmosphere, and details
                            that define the Leo&apos;s experience.
                        </p>
                    </motion.div>
                </div>

                {/* Editorial gallery */}
                <div className="grid auto-rows-[240px] grid-cols-1 gap-3 sm:auto-rows-[280px] md:grid-cols-12 md:auto-rows-[260px] md:gap-4">
                    {galleryItems.map((item, index) => (
                        <motion.figure
                            key={item.src}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.1,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`group relative overflow-hidden bg-surface ${
                                item.className ?? ""
                            }`}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />

                            {/* Corner indicator */}
                            <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/0 bg-black/0 text-white opacity-0 transition-all duration-500 group-hover:border-white/30 group-hover:bg-black/30 group-hover:opacity-100">
                                <ArrowUpRight
                                    size={15}
                                    strokeWidth={1.4}
                                />
                            </div>
                        </motion.figure>
                    ))}
                </div>

                {/* Bottom line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-10 flex items-center justify-between border-t border-white/10 pt-5"
                >
                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-ivory/25">
                        Leo&apos;s Barber Shop
                    </span>

                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-ivory/25">
                        Windsor · Ontario
                    </span>
                </motion.div>
            </div>
        </section>
    );
}