const click = document.querySelector("#btn");

const par = document.querySelector("#par");
const quote = [ 
"Мы проникнем в самый народ. Наши не только те, что режут и жгут, да делают классические выстрелы или кусаются. ",
"Вся свобода будет тогда, когда будет всё равно, жить или не жить. Вот всему цель.",
"Время не предмет, а идея. Погаснет в уме.",
"Учитель, смеющийся с детьми над их богом и над их колыбелью, уже наш. Адвокат, защищающий образованного, богатого убийцу, уже наш. Школьники, убивающие мужика, чтобы испытать ощущение, наши, наши! Администраторы, литераторы...О, наших много, ужасно много.Они и сами того не знают.",
"Нынче же у каждого ум не свой. Русский бог спасовал перед 'дешевкой'. Народ пьян, матери пьяны, дети пьяны, церкви пусты.",
"Одно или два поколения разврата необходимо. Разврата неслыханного, подленького, когда человек обращается в гадкую, трусливую, жестокую, себялюбивую мразь, вот чего надо.",
"Человек несчастлив потому, что не знает, что он счастлив; только потому. Это всё, да! Кто узнает, тотчас сейчас станет счастлив, сию минуту.",
"Мы пустим пожары, мы пустим легенды, мы провозгласим разрушение. Раскачка такая пойдет, которой мир еще не видал.",
"Есть вещи, Варвара Петровна, о которых не только нельзя умно говорить, но о которых и начинать-то говорить неумно.",
"— Стало быть, тот Бог есть же, по-вашему? – Его нет, но он есть. В камне боли нет, но в страхе от камня есть боль. Бог есть боль страха смерти. Кто победит боль и страх, тот сам станет Бог. Тогда новая жизнь, тогда новый человек, все новое...",
"— Кто научит, что все хороши, тот мир закончит. — Кто учил, того распяли.",
"Человек только и делал, что выдумывал Бога, чтобы жить, не убивая себя; в этом вся всемирная история до сих пор.",
"Я обязан себя застрелить, потому что самый полный пункт моего своеволия – это убить себя самому.",
"Я обязан неверие заявить. Для меня нет выше идеи, что бога нет.",
"Я три года искал аттрибут божества моего и нашел: аттрибут божества моего – Своеволие! Это всё, чем я могу в главном пункте показать непокорность и новую страшную свободу мою.",

]

click.addEventListener("click",function(){
    document.querySelector("#november").play();
    let randomQuote = quote[Math.floor(Math.random()*quote.length)];

    console.log(randomQuote);
    par.textContent = randomQuote;
    par.style.display = "block";

})

