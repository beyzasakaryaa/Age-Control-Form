document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Sayfanın yenilenmesini engelle

        const nameInput = document.getElementById("name").value.trim();
        const surnameInput = document.getElementById("surname").value.trim();
        const ageInput = document.getElementById("age").value.trim();
        const age = parseInt(ageInput, 10);
        const resultDiv = document.getElementById("result");

        // Önce formun boş olup olmadığını kontrol edelim
        if (!nameInput || !surnameInput || !ageInput) {
            alert("Please fill out all fields!");
            resultDiv.innerHTML = `<p class="text-danger mt-3">⚠️ Please fill out all fields!</p>`;
            return;
        }

        // Yaş kontrolü yapalım
        if (age < 18) {
            alert("You cannot submit the form because you are under 18!");
            resultDiv.innerHTML = `<p class="text-danger mt-3">❌ You must be at least 18 years old to submit the form.</p>`;
        } else {
            alert("The form has been successfully submitted!");
            
            // Bilgileri ekrana yazdıralım
            resultDiv.innerHTML = `
                <div class="alert alert-success mt-3">
                    <h5>✅ Submitted Information:</h5>
                    <p><strong>Name:</strong> ${nameInput}</p>
                    <p><strong>Surname:</strong> ${surnameInput}</p>
                    <p><strong>Age:</strong> ${age}</p>
                </div>
            `;
        }
    });
});
