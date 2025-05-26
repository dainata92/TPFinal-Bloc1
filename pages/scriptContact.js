//le meme code pour le formulaire qu'on a déjà fait en cours
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();  
  
    document.getElementById('nameError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
  
    try {
        
        let name = document.getElementById('name').value.trim();
        if (name === '') {
            throw new Error("Le nom est requis.");
        }
  

        let phone = document.getElementById('tel').value.trim();
        if (phone === '') {
            throw new Error("Le téléphone est requis.");
        }
        let phoneRegex = /^\d+$/;
        if (!phoneRegex.test(phone)) {
            throw new Error("Le téléphone doit contenir uniquement des chiffres.");
        }
  
        let email = document.getElementById('email').value.trim();
        if (email === '') {
            throw new Error("L'email est requis.");
        }
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("Veuillez entrer une adresse email valide.");
        }
  
        let message = document.getElementById('message').value.trim();
        if (message === '') {
            throw new Error("Le message est requis.");
        }
        alert("Formulaire soumis avec succès !");
    } catch (error) {
        if (error.message.includes("nom")) {
            document.getElementById('nameError').textContent = error.message;
        } else if (error.message.includes("téléphone")) {
            document.getElementById('phoneError').textContent = error.message;
        } else if (error.message.includes("email")) {
            document.getElementById('emailError').textContent = error.message;
        } else if (error.message.includes("message")) {
            document.getElementById('messageError').textContent = error.message;
        }
    } finally {
        console.log("Verification du formulaire terminée.");
    }
});