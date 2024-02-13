import Buyable from './Buyable';


export default class Movie implements Buyable {
    constructor (
        readonly id: number,
        readonly price: number,
        readonly name: string,
        readonly originalName: string,
        readonly year: number,
        readonly country: string,
        readonly tagline: string,
        readonly genre: string,
        readonly time: number
) { }
}

/*export class Movie:  Movie = {
    name: "Мстители",
    originalName: "The Avengers",
    year: 2012,
    country: "США",
    tagline: "Avengers Assemble!",
    genre: "фантастика, боевик, фэнтези, приключения",
    time: 137,
}*/

