const loading = document.querySelector(".loading");
const container = document.querySelector(".container");
const body = document.body;
const main = document.querySelector(".main")
const skills = document.querySelectorAll(".skill")
const project_content = document.querySelector(".projects-content");
const contact_contents = document.querySelectorAll(".contact-content")
const resumes = document.querySelectorAll(".resume");
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
} , 40)

resumes.forEach(resume =>{
    resume.addEventListener('click' , ()=>{
        window.open('../img/mucocv.pdf')
    })
})

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
    {s_idx:10 , icon : "nodejs" , name: "useless" ,  brands:"brands"},
    {s_idx:11 , icon : "figma" , name: "Figma" ,  brands:"brands"},
    {s_idx:12 , icon : "wordpress" , name: "Wordpress" ,  brands:"brands"}
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

projectPrinter()
function projectPrinter(){
    const name = [
        "Macapa Coffee",
        "Guitarizm",
        "Game Of Life",
        "Hotel Dionysus",
        "Dark Mode Clock",
        "Tic Tac Toe",
        "Rock-Paper-Scissors",
        "Movie App",
        "Pinterest Clone",
        "Meditation App",
        "Github Finder",
        "Quiz App"
    ]

    const codes = [
        "https://github.com/MucahitGed/coffee-shop",
        "https://github.com/MucahitGed/Guitar-Shop",
        "https://github.com/MucahitGed/Game-of-life",
        "https://github.com/MucahitGed/hotel-site",
        "https://github.com/MucahitGed/dark-mode-clock-with-js",
        "https://github.com/MucahitGed/tic-tac-toe",
        "https://github.com/MucahitGed/Rock-paper-scissors",
        "https://github.com/MucahitGed/Movie-App",
        "https://github.com/MucahitGed/Pinterest-Clone",
        "https://github.com/MucahitGed/meditatin-app-with-js",
        "https://github.com/MucahitGed/Github-Account-Finder-App",
        "https://github.com/MucahitGed/react-quiz"
    ]
    const links  = [
        "https://macapa-coffee.netlify.app/",
        "https://guitarizm.netlify.app",
        "https://game-of-lifee.netlify.app",
        "https://deluxe-hotel-site.netlify.app",
        "https://dark-mode-clock.netlify.app",
        "https://tic-tac-toer.netlify.app",
        "https://rock-paperr.netlify.app",
        "https://movie-aapp.netlify.app",
        "https://pinterest-clonee.netlify.app",
        "https://meditation-ap.netlify.app/",
        "https://github-account-finder-app.netlify.app/",
        "https://reactjs-quizz.netlify.app/"
    ]
    
    const pics = [
        "../img/coffee.png",
        "../img/guitarizm.png",
        "../img/life.png",
        "../img/hotel2.png",
        "../img/clock2.png",
        "../img/xox.png",
        "../img/rock-paper.png",
        "../img/movie.png",
        "../img/pinterest.png",
        "../img/medi2.png",
        "../img/finder.png",
        "../img/quiz.png"
    ]
    // i didn't add "../img/todo.png" , "Todo List", "https://github.com/MucahitGed/todo-app-react","https://todo-react-ap.netlify.app/",
    
    for(let i = 0; i < 12 ; i++){
        let content = document.createElement('div')
        content.classList.add('content')

        let content_inside = document.createElement('div')
        content_inside.classList.add('content_inside')
        content_inside.innerHTML = `
        <h3 class="title-content">${name[i]}</h3>
          <div class="buttons">
                <a href=${links[i]} class="visit-btn" target="_blank">Visit</a>
                <a href=${codes[i]} class="code-btn" target="_blank">Code</a>
          </div>
        `
        
        content.innerHTML= `
            <img src=${pics[i]} alt="">
        `
        // project_content.insertAdjacentHTML('beforeend' , content)
        project_content.appendChild(content)
        
        content.addEventListener("mouseover" , ()=>{
            
            content.appendChild(content_inside)
        })
        content.addEventListener("mouseleave" , ()=>{
            
            content.removeChild(content_inside)
            
        })
    }
   
   
    
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




