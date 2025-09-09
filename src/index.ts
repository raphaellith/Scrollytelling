// Access DOM elements
const steps = Array.from(document.querySelectorAll(".step")) as HTMLElement[];
const graphic: HTMLElement = document.getElementById("graphic")!;

// The sticky offset will be read from CSS
const stickyOffset: string = graphic.style.top;

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