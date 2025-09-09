// Access DOM elements
const steps = Array.from(document.querySelectorAll(".step")) as HTMLElement[];
const graphic: HTMLElement = document.getElementById("graphic")!;

// Set the sticky offset in CSS
const stickyOffset: string = "50%";
graphic.style.top = stickyOffset;

// Create a Waypoint object that updates the graphic when scrolling past each step
steps.forEach(step => {
    const stepID: number = parseInt(step.getAttribute("step-id")!);

    return new Waypoint({
		element: step,
		handler: function(direction) {
			const nextStep = direction === 'down' ? stepID : Math.max(0, stepID - 1)
			graphic.innerText = nextStep.toString();
		},
		offset: stickyOffset,
	})
});