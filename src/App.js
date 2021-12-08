import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'/>
            </header>
            <nav className='nav'>
                <div>
                   <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src='https://www.lufthansa.com/content/dam/lh/images/pixels_variations/c-374116967-7787557.jpg.transform/lh-dcep-transform-width-1440/img.jpg'/>
                </div>
                <div>
                    <img src='https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg'/>
                </div>
                <div>
                    My posts
                    <div>
                        New posts
                    </div>
                </div>
                <div>
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                    <div>
                        post3
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
