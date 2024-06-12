const apiUrl = 'http://localhost:3000/nomes';

async function adicionarNome() {
    const nomeInput = document.getElementById('nomeInput');
    const nome = nomeInput.value.trim();

    if (nome === '') {
        alert('Informe um nome para adicionar na lista.');
        return;
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome })
        });

        if (response.status === 400) {
            const data = await response.json();
            alert(data.message);
        } else {
            nomeInput.value = '';
            nomeInput.focus();
            atualizarLista();
        }
    } catch (error) {
        console.error('Erro ao adicionar nome: ', error);
    }
}

async function atualizarLista() {
    const listaNomesUl = document.getElementById('listaNomes');
    listaNomesUl.innerHTML = '';

    try {
        const response = await fetch(apiUrl);
        const listaNomes = await response.json();

        listaNomes.forEach(nome => {
            const li = document.createElement('li');
            li.textContent = nome.nome;
            listaNomesUl.appendChild(li);
        });
    } catch (error) {
        console.error('Erro ao buscar nomes: ', error);
    }
}

document.addEventListener('DOMContentLoaded', atualizarLista);
