const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
    //submit 이벤트를 통해 브라우저가 디폴트로 실행하는 행동을 막는 함수
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);