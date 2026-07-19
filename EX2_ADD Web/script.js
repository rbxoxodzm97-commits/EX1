const form = document.getElementById("add-form");
const resultEl = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    resultEl.textContent = "숫자를 올바르게 입력해주세요.";
    return;
  }

  const sum = num1 + num2;
  resultEl.textContent = `결과: ${num1} + ${num2} = ${sum}`;
});
