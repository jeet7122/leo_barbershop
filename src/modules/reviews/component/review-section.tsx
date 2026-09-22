"use client";

import { ArrowUpRight, Quote, Star } from "lucide-react";
import { motion } from "motion/react";
import {reviews} from "@/src/modules/reviews/data/reviewData";

const EASE = [0.22, 1, 0.36, 1] as const;

const googleWriteReviewUrl =
    "https://www.google.com/maps/place/Leo's+Barbershop/@42.3029401,-82.9969477,17z/data=!4m8!3m7!1s0x883b2b577c12545f:0x3f4bb7d4462016d9!8m2!3d42.3029402!4d-82.9920768!9m1!1b1!16s%2Fg%2F11ql8gm3tk?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D";

export function ReviewsSection() {
    return (
        <section
            id="reviews"
            className="bg-charcoal px-[clamp(1.25rem,4vw,4rem)] py-28 md:py-36 lg:py-44"
        >
            <div className="mx-auto max-w-[1440px]">

                {/* HEADER */}

                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.8,
                            ease: EASE,
                        }}
                    >
                        <div className="flex items-start gap-4">
                            <span className="mt-2 h-px w-8 bg-gold" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-bright">
                                Reviews
                            </span>
                        </div>

                        <h2 className="mt-8 max-w-xl font-display-family text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.04em] text-ivory">
                            What our
                            <span className="block text-ivory/35">
                                clients say.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-md text-sm leading-7 text-ivory/45 md:text-base">
                            Real experiences from clients who have visited
                            Leo&apos;s Barbershop.
                        </p>

                        {/* Google rating */}

                        <div className="mt-10 flex items-center gap-5">
                            <div>
                                <span className="font-display-family text-5xl text-ivory">
                                    4.9
                                </span>

                                <span className="ml-2 text-sm text-ivory/30">
                                    / 5
                                </span>
                            </div>

                            <div className="h-10 w-px bg-white/10" />

                            <div>
                                <div className="flex gap-1">
                                    {Array.from({ length: 5 }).map(
                                        (_, index) => (
                                            <Star
                                                key={index}
                                                size={13}
                                                fill="currentColor"
                                                className="text-gold-bright"
                                            />
                                        ),
                                    )}
                                </div>

                                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-ivory/30">
                                    Google Reviews
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Reviews */}

                    <div className="space-y-4">
                        {reviews.map((review, index) => (
                            <motion.article
                                key={`${review.name}-${index}`}
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.1,
                                    ease: EASE,
                                }}
                                className="group relative border border-white/10 bg-ink/40 p-7 transition-colors duration-500 hover:border-gold/30 md:p-9"
                            >
                                {/* Quote icon */}

                                <Quote
                                    size={20}
                                    strokeWidth={1.2}
                                    className="absolute right-7 top-7 text-gold/40"
                                />

                                {/* Stars */}

                                <div className="flex gap-1">
                                    {Array.from({
                                        length: review.rating,
                                    }).map((_, index) => (
                                        <Star
                                            key={index}
                                            size={12}
                                            fill="currentColor"
                                            className="text-gold-bright"
                                        />
                                    ))}
                                </div>

                                {/* Review */}

                                <p className="mt-6 max-w-2xl font-display-family text-xl leading-8 tracking-[-0.01em] text-ivory md:text-2xl md:leading-9">
                                    “{review.text}”
                                </p>

                                {/* Author */}

                                <div className="mt-7 flex items-center justify-between gap-6 border-t border-white/10 pt-5">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ivory">
                                            {review.name}
                                        </p>

                                        <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-ivory/30">
                                            {review.date.toTimeString()}
                                        </p>
                                    </div>

                                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gold/70">
                                        Google
                                    </span>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>

                {/* WRITE REVIEW */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: EASE,
                    }}
                    className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
                >
                    <div>
                        <p className="text-sm text-ivory/60">
                            Visited Leo&apos;s Barbershop?
                        </p>

                        <p className="mt-1 text-xs text-ivory/30">
                            Share your experience on Google.
                        </p>
                    </div>

                    <a
                        href={googleWriteReviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 border border-gold/40 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-bright transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
                    >
                        Write a Review

                        <ArrowUpRight
                            size={15}
                            strokeWidth={1.5}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}