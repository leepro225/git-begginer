class Calculator {
    constructor() {
        this.value = 0;
    }

    set(target) {
        target.innerText = this.value;
    }

    add(num) {
        this.value += 1; 
    }

    subtract(num) {
        this.value -= 1;
    }

    reset() {
        this.value = 0;
    }
}



