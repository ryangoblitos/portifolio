// Tema claro/escuro
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Validação do formulário
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();
    let msg = document.getElementById("msg");

    if (!nome || !email || !mensagem) {
        msg.innerText = "Preencha todos os campos!";
        msg.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        msg.innerText = "Email inválido!";
        msg.style.color = "red";
        return;
    }

    msg.innerText = "Mensagem enviada com sucesso!";
    msg.style.color = "green";

    document.getElementById("form").reset();
});
