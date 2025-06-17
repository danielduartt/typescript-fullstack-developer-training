interface Veiculo {
    nome: string;
    placa: string;
    entrada: Date;
}

(function () {
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);

    function patio() {
        function ler(): Array<Veiculo> {
            return localStorage.patio
                ? JSON.parse(localStorage.patio).map((v: any) => ({
                    ...v,
                    entrada: new Date(v.entrada)
                }))
                : [];
        }

        function salvar(veiculos: Array<Veiculo>) {
            localStorage.setItem("patio", JSON.stringify(veiculos));
        }

        function adicionar(veiculo: Veiculo, salvaNoStorage: boolean = true) {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${veiculo.nome}</td>
                <td>${veiculo.placa}</td>
                <td>${veiculo.entrada.toLocaleString()}</td>
                <td>
                    <button class="delete" data-placa="${veiculo.placa}">X</button>
                </td>
            `;

            row.querySelector(".delete")?.addEventListener("click", () => remover(veiculo.placa));

            document.querySelector("#patio")?.appendChild(row);

            if (salvaNoStorage) {
                salvar([...ler(), veiculo]);
            }
        }

        function remover(placa: string) {
            const veiculos = ler().filter(v => v.placa !== placa);
            salvar(veiculos);
            render();
        }

        function render() {
            $("#patio")!.innerHTML = "";
            ler().forEach(v => adicionar(v, false)); 
        }

        return { ler, adicionar, remover, render };
    }

    const app = patio();
    app.render(); 
    $("#cadastrar")?.addEventListener("click", () => {
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        if (!nome || !placa) {
            alert("Os campos nome e placa são obrigatórios");
            return;
        }

        app.adicionar({
            nome,
            placa,
            entrada: new Date(),
        });

        $("#nome")!.value = "";
        $("#placa")!.value = "";
    });
})();
