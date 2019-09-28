import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Main from './components/main';

function App() {
  return (
/* Uses a transparent header that draws on top of the layout's background */
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<a href="/">Jake</a>} scroll>
            <Navigation>
                <a href="/resume">Resume</a>
                <a href="/aboutme">About Me</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
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

        <Footer size="mini">
            <FooterSection type="left" logo="Jake Sonnier">
                <FooterLinkList>
                    <a href="http://google.com">Help</a>
                    <a href="http://google.com">Privacy & Terms</a>
                </FooterLinkList>
            </FooterSection>
        </Footer>

    </Layout>
</div>
  );
}

export default App;
