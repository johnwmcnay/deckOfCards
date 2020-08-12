class gameRules {
    constructor(rules) {
        this.currentStep = 0;
        this.steps = [] //an array of functions
    }

    addStep(stepFunction) {
        this.steps.push(stepFunction);
    }

    advance() {
        this.currentStep += 1;
        if (this.currentStep === this.steps.length) {
            this.currentStep = 0;
        }
    }
}