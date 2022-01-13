// The code was taken by https://www.codingnepalweb.com/
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// The code was taken by https://www.codingnepalweb.com/ 
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

// The code was taken by https://www.codingnepalweb.com/ 
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

// The code was taken by https://www.codingnepalweb.com/ 
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz");
    showQuetions(0); 
    queCounter(1); 
    startTimer(30);
    startTimerLine(0);
}

// The code was taken by https://www.codingnepalweb.com/ and i have adjust it in my needs
let timeValue =  30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// The code was taken by https://www.codingnepalweb.com/ and i have adjust it in my needs
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    timeValue = 30; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Time Left";
    next_btn.classList.remove("show");
}
