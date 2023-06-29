const questions=[
{
    'que':'Which of the following is markup language?',
    'a':'HTML',
    'b':'CSS',
    'c':'JavaScript',
    'd': 'Django',
    'correct':'a'
},
{
    'que':'What is 2 + 2?',
    'a':'5',
    'b':'7',
    'c':'4',
    'd': '8',
    'correct':'c'
},

]
let index=0;
let total=questions.length
let right=0
let wrong=0
const quesBox= document.getElementById('quesBox')
const optionInputs= document.querySelectorAll('.options')
const loadQuestions=()=>{
    if (index ===total){
        return endQuiz();
    }
    reset()  ;
    const data= questions[index]
    quesBox.innerText=`${index+1}) ${data.que}` ;
    optionInputs[0].nextElementSibling.innerText = data.a
    optionInputs[1].nextElementSibling.innerText = data.b
    optionInputs[2].nextElementSibling.innerText = data.c
    optionInputs[3].nextElementSibling.innerText = data.d
}
const submitQuiz=()=>{
    const ans=getAnswer()
    const data=questions[index]
    if (ans===data.correct){
          right++;
    }
    else{ wrong++}
    index++;
    loadQuestions()
    return;
}
const getAnswer =()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){ answer=input.value;
            }
        }
    )
    return answer
}

const reset =()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;        }
    )
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`<h3>Thank you for playing</h3>
    <h2> ${right}/${total} are correct</h2>`
}
// initial caall
loadQuestions()