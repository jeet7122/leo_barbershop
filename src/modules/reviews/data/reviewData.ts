export type Review = {
    name: string,
    rating: number,
    text: string,
    date: Date,
}

export const reviews: Review[] = [
    {
        name: "Veysel Gencel",
        rating: 5,
        text: "Honestly one of the best barbers around 🔥 My boy really knows what he’s doing. Great atmosphere, clean shop, and the cut always comes out fresh. Definitely recommend checking this place out 💯\n",
        date: new Date(2025, 6, 12),
    },
    {
        name: "Naitya",
        rating: 5,
        text: "Leo is been my barber since last two years and he never disappointed me. He recently bought a new shop and started his own business.He is professional and clearly understands the customer's needs. I highly recommend coming here.",
        date: new Date(2025, 7, 13),
    },
    {
        name: "Rutvik Gajjar",
        rating: 5,
        text: "Leo has always been the best barber in the town. More than a barber he is a friend to his every customer. I will highly recommend everyone to visit this place!",
        date: new Date(2025, 7, 11),
    },
    {
        name: "D Bal",
        rating: 5,
        text: "New ownership by Leo. A great young Barber with an outstanding work ethic. Gives great haircuts and super polite and friendly.",
        date: new Date(2025, 8, 6),
    },
]