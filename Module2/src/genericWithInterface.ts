{

// interface - generic

interface Developer<T, X = null> {
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number
    }
    smartWatch: T;
    bike? : X
}

type EmilabWatch = {
    brand: string;
    model: string;
    display: string
}



const poorDeveloper : Developer<EmilabWatch> = {
    name: 'Meheraz',
    computer: {
        brand: 'HP',
        model: '840 G6',
        releaseYear: 2013
    },
    smartWatch: {
        brand: 'Emilab',
        model: 'kw66',
        display: 'OLED'
    }
}

interface AppleWatch {
    brand: string;
    model: string;
    display :string;
    heartTrack: boolean;
    sleepTrack: boolean;
}

interface YamahaBike {
    model: string;
    cc: string
}



const richDeveloper : Developer<AppleWatch, YamahaBike> = {
    name: 'Meheraz',
    computer: {
        brand: 'HP',
        model: '840 G6',
        releaseYear: 2018
    },
    smartWatch: {
        brand: 'Apple',
        model: 'sdfb',
        display: 'OLED HD',
        heartTrack: true,
        sleepTrack: true
    },
    bike: {
        model: 'Yamaha',
        cc: '100cc'
    }
}
























}