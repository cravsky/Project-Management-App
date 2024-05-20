import Input from "./Input"

export default function NewProject() {
    return <div>
        <menu>
            <li><button>Cancel</button></li>
            <li><button>Save</button></li>
        </menu>
        <div>
            <Input label="Title"></Input>
            <Input label="Description" textarea></Input>
            <Input label="Due Date"></Input>
            {/* <p>
                <label></label>
                <input>Title</input>
            </p>
            <p>
                <label>Description</label>
                <textarea></textarea>
            </p>
            <p>
                <label>Due Date</label>
                <input></input>
            </p> */}
        </div>
    </div>
}