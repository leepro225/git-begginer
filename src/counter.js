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
        console.log('develop에 변경사항이 생겼습니다.');
    }

    reset() {
        this.value = 0;
        console.log('하나');
    }
}



