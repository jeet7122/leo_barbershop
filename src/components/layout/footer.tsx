import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { locationData } from "@/src/modules/location/data/location";

const navigation = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#gallery" },
    {label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
];

export function Footer() {
    const address = [
        locationData.address.street,
        locationData.address.city,
        locationData.address.province,
        locationData.address.postalCode,
    ]
        .filter(Boolean)
        .join(", ");

    return (
        <footer className="bg-ink px-[clamp(1.25rem,4vw,4rem)] pb-8 pt-20 md:pt-28">
            <div className="mx-auto max-w-[1440px]">
                {/* Main footer */}
                <div className="grid gap-16 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr] lg:gap-20">
                    {/* Brand */}
                    <div>
                        <a
                            href="#home"
                            className="inline-block font-display-family text-4xl tracking-[-0.02em] text-ivory transition-colors duration-300 hover:text-gold-bright md:text-5xl"
                        >
                            {siteConfig.name}
                        </a>

                        <p className="mt-5 max-w-sm font-display-family text-2xl leading-tight text-ivory/35 md:text-3xl">
                            {siteConfig.tagline}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-gold-bright">
                            Explore
                        </p>

                        <nav className="mt-6 flex flex-col gap-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="group flex w-fit items-center gap-2 text-xs text-ivory/45 transition-colors duration-300 hover:text-ivory"
                                >
                                    <span>{item.label}</span>

                                    <ArrowUpRight
                                        size={12}
                                        strokeWidth={1.4}
                                        className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                    />
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-gold-bright">
                            Visit
                        </p>

                        <div className="mt-6 space-y-4 text-xs leading-6 text-ivory/45">
                            {address && <p>{address}</p>}

                            <a
                                href={`tel:${siteConfig.contact.phone}`}
                                className="block transition-colors duration-300 hover:text-gold-bright"
                            >
                                {siteConfig.contact.phone}
                            </a>

                            {siteConfig.social.instagram && (
                                <a
                                    href={siteConfig.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block transition-colors duration-300 hover:text-gold-bright"
                                >
                                    Instagram
                                </a>
                            )}

                            {siteConfig.social.facebook && (
                                <a
                                    href={siteConfig.social.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block transition-colors duration-300 hover:text-gold-bright"
                                >
                                    Facebook
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-4 py-7 text-[9px] font-semibold uppercase tracking-[0.18em] text-ivory/20 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} {siteConfig.name}
                    </p>

                    <a href="https://jeet7122.github.io" rel="noopener noreferrer" target="_blank">
                        Designed and Developed by Jeet Thakkar
                    </a>

                    <p>
                        Windsor · Ontario
                    </p>
                </div>
            </div>
        </footer>
    );
}