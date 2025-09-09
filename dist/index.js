// Access DOM elements
const steps = Array.from(document.querySelectorAll(".step"));
const graphic = document.getElementById("graphic");
// Set the sticky offset in CSS
const stickyOffset = "50%";
graphic.style.top = stickyOffset;
// Create a Waypoint object that updates the graphic when scrolling past each step
steps.forEach(step => {
    const stepID = parseInt(step.getAttribute("step-id"));
    return new Waypoint({
        element: step,
        handler: function (direction) {
            const nextStep = direction === 'down' ? stepID : Math.max(0, stepID - 1);
            graphic.innerText = nextStep.toString();
        },
        offset: stickyOffset,
    });
});
export {};
//# sourceMappingURL=index.js.map