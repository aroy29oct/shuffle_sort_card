const card1 = "<div id='card1' class='mainDiv col-4'>1</div>";
const card2 = "<div id='card2' class='mainDiv col-4'>2</div>";
const card3 = "<div id='card3' class='mainDiv col-4'>3</div>";
const card4 = '<div id="card4" class="mainDiv col-4">4</div>'
const card5 = '<div id="card5" class="mainDiv col-4">5</div>'
const card6 = '<div id="card6" class="mainDiv col-4">6</div>'
const card7 = '<div id="card7" class="mainDiv col-4">7</div>'
const card8 = '<div id="card8" class="mainDiv col-4">8</div>'
const card9 = '<div id="card9" class="mainDiv col-4">9</div>'
const cardHolder = document.getElementById("cardHolder");
const orderArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const onLoad = (() => {
    cardHolder.innerHTML = card1 + card2 + card3 + card4 + card5 + card6 + card7 + card8 + card9;
});
window.onload = function () {
    onLoad();
};
/**Shuffling cards */
const shuffleCards = ((event) => {
    const shuffledArr = orderArr.map(item => ({
        sort: Math.random(), value: item
    })).sort((item, index) => item.sort - index.sort).map(item => item.value);
    for (let i = 1; i < shuffledArr.length; i++) {
        let card = document.getElementById("card" + shuffledArr[i]);
        cardHolder.append(card);
    }
    orderArr = [...shuffledArr];
});

/**Sorting cards */
const sortCards = ((event) => {
    orderArr.sort(function (a, b) { return a - b });
    for (let i = 1; i < orderArr.length; i++) {
        let card = document.getElementById("card" + orderArr[i]);
        cardHolder.append(card);
    }
});