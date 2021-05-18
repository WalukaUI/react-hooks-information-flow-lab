function Head({onDarkModeClick,isMode}) {
    return <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
            {isMode ? "Dark" : "Light"} Mode
         </button>
    </header>

}
export default Head
