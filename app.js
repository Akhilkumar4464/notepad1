const addbtn = document.querySelector("#addbtn")
const main = document.querySelector("#main")

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach(
        (note) => {
            if (note.value.trim() !== "") { // Check for empty textareas
                data.push(note.value);
            }
        }
    );
    console.log("Saving notes:", data); // Debugging line
    localStorage.setItem("notes", JSON.stringify(data));
}

addbtn.addEventListener(
    "click",
    function() {
        addNote()
    }
)

const addNote = () => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `<div class="tool">
    <i class="save fa-solid fa-floppy-disk"></i>
    <i class="trash fa-solid fa-trash-can"></i>
</div>
<textarea> </textarea>`;

    note.querySelector(".trash").addEventListener(
        "click",
        function() {
            note.remove()
        }
    )

    note.querySelector(".save").addEventListener(
        "click",
        function() {
            saveNotes()
        }
    )
    main.appendChild(note);
}
