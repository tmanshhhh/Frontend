import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from '@ components/Header.tsx';
import { Footer } from '@ components/Footer.tsx';
import { Home } from '@ pages/Home.tsx';
import { About } from '@ pages/About.tsx';
import { Skills } from '@ pages/Skills.tsx';
import { ProjectComponent } from '@ pages/Projects.tsx';
import { Contact } from '@ pages/Contact.tsx';
import { GithubRepositories } from '@ pages/GithubRepositories.tsx'

export const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<ProjectComponent />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/github-repositories" element={<GithubRepositories />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};
