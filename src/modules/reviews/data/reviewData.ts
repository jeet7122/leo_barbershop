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
        name: "Dan Kinny",
        rating: 5,
        text: "Appointment booked online and apparently there was a mistake and they were not supposed to be open. I arrived with my son and there was a man at the location but was not who i had booked with he was just there picking up a package and was not supposed to work that day. However being the gentleman he is, he took care of my son’s haircut. Did an amazing job too!! Thank you Leo for taking time out of your day off to go above and beyond!",
        date: new Date(2025, 7, 11),
    },
    {
        name: "Ashley B",
        rating: 5,
        text: "Have been bringing my now 6 year old to Urban Barber for at least a year now. We had tried several different barbers before that and either had trouble finding a barber who was comfortable cutting kids' hair or if they did they didn't do a great job or were so busy that it would be hard to get an appointment.\n" +
            "Our very first time at Urban Barber I was able to easily schedule an appointment online (and usually the same day or next day at the latest), we're able to see the same Barber every single time Leo who does a fantastic job, is incredibly patient with kids not sitting still well and gets his very thick hair cut within about 15mins) plus the Barber shop is clean, spacious and not super busy or overwhelming. We won't go anywhere else now!\n",
        date: new Date(2025, 8, 6),
    },
]