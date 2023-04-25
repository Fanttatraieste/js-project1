//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [
    {
        quote:`"Whatever you are, be a good one."`,
        person:`Abraham Lincoln`
    },
    {
        quote:`"I have not failed. I've just found 10,000 ways that won't work."`,
        person:`Thomas Edison`
    },
    {
        quote:`"That which does not kill us makes us stronger."`,
        person:`Friedrich Nietzsche`
    },
    {
        quote:`"The mind is like an iceberg, it floats with one-seventh of its bulk above water."`,
        person:`Sigmund Freud`
    },
    {
        quote:`"Make the lie big, make it simple, keep saying it, and eventually they will believe it."`,
        person:`Adolf Hitler`
    },
    {
        quote:`"Believe you can and you're halfway there."`,
        person:`Teddy Roosevelt`
    },
    {
        quote:`"Success is not final, failure is not fatal: it is the courage to continue that counts."`,
        person:`Winston Churchill`
    },
    {
        quote:`"Without music, life would be a mistake."`,
        person:`Friedrich Nietzsche`
    },
    {
        quote:`"He who has a why to live can bear almost any how."`,
        person:`Friedrich Nietzsche`
    },
    {
        quote:`"And those who were seen dancing were thought to be insane by those who could not hear the music."`,
        person:`Friedrich Nietzsche`
    },
    {
        quote:`"The interpretation of dreams is the royal road to a knowledge of the unconscious activities of the mind."`,
        person:`Sigmund Freud`
    },
    {
        quote:`"The only source of knowledge is experience."`,
        person:`Albert Einstein`
    },
    {
        quote:`"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge."`,
        person:`Stephen Hawking`
    },
    {
        quote:`"A single death is a tragedy; a million deaths is a statistic."`,
        person:`Joseph Stalin`
    },
    {
        quote:`"Ideas are more powerful than guns. We would not let our enemies have guns, why should we let them have ideas?"`,
        person:`Joseph Stalin`
    },
    {
        quote:`"Religion is the opium of the people."`,
        person:`Karl Marx`
    },
    {
        quote:`"An ounce of action is worth a ton of theory."`,
        person:`Friedrich Engels`
    },
    {
        quote:`"Social progress can be measured by the social position of the female sex."`,
        person:`Friedrich Engels`
    },
    {
        quote:`"The ruling ideas of each age have ever been the ideas of its ruling class."`,
        person:`Friedrich Engels`
    },
    {
        quote:`"It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change."`,
        person:`Charles Darwin`
    },
    {
        quote:`"A man who dares to waste one hour of time has not discovered the value of life."`,
        person:`Charles Darwin`
    },
    {
        quote:`"Ability is of little account without opportunity."`,
        person:`Napoleon Bonaparte`
    },
    {
        quote:`"I came, I saw, I conquered."`,
        person:`Julius Caesar`
    },
    {
        quote:`"Men are nearly always willing to believe what they wish."`,
        person:`Julius Caesar`
    },
    {
        quote:`"We are what we repeatedly do. Excellence, then, is not an act, but a habit."`,
        person:`Aristotle`
    },
    {
        quote:`"The whole is greater than the sum of its parts."`,
        person:`Aristotle`
    },
    {
        quote:`"Eureka!"`,
        person:`Archimedes`
    },
    {
        quote:`"Give me a lever long enough and a fulcrum on which to place it, and I shall move the world."`,
        person:`Archimedes`
    },
    {
        quote:`"The only way to learn mathematics is to do mathematics."`,
        person:`Euclid`
    },
    {
        quote:`"Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek."`,
        person:`Barack Obama`
    },
    {
        quote:`"If we could accept ourselves exactly as we are, we would not only be more content, but we would have a better chance of changing."`,
        person:`Joseph Breuer`
    },
    {
        quote:`"Everyone thinks of changing the world, but no one thinks of changing himself."`,
        person:`Leo Tolstoy`
    },
    {
        quote:`"There are decades where nothing happens; and there are weeks where decades happen."`,
        person:`Vladimir Lenin`
    },
    {
        quote:`"The oppressed are allowed once every few years to decide which particular representatives of the oppressing class are to represent and repress them."`,
        person:`Vladimir Lenin`
    },
    {
        quote:`"It is better to be feared than loved, if you cannot be both."`,
        person:`Niccolò Machiavelli`
    },
    {
        quote:`"The ends justify the means."`,
        person:`Niccolò Machiavelli`
    },
    {
        quote:`"Art is never finished, only abandoned."`,
        person:`Leonardo da Vinci`
    },
    {
        quote:`"Simplicity is the ultimate sophistication."`,
        person:`Leonardo da Vinci`
    },
    {
        quote:`"Learning never exhausts the mind."`,
        person:`Leonardo da Vinci`
    }
];


btn.addEventListener('click', () => {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})