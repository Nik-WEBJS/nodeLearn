const  yargs  = require("yargs");
const {addNote, printNotes, deleteNotedById} = require("./notes.controller")

yargs.command({
    command:"add",
    discribe:"add new note to list",
    builder:{
        title : {
            type:"string",
            describe:"note title",
            demandOption: true
        }
    },
    handler({title}){
        addNote(title)
    }
})

yargs.command({
    command:"list",
    discribe:"print all notes",
   async handler(){
        printNotes()
    }
})

yargs.command({
    command:"remove",
    discribe: "Remove note by id",
    builder:{
        id : {
            type:"string",
            describe:"note id",
            demandOption: true
        }
    },
    handler({id}){
        deleteNotedById(id)
    }
})

yargs.parse()