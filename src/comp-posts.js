
let data = "Angel City is about to explode, and you're just along for the ride. The Angel City Police Department is ramping up their presence in the downtown core of the city in anticipation of another uprising similar to those seen in the 40's. President Yeller is currently giving a 'state of Calico' address one week ahead of the Angel City independence referendum to 'calm the nation through these trying times'. Sheriff Irving Vasquez of the Angel City Police Department is maintaining a strict curfew of 9:00 pm ahead of the election, saying that he 'will not tolerate any hooliganism, vandalism, terrorism, or rabble rousing' ahead of the election. Vasquez has come under fire recently after text messages between him and an individual only known as 'Kreig' were leaked earlier this year, detailing elaborate plots to attack local polling places, nightclubs, bars, and other 'hovels of degenerate behavior' ahead of the election. Sheriff Vasquez has refused to step down despite overwhelming pressure from local, state, and national agencies; a consequence of the Warlord Era of Angel City. 'Kreig' is largely believed to be the leader of the organized millitia group 'Concerned Citizens against Degeneracy', who has risen to prominence in the last 10 years due to an overwhelming sense of discontent among the right in Angel County. Local Antifascist groups and labor unions have volunteered to help secure polling locations at risk of being targeted by Concerned Citizens against Degeneracy, however this puts them at odds against local police who are determined to keep their foothold on local defense in the area. Mayor Celina Campos has been riding with a security entourage for the first time in her term as mayor, a change that puts her at odds with one of her campaign promises to be 'as accessible to the people as possible'.";
let parsed = window.nlp(data);
let people = parsed.people().out('array');
let places = parsed.places().out('array');
console.log(people);
console.log(places);
console.log(document.getElementById("people"));
function updateList(list, array) {
    let peopleList = document.getElementById(list);
    array.forEach(item => {
        let listItem = document.createElement('li');
        // console.log(item);
        let textNode = document.createTextNode(item);
        listItem.appendChild(textNode);
        peopleList.appendChild(listItem);
    });
}

updateList('people', people);
updateList('places', places);


