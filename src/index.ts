// https://stackoverflow.com/questions/58182148/can-intersection-observer-be-used-to-calculate-trigger-at-specific-offset-top-of

const options = {
    root: null,  // Document's viewport
    rootMargin: "-200px 0px -200px 0px",
    scrollMargin: "0px",
    threshold: 1,
};


function callback(entries, observer) {
    entries.forEach((entry) => {
        console.log(entry);
        if (!entry.isIntersecting) {
            document.querySelector("#fig").textContent = entry.target.id;
        }
    })
}

const observer: IntersectionObserver = new IntersectionObserver(callback, options);

// observer.observe(document.querySelector(".step"));
document.querySelectorAll(".step").forEach(t => observer.observe(t));
// observer.observe();
