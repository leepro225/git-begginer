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
    }

    reset() {
        this.value = 0;
        console.log('test-10 2commit!');
        console.log('긴급 버그 수정!');
    }
}



