import { checkOutput } from "./controller";

const toggleTemp = (unit) => {
    if (checkOutput()) {
        let tempC = document.querySelector('#temp-c');
        let tempF = document.querySelector('#temp-f');
        let rgTempc = document.querySelector('.rg-tempc');
        let rgTempf = document.querySelector('.rg-tempf');

        if (unit === 'C') {
            tempF.classList.add('hidden');
            tempC.classList.remove('hidden');
            rgTempc.classList.remove('hidden');
            rgTempf.classList.add('hidden');
            rgTempc.classList.remove('hidden');
        }
        else if (unit === 'F') {
            tempC.classList.add('hidden');
            tempF.classList.remove('hidden');
            rgTempf.classList.remove('hidden');
            rgTempc.classList.add('hidden');
            rgTempf.classList.remove('hidden');
        }
    }
}

export { toggleTemp }