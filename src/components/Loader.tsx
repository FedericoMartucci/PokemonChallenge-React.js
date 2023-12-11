import '../Loader.css'
function Loader () {
    return (
        <div className='loader-container'>
            <div className="loader">
                <div className="semicircle-up"></div>
                <div className="center"></div>
                <div className="semicircle-down"></div>
            </div>
        </div>
    )
}

export default Loader;