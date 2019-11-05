import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, } from 'react-mdl';
import Main from './components/main';

function App() {
  return (
/* Uses a transparent header that draws on top of the layout's background */
<div className="demo-big-content">
    <Layout>
        <Header id="title" className="header-color" title={<a href="/">Jake</a>} scroll>
            <Navigation>
                <a href="/resume">Resume</a>
                <a href="/aboutme">About Me</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </Navigation>
        </Header>
        <Drawer id="navTitle" title={<a href="/">Jake</a>}>
            <Navigation>
                <a href="/resume">Resume</a>
                <a href="/aboutme">About Me</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
