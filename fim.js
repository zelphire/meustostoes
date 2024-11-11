// Função para adicionar uma nova meta
function addGoal() {
  const goalName = document.getElementById("goalName").value;
  const goalAmount = document.getElementById("goalAmount").value;

  // Verificar se os campos não estão vazios
  if (goalName === "" || goalAmount === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Obter metas salvas do localStorage
  let goals = JSON.parse(localStorage.getItem('goals')) || [];

  // Adicionar nova meta ao array
  goals.push({ name: goalName, amount: goalAmount });

  // Salvar as metas no localStorage
  localStorage.setItem('goals', JSON.stringify(goals));

  // Limpar os campos e atualizar a lista de metas
  document.getElementById("goalName").value = "";
  document.getElementById("goalAmount").value = "";
  loadGoals();
}

// Função para carregar as metas salvas do localStorage
function loadGoals() {
  const goalsList = document.getElementById("goals");
  goalsList.innerHTML = '';

  // Obter as metas salvas
  const goals = JSON.parse(localStorage.getItem('goals')) || [];

  // Exibir as metas
  goals.forEach(goal => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${goal.name}</span> - R$ ${goal.amount}
      <button onclick="deleteGoal('${goal.name}')">Excluir</button>
    `;
    goalsList.appendChild(li);
  });
}

// Função para excluir uma meta
function deleteGoal(goalName) {
  let goals = JSON.parse(localStorage.getItem('goals')) || [];
  goals = goals.filter(goal => goal.name !== goalName);

  // Salvar as metas atualizadas no localStorage
  localStorage.setItem('goals', JSON.stringify(goals));

  // Atualizar a lista de metas
  loadGoals();
}

// Carregar as metas salvas ao carregar a página
window.onload = loadGoals;


