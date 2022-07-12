import NoteList from "../molecules/NoteList/NoteList";
import Container from "../atoms/Container/Container";
import WidgetButton from "../atoms/WidgetButton/WidgetButton";

const NoteApp = () =>{
    return(
        <Container>
            <NoteList/>
            <WidgetButton text="+" position="bottom-right" label="Create Note"/>
        </Container>
    )
}

export default NoteApp;