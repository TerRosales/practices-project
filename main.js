// ColorBox 1
const colorBox = document.getElementById('color-box');
const hexCode = document.getElementById('hex-code');
let isLocked = false;


function getRandomizedColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6 ; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function toggleLock(){
    isLocked = !isLocked;
    const lockButton = colorBox.querySelector("button:nth-child(2)")
    lockButton.textContent = isLocked ? "Lock" : "Unlock";
}

function setColor() {
    if(!isLocked) {
        const randomColor = getRandomizedColor();
        colorBox.style.backgroundColor = randomColor;
        hexCode.value = randomColor;
    }
}



function randomizeColor() {
    setColor();
}

setColor();

// ColorBox 1 Ends

// ColorBox 2
const colorBox2 = document.getElementById('color-box-2');
const hexCode2 = document.getElementById('hex-code-2');
let isLocked2 = false;


function getRandomizedColor2() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6 ; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function toggleLock2(){
    isLocked2 = !isLocked2;
    const lockButton2 = colorBox2.querySelector("button:nth-child(2)")
    lockButton2.textContent = isLocked2 ? "Lock" : "Unlock";
}

function setColor2() {
    if(!isLocked2) {
        const randomColor2 = getRandomizedColor2();
        colorBox2.style.backgroundColor = randomColor2;
        hexCode2.value = randomColor2;
    }
}



function randomizeColor2() {
    setColor2();
}

setColor2();

// ColorBox 2 Ends

// ColorBox 3

const colorBox3 = document.getElementById('color-box-3');
const hexCode3 = document.getElementById('hex-code-3');
let isLocked3 = false;


function getRandomizedColor3() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6 ; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function toggleLock3(){
    isLocked3 = !isLocked3;
    const lockButton3 = colorBox3.querySelector("button:nth-child(2)")
    lockButton3.textContent = isLocked3 ? "Lock" : "Unlock";
}

function setColor3() {
    if(!isLocked3) {
        const randomColor3 = getRandomizedColor3();
        colorBox3.style.backgroundColor = randomColor3;
        hexCode3.value = randomColor3;
    }
}



function randomizeColor3() {
    setColor3();
}

setColor3();

// ColorBox 3 Ends

let isBoxLocked = true;

function getAllRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6 ; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

document.getElementById("randomizeAll").addEventListener("click", function() {

    if (!isLocked, !isLocked2, !isLocked3) {

        const colorBoxOne = document.getElementById("color-box");
        const colorBoxTwo = document.getElementById("color-box-2");
        const colorBoxThree = document.getElementById("color-box-3");


        colorBoxOne.style.backgroundColor = getAllRandomColor();

        colorBoxTwo.style.backgroundColor = getAllRandomColor();

        colorBoxThree.style.backgroundColor = getAllRandomColor();

        toggleLock();
        toggleLock2();
        toggleLock3();
    }
    // } else if (){

    // } else if (){

    // } else if (){

    // }else ()
        
});
        // Original
        // const colorBoxOne = document.getElementById("color-box");
        // const colorBoxTwo = document.getElementById("color-box-2");
        // const colorBoxThree = document.getElementById("color-box-3");



        // colorBoxOne.style.backgroundColor = getAllRandomColor();

        // colorBoxTwo.style.backgroundColor = getAllRandomColor();

        // colorBoxThree.style.backgroundColor = getAllRandomColor();



// -------------------------------------------------------------
// My Mistake

// const groupAdd = document.getElementById("groupAdd");
// groupAdd.addEventListener("click", makeGroup);

// function makeGroup() {
//     const newH1 = document.createElement('textarea');
//     newH1.setAttribute("placeholder", "Enter Todays Log");
//     const recieverPanel = document.getElementById('recieverPanel');
//     recieverPanel.appendChild(newH1);
// }

// -------------------------------------------------------------
// Project Title Field 
function createProjectDetails () {
    var titleArea = document.getElementById("titleArea").value;
    var textArea = document.getElementById("textArea").value;

    
    const recieverPanel = document.getElementById('recieverPanel');

    if (titleArea !== "") {
    newProjectHeader = document.createElement('H4');
    newProjectHeader.innerHTML = titleArea;

    newProjectDetails = document.createElement('P');
    newProjectHeader.className = "addedTitle";
    newProjectDetails.className = "addedDetails"

    newProjectDetails.innerHTML = textArea;
    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
    const editTitleArea = prompt('Edit Title', titleArea);
    if (editTitleArea !== null) {
        newProjectHeader.textContent = editTitleArea;
    }
    const editTextArea = prompt('Edit Description', textArea);
    if (editTextArea !== null) {
        newProjectDetails.textContent = editTextArea;
    }
    })

    var currentDate = new Date();
    var dateString = currentDate.toDateString();
    var timeString = currentDate.toLocaleTimeString();

    var dateTimeString = `Uploaded at ${dateString} on ${timeString}`;

    newProjectDate = document.createElement('H5');
    newProjectDate.className = "addedTimeDate";
    newProjectDate.innerHTML = dateTimeString;



    newDeleteButton = document.createElement('button');
    newDeleteButton.textContent = "Delete";
    newDeleteButton.addEventListener("click", function () {
        recieverPanel.removeChild(newProjectHeader);
        recieverPanel.removeChild(newProjectDetails);
        recieverPanel.removeChild(newProjectDate);
        recieverPanel.removeChild(newDeleteButton);
        recieverPanel.removeChild(editButton);
    })

    recieverPanel.appendChild(newProjectHeader);
    recieverPanel.appendChild(newProjectDetails);
    recieverPanel.appendChild(newProjectDate);
    recieverPanel.appendChild(newDeleteButton);
    recieverPanel.appendChild(editButton);

    document.getElementById("titleArea").value = ' ';
    document.getElementById("textArea").value = ' ';
    } else {
        alert("Please Enter Project Specifications");
    };
}

const groupAdd = document.getElementById("groupAdd");
groupAdd.addEventListener("click", createProjectDetails);

const container = document.getElementById("container");

const deleteButton = document.getElementById("deleteAllButton");

deleteAllButton.addEventListener("click", () => {
    while(recieverPanel.firstChild) {
        recieverPanel.removeChild(recieverPanel.firstChild);
    }
});
