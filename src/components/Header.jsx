import "../styles/Header.scss"

function Header() {
    return (
        <header>
            <div className="container p-4">
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-center">
                        <img className="logo-nav" src="./public/img/logo-nav.png" alt="Logo" />
                        <p>Your Favorite React Meme Generator since 2k23</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header