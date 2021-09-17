const voice = document.querySelector(".voice")
const voice2text = document.querySelector(".voice2text")


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();


function addHumanText(text){
    const chatContainer = document.createElement("div");
    chatContainer.classList.add('chat-container');

    const chatBox = document.createElement('p');
    chatBox.classList.add('voice2text');

    const chatText = document.createTextNode(text);
    chatBox.appendChild(chatText);

    chatContainer.appendChild(chatBox)
    return chatContainer;
}

function addBotText(text){
    const chatContainer1 = document.createElement("div");
    chatContainer1.classList.add('chat-container');
    chatContainer1.classList.add('darker');

    const chatBox1 = document.createElement('p');
    chatBox1.classList.add('voice2text');

    const chatText1 = document.createTextNode(text);
    chatBox1.appendChild(chatText1);

    chatContainer1.appendChild(chatBox1)
    return chatContainer1;
}



function botVioce(messagee){
    const speech = new SpeechSynthesisUtterance();
    speech.text= "Sorry, I did not understand that";

    if(messagee.includes('how are you')){
        speech.text="I am Fine, thank. How are you?"
    }
    if(messagee.includes('fine','i am fine')){
        speech.text="Nice to hear that. How can I assist you today?"
    }
    if(messagee.includes('weather')){
        speech.text="Of course. where are you currently?"
    }
    if(messagee.includes('what is your name')){
        speech.text="My name is  Alo. And you Name?"
    }
    if(messagee.includes('my name is MD Asif Ahmed')){
        speech.text="oky. nice to meet you?"
    }


    speech.volume= 1;
    speech.rate= 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech)

    setTimeout(()=>{
        var element = document.querySelector("#container")
        element.appendChild(addBotText(speech.text));
    },1000)
}



recorder.onstart=()=>{
    console.log('Voice activated')
}

recorder.onresult= (event)=>{
    console.log(event);
    const resultIndex = event.resultIndex;
    const transcript = event.results[resultIndex][0].transcript;
    // voice2text.textContent=transcript;
    var element = document.querySelector("#container");
    element.appendChild(addHumanText(transcript));
    botVioce(transcript)
}

voice.addEventListener('click',()=>{
    recorder.start();
})
