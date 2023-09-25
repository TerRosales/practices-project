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
    newProjectHeader = document.createElement('H4');
    newProjectHeader.innerHTML = titleArea;

    newProjectDetails = document.createElement('P');
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
    var timeString = currentDate.toLocaleDateString();

    var dateTimeString = `Uploaded at ${dateString} on ${timeString}`;

    newProjectDate = document.createElement('H5');
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







