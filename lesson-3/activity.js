function printLogin() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  console.log(username);
  console.log(password);

  add(5,7);
}

function add(x, y) {
  console.log(x+y)
}