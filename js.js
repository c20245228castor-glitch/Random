
gsap.registerPlugin(ScrollTrigger);

// INTRO LOADER AND HERO TIMELINE
const intro = gsap.timeline();

intro
.to(".loader h1", {
  opacity: 0,
    y: -30,
      duration: 1
      })
      .to(".loader", {
        yPercent: -100,
          duration: 1.2,
            ease: "power4.inOut"
            })
            .from(".hero-content > *", {
              opacity: 0,
                y: 50,
                  stagger: 0.2,
                    duration: 1,
                      ease: "power3.out"
                      }, "-=0.5");

                      // HERO PARALLAX
                      gsap.to(".hero-content", {
                        y: -150,
                          opacity: 0,
                            scrollTrigger: {
                                trigger: ".hero",
                                    start: "top top",
                                        end: "bottom top",
                                            scrub: true
                                              }
                                              });

                                              // INTRO SECTION
                                              gsap.from(".intro h2, .intro p", {
                                                opacity: 0,
                                                  y: 80,
                                                    stagger: 0.2,
                                                      duration: 1,
                                                        scrollTrigger: {
                                                            trigger: ".intro",
                                                                start: "top 70%",
                                                                    toggleActions: "play none none reverse"
                                                                      }
                                                                      });

                                                                      // MEMORY SECTION TIMELINE
                                                                      const memoryTimeline = gsap.timeline({
                                                                        scrollTrigger: {
                                                                            trigger: ".memory",
                                                                                start: "top 80%",
                                                                                    end: "bottom 30%",
                                                                                        scrub: 1
                                                                                          }
                                                                                          });

                                                                                          memoryTimeline
                                                                                          .from(".memory-image", {
                                                                                            opacity: 0,
                                                                                              x: -100,
                                                                                                scale: 0.9
                                                                                                })
                                                                                                .from(".music-symbol", {
                                                                                                  opacity: 0,
                                                                                                    scale: 0.3,
                                                                                                      rotation: -30
                                                                                                      }, "<")
                                                                                                      .from(".memory-text", {
                                                                                                        opacity: 0,
                                                                                                          x: 100
                                                                                                          }, "<");

                                                                                                          // TRUTH SECTION
                                                                                                          gsap.from(".truth h2", {
                                                                                                            opacity: 0,
                                                                                                              y: 100,
                                                                                                                duration: 1,
                                                                                                                  scrollTrigger: {
                                                                                                                      trigger: ".truth",
                                                                                                                          start: "top 65%",
                                                                                                                              toggleActions: "play none none reverse"
                                                                                                                                }
                                                                                                                                });

                                                                                                                                gsap.from(".whisper", {
                                                                                                                                  opacity: 0,
                                                                                                                                    y: 50,
                                                                                                                                      scrollTrigger: {
                                                                                                                                          trigger: ".whisper",
                                                                                                                                              start: "top 85%",
                                                                                                                                                  end: "top 45%",
                                                                                                                                                      scrub: true
                                                                                                                                                        }
                                                                                                                                                        });

                                                                                                                                                        // WISH SECTION
                                                                                                                                                        gsap.from(".wish h2", {
                                                                                                                                                          scale: 0.8,
                                                                                                                                                            opacity: 0,
                                                                                                                                                              scrollTrigger: {
                                                                                                                                                                  trigger: ".wish",
                                                                                                                                                                      start: "top 70%",
                                                                                                                                                                          end: "center center",
                                                                                                                                                                              scrub: 1
                                                                                                                                                                                }
                                                                                                                                                                                });

                                                                                                                                                                                // ENDING TIMELINE
                                                                                                                                                                                const endingTimeline = gsap.timeline({
                                                                                                                                                                                  scrollTrigger: {
                                                                                                                                                                                      trigger: ".ending",
                                                                                                                                                                                          start: "top 70%",
                                                                                                                                                                                              end: "center center",
                                                                                                                                                                                                  scrub: 1
                                                                                                                                                                                                    }
                                                                                                                                                                                                    });

                                                                                                                                                                                                    endingTimeline
                                                                                                                                                                                                    .from(".ending h1", {
                                                                                                                                                                                                      opacity: 0,
                                                                                                                                                                                                        y: 100,
                                                                                                                                                                                                          scale: 0.8
                                                                                                                                                                                                          })
                                                                                                                                                                                                          .from(".ending-content > p", {
                                                                                                                                                                                                            opacity: 0,
                                                                                                                                                                                                              y: 40
                                                                                                                                                                                                              }, "-=0.2")
                                                                                                                                                                                                              .from(".signature", {
                                                                                                                                                                                                                opacity: 0,
                                                                                                                                                                                                                  y: 30
                                                                                                                                                                                                                  }, "-=0.2")
                                                                                                                                                                                                                  .from(".end-date", {
                                                                                                                                                                                                                    opacity: 0
                                                                                                                                                                                                                    }, "-=0.2");
