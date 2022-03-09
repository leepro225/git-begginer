class Counter {
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
        console.log('둘');

    }

    reset() {
        this.value = 0;
        console.log('하나');
    }
}



