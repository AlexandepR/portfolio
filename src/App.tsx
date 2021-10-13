import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyProjects from "./projects/MyProjects";
import FreeWork from "./freeWok/FreeWork";
import Contacts from "./contacts/Contacts";

function App() {
    return (
        <div className={"App"}>
            <Header />
            <Main />
            <Skills />
            <MyProjects />
            <FreeWork
                description={'I look for work'}
            />
            <Contacts />
        </div>
    );
}

export default App;
