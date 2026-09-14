"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function IntroVideo() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        // Prevent the intro from showing again during this session
        const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

        if (hasSeenIntro) {
            setShowIntro(false);
        }
    }, []);

    const finishIntro = () => {
        sessionStorage.setItem("hasSeenIntro", "true");
        setShowIntro(false);
    };

    return (
        <AnimatePresence>
            {showIntro && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-black"
                >
                    <video
                        autoPlay
                        muted
                        playsInline
                        onEnded={finishIntro}
                        className="h-full w-full object-fill"
                    >
                        <source src="/video/intro_video.mp4" type="video/mp4" />
                    </video>

                    <button
                        onClick={finishIntro}
                        className="absolute bottom-8 right-8 text-sm text-white/70 hover:text-white"
                    >
                        Skip Intro →
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}