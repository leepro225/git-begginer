class Counter {
    constructor() {
        this.value = 0;
        console.log('이번엔 충돌 없이 작업해볼게');
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
        console.log('디벨롭이 또 한 걸음 앞서 갔네요.');
    }

    reset() {
        this.value = 0;
        console.log('하나2');
        console.log('내가 이 코드를 빠뜨렸군요@');
        console.log('내가 이 코드를 빠뜨렸군요@');
    }
}



