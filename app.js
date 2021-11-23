const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    //submit 이벤트를 통해 브라우저가 디폴트로 실행하는 행동을 막는 함수
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);