class Counter {
    constructor() {
        this.value = 0;
    }

    set(target) {
        target.innerText = this.value;
    }

    add(num) {
        this.value += 1; 
        console.log('이것은 test3의 작업물입니다');
    }

    subtract(num) {
        this.value -= 1;
        console.log('둘1');

    }

    reset() {
        this.value = 0;
        console.log('하나2');
    }
}



