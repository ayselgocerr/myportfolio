// age calculate

const bugun = new Date();
const yil = bugun.getFullYear();
const ageCalculate = yil-1990;
const age =document.querySelector("#age");
age.innerText=ageCalculate


const pageLang = document.documentElement.lang;


//  typing animation
if(pageLang=="en"){
    var typed = new Typed(".typing",{
        strings:[" ","Web Developer","Web Designer","Software Developer"],
        typeSpeed:100,
        BackSpeed:60,
        loop:true
    })
}else{
    var typed = new Typed(".typing",{
        strings:[" ","Web Geliştiricisiyim","Web Tasarlamacıyım","Yazılım Geliştiricisiyim"],
        typeSpeed:100,
        BackSpeed:60,
        loop:true
    })
}


// Aside

const nav =document.querySelector(".nav");
navList=nav.querySelectorAll("li");
totalNavList=navList.length;
allSection=document.querySelectorAll(".section");
totalSection=allSection.length;

for(let i=0 ; i<totalNavList; i++){
    const a =navList[i].querySelector("a");
    
    a.addEventListener("click",function(){

        removeBackSection();    
        for(let j=0;j<totalNavList;j++){
            
            if(navList[j].querySelector("a").classList.contains("active")){
                addBackSection(j);
                // allSection[j].classList.add("back-section")
            }
            navList[j].querySelector("a").classList.remove("active")
        }

        this.classList.add("active")
        showSection(this)
        if(window.innerWidth<1200){
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection(){
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num){
    allSection[num].classList.add("back-section")
}

function showSection(element){
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("active");
    }
    const target =element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");
}
// hire me button
function updateNav(element){
    for(let i =0;i<totalNavList;i++){
        navList[i].querySelector("a").classList.remove("active");
        const target =element.getAttribute("href").split("#")[1];
        if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click",function(){
    const sectionIndex=this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex)
})

// toggler
const navTogglerBtn =document.querySelector(".nav-toggler");
aside =document.querySelector(".aside");
navTogglerBtn.addEventListener("click",()=>{
    asideSectionTogglerBtn();

})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i =0; i<totalSection;i++){
        allSection[i].classList.toggle("open")
    }
}

// portfolyo calculate
const portfolyoItem=document.querySelectorAll(".portfolio-item").length
const portfolyoLength=document.querySelector(".portfolyoLength");

portfolyoLength.innerHTML=portfolyoItem;