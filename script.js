
const myAccordion = (data) => {

    const accordionContainer = document.getElementById("accordion-container");

    data.forEach((item, index)=> {

        const accordionMain = document.createElement("div");
            accordionMain.classList.add("intro", "w-full", "playfair");
        const accordionSpan = document.createElement("span");
            accordionSpan.classList.add('accordion-header', 'flex', 'flex-row', 'justify-between', 'bg-gray-300', 'py-2', 'px-5', 'border', 'border-gray-100')
            accordionSpan.innerHTML = `
                <h2 class="text-lg font-bold">> ${item.title}</h2>
                <span class="px-5">
                    <button class="text-3xl font-extrabold absolute" id="close">+</button>
                    <button class="text-3xl font-extrabold absolute hidden" id="close">-</button>
                </span>
            `
        const accordionArticle = document.createElement("span");
            accordionArticle.classList.add('hidden', 'flex-col', 'bg-gray-100', 'px-5')
            accordionArticle.innerHTML=`
                <span class="flex flex-row justify-between py-5 border-b-2 border-gray-400">
                <p class="font-bold">Duration: ${item.duration} hrs</p>
                <p class="font-bold italic">Level: ${item.level}</p>                    
                </span>`
                    const ul = document.createElement("ul"); 
                    ul.classList.add("list-disc", "p-5", "space-y-3")                   
                item.details.forEach(subItem => {
                    const li = document.createElement('li')
                    li.innerHTML=`<li>${subItem}</li>`
                    ul.appendChild(li)
                })

        // For the open and close functionality
            accordionSpan.addEventListener('click', () => {
                const closeBtn = document.getElementById('close')
                const openBtn = document.getElementById('open')

                accordionArticle.classList.toggle('active');
                accordionSpan.classList.toggle('header-active');
                
            });
            
        accordionMain.appendChild(accordionSpan);
        accordionMain.appendChild(accordionArticle);
        accordionArticle.appendChild(ul)
        
        accordionContainer.appendChild(accordionMain);
    });    
}

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    myAccordion(data);
  })
  .catch(error => console.error('Error fetching data:', error));

// Countdown timer
const countdown = () => {  
    const date = new Date("4 Dec 2023");
    const today = new Date()

        let dateDiff = Math.round((date - today)/1000)
        let days = Math.floor(dateDiff/86400)
        let hrs = Math.floor(((dateDiff/86400)-days)*24)
        let mins = Math.floor(((((dateDiff/86400)-days)*24)-hrs)*60)
        let secs = Math.round(((((((dateDiff/86400)-days)*24)-hrs)*60)-mins)*60)

        countDown.innerHTML = `
            <h1 class=" text-5xl font-bold lg:text-5xl text-white" id="count-down">${days} : ${hrs} : ${mins} : ${secs}</h1>
        `
        return countDown.innerHTML
  }

 setInterval(() => console.log(countdown()), 1000);
 
// Insertion stage
    const countDown = document.getElementById("count-down")  
