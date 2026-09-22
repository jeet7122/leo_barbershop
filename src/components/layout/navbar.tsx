"use client";

import { Menu, X, CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/src/config/site";
import Image from "next/image";

const navigation = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#gallery" },
    {label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? "border-b border-white/10 bg-ink/90 backdrop-blur-xl"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-[clamp(1.25rem,4vw,4rem)]">
                {/* Brand */}
                <a
                    href="/"
                    aria-label={`${siteConfig.name} home`}
                    className="group relative z-10 flex items-center"
                >
                    <Image
                        src="/images/logo.png"
                        alt={siteConfig.name}
                        width={120}
                        height={120}
                        priority
                        className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav
                    aria-label="Main navigation"
                    className="hidden items-center gap-8 md:flex"
                >
                    {navigation.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="group relative py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/75 transition-colors duration-300 hover:text-ivory"
                        >
                            {item.label}

                            <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <a
                    href="https://leosbarbershopwindsor.setmore.com/book"
                    className="group hidden items-center gap-3 border border-gold/50 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink md:flex"
                >
                    <CalendarIcon
                        size={14}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:rotate-[-8deg]"
                    />

                    <span>Book Now</span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    className="relative z-10 flex h-11 w-11 items-center justify-center text-ivory md:hidden"
                >
                    {isMenuOpen ? (
                        <X size={22} strokeWidth={1.5} />
                    ) : (
                        <Menu size={22} strokeWidth={1.5} />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`fixed inset-0 z-0 flex min-h-screen flex-col bg-ink px-[clamp(1.25rem,4vw,4rem)] pt-32 transition-all duration-500 md:hidden ${
                    isMenuOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-4 opacity-0"
                }`}
            >
                <nav
                    aria-label="Mobile navigation"
                    className="flex flex-col"
                >
                    {navigation.map((item, index) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className="border-b border-white/10 py-6 font-display-family text-4xl text-ivory transition-colors duration-300 hover:text-gold-bright"
                            style={{
                                transitionDelay: isMenuOpen
                                    ? `${index * 60}ms`
                                    : "0ms",
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="https://leosbarbershopwindsor.setmore.com/book"
                    onClick={closeMenu}
                    className="mt-10 flex w-fit items-center gap-3 border border-gold bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink"
                >
                    <CalendarIcon size={15} strokeWidth={1.5} />
                    Book Now
                </a>
            </div>
        </header>
    );
}