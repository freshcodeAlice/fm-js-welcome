/* Деструктуризація об'єктів */


const monitor = {
    sizes: {
        height: {
            value: 30,
            scale: 'cm'
        },
        width: {
            value: 50,
            scale: 'cm'
        }
    },
    brightness: 750,
    refresh: {
        value: 144,
        scale: 'Ggrc'
    },
    color: 'black',
    resolution: '4K'
}


monitor.color; // колір
monitor.sizes.height.value; // значення висоти

// const height = monitor.sizes.height.value;

//const {resolution, color: monitorColor} = monitor; //витягли значення monitor.resolution в нову змінну resolution, значення monitor.color в змінну monitorColor

const {sizes: {height: {value: heightValue}, width: {value: widthValue}}} = monitor;

//heightValue, widthValue - звичайні змінні
const {sizes:{height: {scale: heightScale}, width: {scale: widthScale}}} = monitor;

const {color, brightness, resolution, ...restOfMonitor} = monitor;



const options = {
    braces: {
        ///
    },
    settings: '...'
}

const {braces} = options;