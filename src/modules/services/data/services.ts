export type Service = {
    name: string;
    description: string;
    price: string;
    duration?: string
    image: string;
    bookLink?: string;
};

export const services: Service[] = [
    {
        name: "Haircut",
        description:
            "A clean, personalized haircut tailored to your style and finished with precision.",
        price: "CAD $20",
        duration: "20-25 minutes",
        image: "/images/services/haircut.jpg",
        bookLink: "https://leosbarbershopwindsor.setmore.com/book?step=time-slot&products=3f5b76ec-7067-44be-9074-f2d24826b947&type=service&staff=71a89899-07c8-438b-804e-e0ee8f1d612b&staffSelected=true"
    },
    {
        name: "Haircut Zero Fade",
        description:
            "A sharp zero fade with a clean blend and detailed finish for a crisp, modern look.",
        price: "CAD $25",
        duration: "25-30 minutes",
        image: "/images/services/fade_haircut.jpg",
        bookLink: "https://leosbarbershopwindsor.setmore.com/book?step=time-slot&products=7df47e73-42ec-450d-a2ae-42dd1ff977ab&type=service&staff=71a89899-07c8-438b-804e-e0ee8f1d612b&staffSelected=true",
    },
    {
        name: "Hair Colour",
        description:
            "Full hair colour service designed to refresh your look with an even, polished finish.",
        price: "CAD $30",
        duration: "15-20 minutes",
        image: "/images/services/hair_color.jpg",
    },
    {
        name: "Beard Trim & Line Up",
        description:
            "Precision beard shaping and line-up work for a clean, balanced, and defined finish.",
        price: "CAD $20",
        duration: "10-15 minutes",
        image: "/images/services/beard_trim.jpg",
        bookLink: "https://leosbarbershopwindsor.setmore.com/book?step=time-slot&products=42852cc7-9e9b-4726-bbab-34d20cea41b7&type=service&staff=71a89899-07c8-438b-804e-e0ee8f1d612b&staffSelected=true"
    },
    {
        name: "Beard Colour",
        description:
            "Natural-looking beard colour to refresh your appearance and complement your style.",
        price: "CAD $15",
        duration: "15-20 minutes",
        image: "/images/services/beard_color.jpg",
    },
    {
        name: "Wax",
        description:
            "Quick and precise waxing for a clean, well-groomed finish.",
        price: "CAD $10",
        duration: "15-20 minutes",
        image: "/images/services/facial_wax.jpg",
    },
    {
        name: "Threading",
        description:
            "Detailed eyebrow threading for clean shaping and a well-defined appearance.",
        price: "CAD $10",
        duration: "10-15 minutes",
        image: "/images/services/threading.jpg",
    },
    {
        name: "Full Service",
        description:
            "A complete grooming experience combining haircut, beard, and facial care.",
        price: "CAD $50",
        duration: "35-40 minutes",
        image: "/images/services/full_service.jpg",
        bookLink: "https://leosbarbershopwindsor.setmore.com/book?step=time-slot&products=14497251-cfb8-48e9-89b2-f60a7be89d18&type=service&staff=71a89899-07c8-438b-804e-e0ee8f1d612b&staffSelected=true"
    },
    {
        name: "Facial",
        description:
            "A deep cleansing facial designed to refresh, cleanse, and care for your skin.",
        price: "CAD $15",
        duration: "15-20 minutes",
        image: "/images/services/facial.jpg",
    },
    {
        name: "Shampoo",
        description:
            "A refreshing hair wash to cleanse and leave your hair feeling fresh and renewed.",
        price: "CAD $5",
        duration: "5-10 minutes",
        image: "/images/services/shampoo.jpg",
    },
    {
        name: "Kids Haircut",
        description:
            "A clean, comfortable haircut with attention to detail for younger clients.",
        price: "CAD $15",
        duration: "15-20 minutes",
        image: "/images/services/kids_haircut.jpg",
        bookLink: "https://leosbarbershopwindsor.setmore.com/book?step=time-slot&products=f0f1204b-445b-4066-8015-db4fddc4e6db&type=service&staff=71a89899-07c8-438b-804e-e0ee8f1d612b&staffSelected=true"
    },
];