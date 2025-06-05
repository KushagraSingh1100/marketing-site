import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./OurWork.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const worksleft = [
  {
    title: "Social Media Marketing",
    image: "/work1.jpg",
  },
  {
    title: "Web Design",
    image: "/work2.jpg",
  },
  {
    title: "Brand Identity",
    image: "/work3.jpg",
  },
  {
    title: "App Development",
    image: "/work3.jpg",
  },
  {
    title: "Video Production",
    image: "/work2.jpg",
  },
];
const worksright = [
  {
    title: "Social Media Marketing",
    image: "/work1.jpg",
  },
  {
    title: "Web Design",
    image: "/work2.jpg",
  },
  {
    title: "Brand Identity",
    image: "/work3.jpg",
  },
  {
    title: "App Development",
    image: "/work3.jpg",
  },
  {
    title: "Video Production",
    image: "/work2.jpg",
  },
];
export default function OurWork() {
  const containerRef = useRef(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    if (typeof gsap === "undefined" || !ScrollTrigger) {
      console.error("GSAP or ScrollTrigger not loaded");
      return;
    }

    const leftCards = document.querySelectorAll(".ourwork-card-left");
    const rightCards = document.querySelectorAll(".ourwork-card-right");

    gsap.set(leftCards, {
      rotateX: 90,
      y: 100,
      opacity: 0,
      transformOrigin: "center bottom",
    });

    gsap.set(rightCards, {
      rotateX: 90,
      y: 100,
      opacity: 0,
      transformOrigin: "center bottom",
    });

    leftCards.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          rotateX: 90,
          y: 100,
          opacity: 0,
          transformOrigin: "center bottom",
        },
        {
          rotateX: 0,
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 1, // <- smoother scrub, finishes as you reach 'end'
            // markers: true, // optional for debugging
          },
        }
      );
    });

    rightCards.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          rotateX: 90,
          y: 100,
          opacity: 0,
          transformOrigin: "center bottom",
        },
        {
          rotateX: 0,
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 1, // same here
            // markers: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="ourwork" ref={containerRef}>
      <h2 className="ourwork-title">Our Work</h2>
      <div className="ourwork-card-container">
        <div className="ourwork-left" ref={leftSectionRef}>
          {worksleft.map((work, index) => (
            <div key={index} className="ourwork-card ourwork-card-left">
              <img src={work.image} alt={work.title} className="ourwork-img" />
            </div>
          ))}
        </div>
        <div className="ourwork-right" ref={rightSectionRef}>
          {worksright.map((work, index) => (
            <div key={index} className="ourwork-card ourwork-card-right">
              <img src={work.image} alt={work.title} className="ourwork-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
