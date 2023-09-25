// const groupAdd = document.getElementById("groupAdd");
// groupAdd.addEventListener("click", makeGroup);

// function makeGroup() {
//     const newH1 = document.createElement('textarea');
//     newH1.setAttribute("placeholder", "Enter Todays Log");
//     const recieverPanel = document.getElementById('recieverPanel');
//     recieverPanel.appendChild(newH1);
// }

function createProjectDetails () {
    var titleArea = document.getElementById("titleArea").value;
    var textArea = document.getElementById("textArea").value;

    
    const recieverPanel = document.getElementById('recieverPanel');

    if (titleArea !== "") {
    newH1 = document.createElement('H1');
    newH1.innerHTML = titleArea;

    newP = document.createElement('P');
    newP.innerHTML = textArea;

    newDeleteButton = document.createElement('button');
    newDeleteButton.textContent = "Delete";
    newDeleteButton.addEventListener("click", function () {
        recieverPanel.removeChild(newH1);
        recieverPanel.removeChild(newP);
        recieverPanel.removeChild(newDeleteButton);
    })



    recieverPanel.appendChild(newH1);
    recieverPanel.appendChild(newP);
    recieverPanel.appendChild(newDeleteButton);

    document.getElementById("titleArea").value = 'Enter your title...';
    document.getElementById("textArea").value = 'Enter your text...';
    } else {
        alert("Please Enter Project Specifications")
    }
}

const groupAdd = document.getElementById("groupAdd");
groupAdd.addEventListener("click", createProjectDetails);







