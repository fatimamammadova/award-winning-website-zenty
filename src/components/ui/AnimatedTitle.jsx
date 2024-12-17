import gsap from "gsap";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const AnimatedTitle = ({ title, containerClass }) => {
  const conatinerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: conatinerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, conatinerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={conatinerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br/>").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

AnimatedTitle.propTypes = {
  title: PropTypes.string,
  containerClass: PropTypes.string,
};

export default AnimatedTitle;
