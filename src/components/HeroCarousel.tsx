import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, MessageCircle } from "lucide-react";

/**
 * ============================================================
 * HERO SLIDES - EDIT THIS ARRAY TO ADD/REMOVE/CHANGE SLIDES
 * ============================================================
 *
 * To ADD a new slide:
 *   1. Import the image at the top (e.g., import slideX from "@/assets/slides/slideX.jpeg")
 *   2. Add a new object to the `slides` array below.
 *
 * To REMOVE a slide:
 *   Delete its import line AND its entry from the `slides` array.
 *
 * To CHANGE slide order:
 *   Rearrange the objects in the array.
 *
 * ============================================================
 */
import slide1 from "@/assets/slides/slide1.jpeg";
import slide2 from "@/assets/slides/slide2.jpeg";
import slide3 from "@/assets/slides/slide3.jpeg";
import slide4 from "@/assets/slides/slide4.jpeg";
import slide5 from "@/assets/slides/slide5.jpeg";
import slide6 from "@/assets/slides/slide6.jpeg";
import slide7 from "@/assets/slides/slide7.jpeg";

const slides = [
  { src: slide1, alt: "Physio Plus - Movement is Medicine" },
  { src: slide2, alt: "Conditions we treat at Physio Plus" },
  { src: slide3, alt: "Don't let pain affect your quality of life" },
  { src: slide4, alt: "Risk factors of back pain" },
  { src: slide5, alt: "Bell's Palsy treatment" },
  { src: slide6, alt: "Trigger Finger treatment" },
  { src: slide7, alt: "Sciatica pain treatment" },
  // ← ADD NEW SLIDES HERE
];

const AUTO_SLIDE_INTERVAL = 4000; // ms between auto-slides

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = slides.length;

  const goTo = useCallback((index: number) => {
    setCurrent((index + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-slide
  useEffect(() => {
    timerRef.current = setInterval(next, AUTO_SLIDE_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  // Reset timer on manual navigation
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTO_SLIDE_INTERVAL);
  }, [next]);

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };

  // Touch/swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <section className="relative w-full overflow-hidden bg-foreground">
      {/* Slides */}
      <div
        className="relative w-full"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="absolute inset-0 h-full w-full object-contain bg-foreground"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card/80 text-foreground shadow-lg backdrop-blur transition-colors hover:bg-card md:left-4 md:h-12 md:w-12"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card/80 text-foreground shadow-lg backdrop-blur transition-colors hover:bg-card md:right-4 md:h-12 md:w-12"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetTimer(); }}
              className={`h-2.5 rounded-full transition-all ${
                i === current ? "w-7 bg-primary" : "w-2.5 bg-card/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA bar below carousel */}
      <div className="bg-primary px-4 py-4 md:py-5">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" variant="secondary" className="w-full sm:w-auto shadow-lg" asChild>
            <Link to="/book-appointment">
              <Calendar className="mr-2 h-4 w-4" /> Book Appointment
            </Link>
          </Button>
          <Button size="lg" className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg" asChild>
            <a href="tel:+916033497168">
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </a>
          </Button>
          <Button size="lg" className="w-full sm:w-auto bg-[hsl(142,70%,45%)] text-primary-foreground hover:bg-[hsl(142,70%,40%)] shadow-lg" asChild>
            <a href="https://wa.me/916033497168" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
