var app = require('electron').remote
var dialog = app.dialog
var fs = require('fs')

document.getElementById('btn').addEventListener('click', saveFile)

function saveFile(){
   dialog.showSaveDialog((filename)=>{
       if (filename === undefined){
           alert("You did not enter a file name.")
           return;
       }

       var content = document.getElementById("content").value

       fs.writeFile(filename, content, (err)=>{
           if (err) console.log(err)
           alert("The file has been saved successfully!")
       })

   })
    
}

document.getElementById('open').addEventListener('click', openfile)

function openfile(){
    dialog.showOpenDialog((filenames) =>{
        if(filenames === undefined){
            alert("No files were selected")
            return;
        }

        readFile(filenames[0]);
    })
}

function readFile(filepath){
    fs.readFile(filepath, 'utf-8', (err, data) =>{
        if (err){
            alert("There was an error retrieving your file.")
            return
        }
        var textArea = document.getElementById('output')
        textArea.value = data
    })
}



