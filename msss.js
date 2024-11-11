// Adiciona uma nova meta
function addGoal() {
  const goalName = document.getElementById("goalName").value;
  const goalAmount = document.getElementById("goalAmount").value;

  if (!goalName || !goalAmount) return;

  const goals = JSON.parse(localStorage.getItem('goals')) || [];
  goals.push({ name: goalName, amount: goalAmount });

  localStorage.setItem('goals', JSON.stringify(goals));
  document.getElementById("goalName").value = '';
  document.getElementById("goalAmount").value = '';
  loadGoals();
}

// Carrega as metas do localStorage
function loadGoals() {
  const goals = JSON.parse(localStorage.getItem('goals')) || [];
  const goalsList = document.getElementById("goals");

  goalsList.innerHTML = '';
  goals.forEach((goal, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${goal.name} - R$ ${goal.amount}</span>
      <button onclick="deleteGoal(${index})">Excluir</button>
    `;
    goalsList.appendChild(li);
  });
}

// Exclui uma meta
function deleteGoal(index) {
  const goals = JSON.parse(localStorage.getItem('goals')) || [];
  goals.splice(index, 1);

  localStorage.setItem('goals', JSON.stringify(goals));
  loadGoals();
}

// Carrega as metas ao carregar a página
window.onload = loadGoals;


