const bars = document.querySelectorAll('.bar');

// Valores finais dos competidores
const valoresFinais = [76968.44, 45677.24, 25902.9, 14516.81, 11542.12, 8297.12, 588.74];
const nomes = ["Camila", "Marina", "Raphael", "Carolyne", "César", "Millena", "Angélica"];
const duracao = 30000; // 30 segundos
const interval = 30; // Atualiza a cada 30ms
const passos = duracao / interval; // Número de atualizações

// Inicializa cada competidor com progresso gradual
bars.forEach((bar, index) => {
    let valorAtual = 0;
    const incremento = valoresFinais[index] / passos;

    const evolucao = setInterval(() => {
        valorAtual += incremento; // Incremento constante
        if (valorAtual >= valoresFinais[index]) {
            valorAtual = valoresFinais[index]; // Garante que não ultrapasse o valor final
            clearInterval(evolucao);

            // Exibe o nome do competidor ao atingir o valor final
            const nameElement = bar.querySelector('.name');
            nameElement.textContent = nomes[index];
            nameElement.style.display = 'block';
        }

        // Atualiza a largura da barra e o valor mostrado
        const largura = (valorAtual / Math.max(...valoresFinais)) * 100;
        bar.style.width = `${largura}%`;
        bar.querySelector('.value').textContent = `R$ ${valorAtual.toFixed(2)}`;
    }, interval);
});
