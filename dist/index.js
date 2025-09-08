const steps = Array.from(document.querySelectorAll(".step"));
const fig = document.getElementById("fig");
steps.forEach(step => {
    const stepID = parseInt(step.getAttribute("stepId"));
    return new Waypoint({
        element: step,
        handler: function (direction) {
            const nextStep = direction === 'down' ? stepID : Math.max(0, stepID - 1);
            fig.innerText = nextStep.toString();
        },
        offset: "50%",
    });
});
export {};
//# sourceMappingURL=index.js.map