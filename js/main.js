const mySiema = new Siema({
    perPage: {
        0: 1,
        700: 2,
        1240: 3,
        1700: 4,
        2300: 5,
    },
    duration: 600,
    loop: true,
});
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());