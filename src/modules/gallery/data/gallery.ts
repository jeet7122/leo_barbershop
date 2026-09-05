export type GalleryItem = {
    src: string;
    alt: string;
    className?: string;
};

export const galleryItems: GalleryItem[] = [
    {
        src: "/images/gallery-finished-cut.jpg",
        alt: "Finished modern men's haircut with precision fade",
        className: "md:col-span-7 md:row-span-2",
    },
    {
        src: "/images/gallery-shave.jpg",
        alt: "Traditional hot towel shave and precision grooming",
        className: "md:col-span-5",
    },
    {
        src: "/images/gallery-haircut.jpg",
        alt: "Precision skin fade and textured men's haircut",
        className: "md:col-span-5",
    },
    {
        src: "/images/gallery-tool.jpg",
        alt: "Professional barber clippers, scissors, razor and grooming tools",
        className: "md:col-span-4",
    },
    {
        src: "/images/gallery-grooming.jpg",
        alt: "Precision beard grooming and detailing at Leo's Barber Shop",
        className: "md:col-span-3",
    },
];