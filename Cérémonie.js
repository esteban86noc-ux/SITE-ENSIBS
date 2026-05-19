function promotion(year){
    var imgSrc;
    if(year == 2023){
        imgSrc = "promotion 2023.jpg";
    } else if(year == 2022){
        imgSrc = "promotion 2022.jpg";
    } else {
        imgSrc = "promotion 2021.jpg";
    }
    document.getElementById("ceremonie").src = imgSrc;
}

function AffichageTexte() {     
    document.getElementById("titre-principal").innerHTML ="L'ENSIBS devient la 5ème école associée au réseau Polytech";


} 

function Contact() {
    document.getElementById("MyfooterJS2").style.fontSize = "35px";
    document.getElementById("MyfooterJS2").style.color = "black";
    document.getElementById("MyfooterJS2").style.backgroundColor = "blue";
    document.getElementById("MyfooterJS2").innerHTML = "Adresse : 17 Bd des Flandres-Dunkerque 1940, 56100 Lorient";
}

function Derniere() {
document.getElementById("clique").textContent = new Date().toLocaleString("fr-FR", {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric",
hour: "2-digit",
minute: "2-digit",
second: "2-digit"
});
}



document.addEventListener("DOMContentLoaded", () => {
const descriptions = {
"droit.jpg": "La faculté de droit",
"ensibs_lorient.jpg": "L'ENSIBS c'est trop génial",
"pontivy.jpg": "Pontivy c'est la campagne, il n'y a rien là-bas",
"iut vannes.jpg": "Vannes il n'y a que des riches",
"sciences.jpg": "La faculté de sciences se trouve sur Lorient et Vannes",
"lettres.jpg": "La faculté de lettres est en face de l'IFSI",
"iae.jpeg": "L'IAE Bretagne Sud propose une offre de formation diversifiee, allant de la 1ère année de Licence au Doctorat, en adequation avec les besoins des entreprises, pour preparer les managers de demain"
};
const zone = document.getElementById("description");
document.addEventListener("click", (e) => {
const nom = e.target.getAttribute("src");
zone.textContent = descriptions[nom] || "Aucune description disponible.";
});
});

