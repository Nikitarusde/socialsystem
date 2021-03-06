import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {updateNewPostText} from "./redux/state";



const App = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs*" element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path="/profile" element={<Profile profilePage={props.state.profilePage} updateNewPostText={updateNewPostText} addPost={props.addPost}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>

                        {/*<Route path="/dialogs" render={() => <Dialogs/>}/>*/}
                        {/*<Route path="/profile" render={() => <Profile/>}/>*/}
                        {/*<Route path="/news" render={() => <News/>}/>*/}
                        {/*<Route path="/music" render={() => <Music/>}/>*/}
                        {/*<Route path="/settings" render={() => <Settings/>}/>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
