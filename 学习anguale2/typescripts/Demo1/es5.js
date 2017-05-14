function MyComponent() {
    this.age = 32;
    setTimeout(() => {
        this.age += 1;
        console.log(this.age);
    }, 1000);
}

new MyComponent();