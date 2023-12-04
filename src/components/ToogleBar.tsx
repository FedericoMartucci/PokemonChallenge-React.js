import Lupe from "../LupeIcon.png"
function ToogleBar () {
    return (
    <form>
        <div className="toogle-bar">
            <img id="lupe-icon" src={Lupe} alt="Lupe"/>
            <input type="text" placeholder="Search..." />
        </div>
    </form>
    );
}

export default ToogleBar;