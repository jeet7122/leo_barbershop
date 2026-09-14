"use client";

import {
    ArrowUpRight,
    Clock,
    MapPin,
    Navigation,
} from "lucide-react";
import { motion } from "motion/react";

import { siteConfig } from "@/src/config/site";
import { locationData } from "../data/location";

const EASE = [0.22, 1, 0.36, 1] as const;

export function LocationSection() {
    const { address, hours } = locationData;

    /**
     * Build the human-readable address once.
     */
    const fullAddress = [
        address.street,
        address.city,
        address.province,
        address.postalCode,
    ]
        .filter(Boolean)
        .join(", ");

    /**
     * Google Maps destination.
     *
     * Using /dir/?api=1 with a destination avoids sending the
     * visitor to a generic Google Maps search results page.
     */
    const googleMapsUrl = fullAddress
        ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            `Leo's Barbershop, ${fullAddress}`
        )}`
        : "#";

    /**
     * Embedded map.
     *
     * The iframe is intentionally kept address-based because
     * the embed does not need to send the user through search.
     */
    const mapEmbedUrl = fullAddress
        ? `https://www.google.com/maps?q=${encodeURIComponent(
            `Leo's Barbershop, ${fullAddress}`
        )}&output=embed`
        : "";

    const hasLocation = Boolean(fullAddress);

    return (
        <section
            id="location"
            className="overflow-hidden bg-ink px-[clamp(1.25rem,4vw,4rem)] py-28 md:py-36 lg:py-44"
        >
            <div className="mx-auto max-w-[1440px]">

                {/* ─────────────────────────────────────────────
                    SECTION HEADER
                ───────────────────────────────────────────── */}

                <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.7,
                            ease: EASE,
                        }}
                        className="flex items-start gap-4"
                    >
                        <span className="mt-2 h-px w-8 bg-gold" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-bright">
                            Visit Us
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.8,
                            ease: EASE,
                        }}
                    >
                        <h2 className="max-w-4xl font-display-family text-[clamp(3rem,6vw,6rem)] leading-[1.11] tracking-[-0.04em] text-ivory">
                            Find your way{" "}
                            <span className="text-ivory/35">
                                to Leo&apos;s.
                            </span>
                        </h2>

                        <p className="mt-9 max-w-lg text-sm leading-7 text-ivory/45 md:text-base">
                            Step into the shop, take a seat, and leave looking
                            and feeling your best.
                        </p>
                    </motion.div>
                </div>

                {/* ─────────────────────────────────────────────
                    LOCATION CONTENT
                ───────────────────────────────────────────── */}

                <div className="mt-20 grid gap-4 md:mt-28 lg:grid-cols-[1.15fr_0.85fr]">

                    {/* ─────────────────────────────────────────
                        MAP
                    ───────────────────────────────────────── */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.9,
                            ease: EASE,
                        }}
                        className="group relative min-h-[420px] overflow-hidden bg-charcoal md:min-h-[560px]"
                    >
                        {mapEmbedUrl ? (
                            <iframe
                                title="Leo's Barbershop location"
                                src={mapEmbedUrl}
                                className="absolute inset-0 h-full w-full border-0 grayscale-[0.8] contrast-[1.05] transition-all duration-700 group-hover:grayscale-[0.35]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-charcoal">
                                <div className="text-center">
                                    <MapPin
                                        size={28}
                                        strokeWidth={1.2}
                                        className="mx-auto text-gold"
                                    />

                                    <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory/40">
                                        Location coming soon
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Map Overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-black/10" />

                        {/* Map Label */}
                        <div className="pointer-events-none absolute left-5 top-5 md:left-7 md:top-7">
                            <div className="flex items-center gap-3 border border-white/15 bg-black/75 px-4 py-3 backdrop-blur-md">
                                <MapPin
                                    size={14}
                                    strokeWidth={1.4}
                                    className="text-gold"
                                />

                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ivory">
                                    Leo&apos;s Barbershop
                                </span>
                            </div>
                        </div>

                        {/* Open in Google Maps */}
                        {hasLocation && (
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Get directions to Leo's Barbershop"
                                className="group/directions absolute bottom-5 left-5 inline-flex items-center gap-3 border border-white/20 bg-black/75 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold md:bottom-7 md:left-7"
                            >
                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ivory transition-colors duration-300 group-hover/directions:text-ink">
                                    Open in Google Maps
                                </span>

                                <ArrowUpRight
                                    size={13}
                                    strokeWidth={1.4}
                                    className="text-gold transition-all duration-300 group-hover/directions:translate-x-0.5 group-hover/directions:-translate-y-0.5 group-hover/directions:text-ink"
                                />
                            </a>
                        )}
                    </motion.div>

                    {/* ─────────────────────────────────────────
                        INFORMATION PANEL
                    ───────────────────────────────────────── */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.1,
                            ease: EASE,
                        }}
                        className="flex flex-col bg-charcoal p-7 md:p-10 lg:p-12"
                    >

                        {/* Address */}
                        <div>
                            <div className="flex items-center gap-3">
                                <MapPin
                                    size={16}
                                    strokeWidth={1.4}
                                    className="text-gold"
                                />

                                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-ivory/35">
                                    Address
                                </span>
                            </div>

                            <div className="mt-5 text-sm leading-7 text-ivory/65">
                                {address.street ? (
                                    <>
                                        <p>{address.street}</p>

                                        <p>
                                            {address.city},{" "}
                                            {address.province}{" "}
                                            {address.postalCode}
                                        </p>
                                    </>
                                ) : (
                                    <p>
                                        {address.city},{" "}
                                        {address.province},{" "}
                                        {address.country}
                                    </p>
                                )}
                            </div>

                            {/* Directions */}
                            {hasLocation && (
                                <a
                                    href={googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Get directions to Leo's Barbershop"
                                    className="group mt-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-bright"
                                >
                                    <span>Get Directions</span>

                                    <Navigation
                                        size={13}
                                        strokeWidth={1.4}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </a>
                            )}
                        </div>

                        {/* Divider */}
                        <div className="my-10 h-px bg-white/10" />

                        {/* Hours */}
                        <div>
                            <div className="flex items-center gap-3">
                                <Clock
                                    size={16}
                                    strokeWidth={1.4}
                                    className="text-gold"
                                />

                                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-ivory/35">
                                    Hours
                                </span>
                            </div>

                            <div className="mt-5 space-y-3">
                                {hours.map(({ day, hours: openingHours }) => (
                                    <div
                                        key={day}
                                        className="flex items-center justify-between gap-6 text-xs"
                                    >
                                        <span className="text-ivory/50">
                                            {day}
                                        </span>

                                        <span className="text-right text-ivory/70">
                                            {openingHours || "—"}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Phone CTA */}
                        <div className="mt-auto pt-10">
                            <a
                                href={`tel:${siteConfig.contact.phone}`}
                                aria-label={`Call ${siteConfig.shortName}`}
                                className="group flex w-full items-center justify-between border border-gold/40 px-5 py-4 transition-all duration-300 hover:border-gold hover:bg-gold"
                            >
                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory transition-colors duration-300 group-hover:text-ink">
                                    Call {siteConfig.shortName}
                                </span>

                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={1.4}
                                    className="text-gold transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink"
                                />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}