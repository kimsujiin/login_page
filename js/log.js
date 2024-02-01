const id = document.querySelector("#id");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn");

function form_checking() {
  if (id.value == "") {
    alert("아이디를 입력바랍니다.");
    id.focus();
    return false;
  }
  if (password.value == "") {
    alert("비밀번호를 입력바랍니다.");
    password.focus();
    return false;
  }
}

btn.addEventListener("click", form_checking);
