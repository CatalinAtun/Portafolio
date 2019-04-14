const containerTitleStyle = document.getElementsByClassName("title");
const container = document.getElementById("comic");

function start(){
    document.getElementById("start").style.display="none";
    window.scrollTo(0, 0);
    container.innerHTML = `
    <nav class="sticky">
    <button onclick="aboutMe()">Sobre mí</button>
    <button onclick="skills()">Skills</button>
    <button onclick="projects()">Proyectos destacados</button>
    <button onclick="contact()">Contacto</button>
</nav>

<div class="title" id="titleID">
    <img class="bocadillo" src="./images/bocadillo.png">
</div>
<div class="aboutMe">
</div>
<div class="aboutMeText">
<img class="aboutMePhotoText" src="images/sobreMi.png"> 
</div>
<div class="skillsPhoto">
    <img class="bocadilloSkills" src="images/dialogo.png">
    <img class="photo2" src="images/foto2.png">
</div>
<div class="skills">
    <img class="react" src="images/react.png">
    <img class="js-html-css" src="images/js-html-css.png">
    <img class="bootstrap" src="images/bootstrap.png">
    <img class="node" src="images/node.png">
    <img class="npm" src="images/npm.png">
    <img class="github" src="images/GitHub.png">
    <img class="git" src="images/git.png">
    <img class="illustrator" src="images/illustrator.png">
    <img class="photoshop" src="images/photoshop.png">
    <img class="slack" src="images/firebase.png">
</div>
<img class="projects" src="images/proyectosDestacados.png">
<div class="project1">
    <form action="https://github.com/CatalinaCampos/Data-lovers-LOL" class="code3">
        <input class="codeI3" type="submit" value="CÓDIGO" />
    </form>
    <form action="https://catalinacampos.github.io/Data-lovers-LOL/" class="demo3">
        <input class="demoI3" type="submit" value="DEMO" />
    </form>
    <img class="dataLoversTitle" src="images/tituloDataLovers.png">
    <img class="project3Photo" src="images/proyecto3.jpg">
</div>
<div class="project2">
    <form action="https://github.com/CatalinaCampos/Cipher" class="code2">
        <input class="codeI2" type="submit" value="CÓDIGO" />
    </form>
    <form action="https://catalinacampos.github.io/Cipher/" class="demo2">
        <input class="demoI2" type="submit" value="DEMO" />
    </form>
    <img class="cipherTitle" src="images/tituloCipher.png">
    <img class="project2Photo" src="images/proyecto2.jpg">
</div>
<div class="project3">
    <form action="https://github.com/CatalinaCampos/Hackaton-Peliculas" class="code1">
        <input class="codeI1" type="submit" value="CÓDIGO" />
    </form>
    <form action="https://barbararh.github.io/SCL007-hackathon-peliculas/" class="demo1">
        <input class="demoI1" type="submit" value="DEMO" />
    </form>
    <img class="fronteraTitle" src="images/tituloFrontera.png">
    <img class="project1Photo" src="images/proyecto1.png">
</div>
<div class="contact">
    <img class="contactTitle" src="./images/contacto.png">
</div>
<div class="contactPhoto">
    <img class="photo3" src="images/foto3.png">
</div>`

}


function aboutMe() {
    scrollTo(0, 470)
}

function skills() {
    scrollTo(0, 950)
}

function projects() {
    scrollTo(0, 1500)
}

function contact() {
    scrollTo(0, 2250)
}

