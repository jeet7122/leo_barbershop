import { Navbar } from "@/src/components/layout/navbar";
import {BrandIntro, Hero} from "@/src/modules/home";
import {AboutSection} from "@/src/modules/about";
import {ServicesSection} from "@/src/modules/services";
import {GallerySection} from "@/src/modules/gallery";
import {LocationSection} from "@/src/modules/location";
import {FinalCTA} from "@/src/modules/contact";
import {Footer} from "@/src/components/layout/footer";
// import {IntroVideo} from "@/src/components/intro/IntroVideo";
import {ReviewsSection} from "@/src/modules/reviews";

export default function Home() {
    return (
        <>
            {/*<IntroVideo/>*/}
            <Navbar />


            <main className="min-h-screen bg-ink">
               <Hero/>
                <BrandIntro/>
                <AboutSection/>
                <ServicesSection/>
                <GallerySection/>
                <ReviewsSection/>
                <LocationSection/>
                <FinalCTA/>
            </main>
            <Footer/>
        </>
    );
}