// https://docs.google.com/forms/d/e/1FAIpQLSdrEFuT-s9LbLjJZ9duvj3cp8_hsS37fgzHiQjKRvCbJbpRyA/viewform

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Example usage:
const onInput = debounce((e) => {
    console.log("Debounced Input:", e.target.value);
}, 500);

document.getElementById("search").addEventListener("input", onInput);




function throttle(fn, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

// Example usage:
const onScroll = throttle(() => {
    console.log("Throttled Scroll Event");
}, 1000);

window.addEventListener("scroll", onScroll);














