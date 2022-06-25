const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions(){
    //Button click active class
    for(let i=0;i < secBtn.length;i++){
        secBtn[i].addEventListener('click',function(){
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");

        })
    }

    //Section active class
    allSections.addEventListener('click',function(e){
        const id = e.target.dataset.id;
        if(id){
            //remove selected from other non clicked button
            secBtns.forEach((btn) =>{
                btn.classList.remove("active");
            })

            e.target.classList.add("active"); 

            //hide other sections
            sections.forEach((section) =>
            {
                section.classList.remove("active");
            })

            const element = document.getElementById(id);
            element.classList.add("active");
        }
    })

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',function(){
        let element = document.body;
        let imgElement = document.getElementById("HomeImage");
        element.classList.toggle('light-mode');
        imgElement.classList.toggle("light-mode-image");
    })
}

pageTransitions();