import create from "zustand";
import { getInitialData, showFormattedDate} from "./initialData";

const notesStore = create(set => ({
    notes: getInitialData(),
    createNote: ({title, body, color}) =>{
        set(state => ({notes : [
            {
                id: new Date(),
                title,
                body,
                color,
                createdAt: showFormattedDate(new Date()),
                archieved: false,
            },...state.notes]}))
    },
}))

export default notesStore;