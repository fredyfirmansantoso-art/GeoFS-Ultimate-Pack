class Pushback {

    constructor() {
        this.enabled = false;
        this.speed = 0.6;
        this.direction = "back";
    }

    toggle() {
        this.enabled = !this.enabled;

        console.log(
            "[UltimatePack] Pushback",
            this.enabled ? "Enabled" : "Disabled"
        );
    }

    update() {

        if (!this.enabled) return;

        const aircraft = geofs.aircraft.instance;

        if (!aircraft) return;

        switch (this.direction) {

            case "back":
                aircraft.llaLocation[0] -= this.speed * 0.0000002;
                break;

            case "forward":
                aircraft.llaLocation[0] += this.speed * 0.0000002;
                break;

        }

    }

    left() {
        this.direction = "left";
    }

    right() {
        this.direction = "right";
    }

    forward() {
        this.direction = "forward";
    }

    backward() {
        this.direction = "back";
    }

}

window.Pushback = Pushback;
