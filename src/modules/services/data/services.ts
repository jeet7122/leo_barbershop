export type Service = {
    name: string;
    description: string;
    price: string;
    duration?: string;
};

export const services: Service[] = [
    {
        name: "Haircut",
        description:
            "A personalized cut tailored to your style, face shape, and preferred finish.",
        price: "CAD $20",
        duration: "25-30 minutes",
    },
    {
        name: "Haircut & Beard",
        description:
            "A complete grooming service combining a tailored haircut with a refined beard finish.",
        price: "CAD $35",
        duration: "35-40 minutes",
    },
    {
        name: "Beard Trim",
        description:
            "Precision shaping and detailing to keep your beard clean, balanced, and defined.",
        price: "CAD $15",
        duration: "10-15 minutes",
    },
    {
        name: "Kids Haircut",
        description:
            "A clean, comfortable haircut with attention to detail for younger clients.",
        price: "CAD $15",
        duration: "20-25 minutes",
    },
];