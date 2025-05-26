let barreNav = document.getElementById('barre');
let footer = document.getElementById('bas');
function ajouterToutesPages(){

    let nav = document.getElementById('barre');
    let aHome = document.createElement('a');
    aHome.setAttribute('href', "index.html");
    nav.appendChild(aHome);
    aHome.textContent="HOME";
    let aAbout = document.createElement('a');
    aAbout.setAttribute('href', "about.html");
    nav.appendChild(aAbout);
    aAbout.textContent="ABOUT";
    let aWork = document.createElement('a');
    aWork.setAttribute('href', "work.html");
    nav.appendChild(aWork);
    aWork.textContent="WORK";
    let aContact = document.createElement('a');
    aContact.setAttribute('href', "contact.html");
    nav.appendChild(aContact);
    aContact.textContent="CONTACT";

    let footer = document.getElementById('bas');
    let pFooter = document.createElement('p');
    footer.appendChild(pFooter);
    pFooter.textContent="@Copyrights 2025 Dainata Leva";
    pFooter.setAttribute('id','footer');

}
ajouterToutesPages();
