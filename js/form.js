document.querySelector('.contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const payload = {
        name: document.getElementById("name-form").value,
        email: document.getElementById("email-form").value,
        subject: document.getElementById("subject-form").value,
        message: document.getElementById("message-form").value,
    };

    try {
        const res = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            // Si la respuesta HTTP no es 200-299 lanza error
            throw new Error(`Error HTTP: ${res.status}`);
        }

        const data = await res.json();

        if (data.success) {
            alert("Correo enviado correctamente");
            e.target.reset();
        } else {
            alert("Error al enviar el correo");
        }
    } catch (error) {
        // Aquí cae si fetch falla (sin backend) o si el servidor responde mal
        alert("No se pudo enviar el correo. Error: " + error.message);
    }
});
