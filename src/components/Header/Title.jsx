import "./Title.css"
const Title = ({name}) =>{
    return(
        <div className="title-container">
            <div className="title-name">
                {name}
            </div>
        </div>
    )
}
export default Title;