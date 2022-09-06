const loading = document.querySelector(".loading");
const container = document.querySelector(".container");
const body = document.body;
const main = document.querySelector(".main")
const skills = document.querySelectorAll(".skill")
const project_content = document.querySelector(".projects-content");
const contact_contents = document.querySelectorAll(".contact-content")
let load = 0;
const int = setInterval(()=>{
    loading.innerHTML = `${load}%`
    load++;
    
    if(load >= 100){
        clearInterval(int);
        container.style.display = "none";
        body.style.backgroundColor = "white"
        main.style.display = "flex";
    }
} , 0)

let timeout_p = setTimeout(() => {
    document.querySelector(".home-header").style.visibility = "visible";
    document.querySelector(".home-content-title h2").style.visibility = "visible";
}, 2000);


let skill_icon = [
   {s_idx:0 , icon : "html5" , name: "HTML" ,  brands:"brands"} ,
   {s_idx:1 , icon : "css3" , name: "CSS" ,  brands:"brands"} , 
    {s_idx:2 , icon : "bootstrap" , name: "BootStrap" , brands:"brands"},
    {s_idx:3 , icon : "js" , name: "JavaScript",  brands:"brands"},
    {s_idx:4 , icon : "database" , name :"SQL", brands:"solid"},
    {s_idx:5 , icon : "react" , name: "React" ,  brands:"brands"} ,
   {s_idx:6 , icon : "sass" , name: "Sass" ,  brands:"brands"} , 
    {s_idx:7 , icon : "git-alt" , name: "Git" ,  brands:"brands"},
    {s_idx:8 , icon : "type-script" , name: "useless" ,  brands:"brands"}, 
    {s_idx:9 , icon : "mongoDb" , name: "useless" ,  brands:"brands"},
    {s_idx:10 , icon : "nodejs" , name: "useless" ,  brands:"brands"}
]
skills.forEach((skill) => {
    skill.addEventListener(("mouseover"), (e)=> {
        if(e.target.classList.contains("good")){
            e.target.innerHTML= `
            <div class="level">100%</div>`
            e.target.children[0].style.width = "100%"
        }
        if(e.target.classList.contains("fair")){
            e.target.innerHTML= `
            <div class="level">75%</div>`
            e.target.children[0].style.width = "75%"
            console.log(e.target);
        }if(e.target.classList.contains("mid")){
            e.target.innerHTML= `
            <div class="level">50%</div>`
            e.target.children[0].style.width = "50%"
        }if(e.target.classList.contains("weak-svg")){
            e.target.innerHTML= `
            <div class="level">25%</div>`
            e.target.children[0].style.width = "25%"
        }if(e.target.classList.contains("weak")){
            e.target.innerHTML= `
            <div class="level">25%</div>`
            e.target.children[0].style.width = "25%"
        }
    })
})

skills.forEach((skill, idx) => {
    skill.addEventListener(("mouseleave") , (e)=>{
        if(e.target.classList.contains("good")){
                s_idx = idx;
            e.target.innerHTML=
             `<i class="fa-${skill_icon[idx].brands} fa-${skill_icon[idx].icon} fa-4x"></i>
            <div class="skill-name">${skill_icon[idx].name}</div>`
        }if(e.target.classList.contains("fair")){
            s_idx = idx;
            e.target.innerHTML=
            `<i class="fa-brands fa-${skill_icon[idx].icon} fa-4x"></i>
             <div class="skill-name">${skill_icon[idx].name}</div>`
        }if(e.target.classList.contains("mid")){
            e.target.innerHTML=
            `<img src="https://img.icons8.com/color/48/000000/typescript.png" />
            <div class="skill-name">TypeScript</div>`
        }if(e.target.classList.contains("weak-svg")){
            e.target.innerHTML=
            `<svg
            style="color: blue"
            role="img"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>MongoDB</title>
            <path
              d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"
              fill="var(--cyber-color)"
            ></path>
          </svg>
          <div class="skill-name">MongoDb</div>`
        }
        if(e.target.classList.contains("weak")){
            s_idx = idx;
            e.target.innerHTML=
            `<i class="fa-brands fa-node-js fa-4x"></i>
            <div class="skill-name">NodeJS</div>`
    }})
})


function projectPrinter(){
    let project_div= `
    <a href="" class="project">
    <div class="content"></div>
    </a>
    `
}



contact_contents.forEach((contact_content) => {
    contact_content.addEventListener("mouseover" , (e)=>{
        if(e.target.classList.contains("whatsapp")){
            e.target.innerHTML = `<i class="fa-brands fa-whatsapp"></i> 532311761`
            
        }if(e.target.classList.contains("instagram")){
            e.target.innerHTML = `<i class="fa-brands fa-instagram"></i> mucahitgedik_`
            
        }if(e.target.classList.contains("linkedln")){
            e.target.innerHTML = `<i class="fa-brands fa-linkedin"></i> Mucahit Gedik`
           
        }if(e.target.classList.contains("github")){
            e.target.innerHTML = `<i class="fa-brands fa-github"></i> MucahitGed`
           
        }if(e.target.classList.contains("mail")){
            e.target.innerHTML = `<i class="fa-solid fa-envelope"></i> mucahittgedik0@icloud.com`
            }
    })
})
contact_contents.forEach((contact_content) => {
    contact_content.addEventListener("mouseleave" , (e)=>{
        if(e.target.classList.contains("whatsapp")){
            e.target.innerHTML = `<i class="fa-brands fa-whatsapp"></i> Whatsapp`
            
        }if(e.target.classList.contains("instagram")){
            e.target.innerHTML = `<i class="fa-brands fa-instagram"></i> Instagram`
            
        }if(e.target.classList.contains("linkedln")){
            e.target.innerHTML = `<i class="fa-brands fa-linkedin"></i> Linkedln`
           
        }if(e.target.classList.contains("github")){
            e.target.innerHTML = `<i class="fa-brands fa-github"></i> Github`
           
        }if(e.target.classList.contains("mail")){
            e.target.innerHTML = `<i class="fa-solid fa-envelope"></i> Send me an e-mail`
            }
    })
    })




