const form = document.querySelector("#service-form");
const ClientInput = document.querySelector("#client");
const descriptionInput = document.querySelector("#description");
const list = document.querySelector("#service-list");
const emptyState = document.querySelector("#empty-state");

const services = [
    // Criamos um Array , uma lista ordenada de valores
    // Criamos um objeto, que agrupa propriedade e valores relacionados
    {
        client: "mariana Alves",
        description: "Manutenção de bicicleta",
        completed: false
    }
];

function renderServices(){
// Remove os elementos que já estão dentro da lista, em seguida a função vai reconstruí-los com dados atuais
    list.replaceChildren()

    emptyState.hidden = services.length > 0;


    // for (const service; service < services; service++)
    for (const service of services) {
        // irá percorrer os itens do array, um de cada vez, em cada volta.
        // Agora "service" representa o objeto atual
        const card = document.createElement("li");
        card.className = "service-card";

        const title = document.createElement("h3");
        title.textContent = service.description;
        // Estou usando o valor do meu objeto

        const client = document.createElement("p");
        client.textContent = `Cliente: ${service.client}`;
        // Usando valor que está em meu objeto


        const status = document.createElement("p");
        status.textContent = service.completed
         ? "Concluído"
         : "Em andamento";
        // Usando um ternário (Estrutura condicional mais simplificada)
        // Ela retornará "Em andamento", pois é falsa, como foi colocado acima

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = service.completed
         ? "Reabrir"
         : "Concluir"; 

        button.addEventListener("click", () => {
            service.completed = !service.completed;
            renderServices();    
        });

        card.append(title, client, status, button);
        list.append(card);
    }
}

form.addEventListener ("submit", (event) =>{
    event.preventDefault();
    // Estou impedindo certas ações do navegador, que é: Ao submeter um formulário, carregar a página.

    const client = ClientInput.value.trim();
    // Estamos pegando o valor digitado no input.
    // O trim() remove espaços no começo e no fim do texto
    const description = descriptionInput.value.trim();

    if (!client || !description){
        return
        //Basicamente, estamos verificando se os valores dos Input estão vazios ou não. Se estiverem vazios, ele encerra a função -- Lembre que o return também, ao ser executado, encerra a função chamada. 

        alert("Não existe nada digitado!");
    };


    // Acrescentando um novo item dentro do Array.
    services.unshift({
        client,
        description,
        completed: false,
    });



    form.reset();
    // Limpa os campos do Formulário

    renderServices();
    // redesenha a lista com um novo item
});

renderServices();
