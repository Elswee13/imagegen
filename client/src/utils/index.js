import { surpriseMePrompts } from '../constants';
import FileSaver from 'file-saver';

export function getRandomPrompt(prompt){
    const randomIndex= Math.floor(
        Math.random() * surpriseMePrompts.length
    );
    const randomPrompt= surpriseMePrompts[randomIndex];

    // esto es para evitar recibir el mismo random prompt mas de 1 vez consecutivo
    if(randomPrompt === prompt)return getRandomPrompt(prompt);
    
    return randomPrompt;
}


export async function downloadImage(_id,photo){
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
