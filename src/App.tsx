import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Header } from '@ components/Header.tsx';
import { Footer } from '@ components/Footer.tsx';
import { Home } from '@ pages/Home.tsx';
import { About } from '@ pages/About.tsx';
import { Skills } from '@ pages/Skills.tsx';
import { ProjectComponent } from '@ pages/Projects.tsx';
import { Contact } from '@ pages/Contact.tsx';
import { GithubRepositories } from '@ pages/GithubRepositories.tsx'
import { AppContainer } from "@/styles/AppStyle/AppContainer.tsx";
import { MainContent } from "@/styles/AppStyle/MainContent.tsx";
import { ThemeProvider } from "@/context/ThemeContext.tsx";
import { AnimatePresence, motion } from "framer-motion";

export const AnimatedRoutes: React.FC<{ username: string }> = ({ username }) => {
    const location = useLocation();
    const pageVariants = {
        initial: {
            opacity: 0,
            x: "100vw",
            scale: 0.8,
        },
        animate: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
        exit: {
            opacity: 0,
            x: "-100vw",
            scale: 0.8,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <motion.div
                            style={{ width: "100%", height: "100%" }}
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Home />
                        </motion.div>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <motion.div
                            style={{ width: "100%", height: "100%" }}
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <About />
                        </motion.div>
                    }
                />
                <Route
                    path="/skills"
                    element={
                        <motion.div
                            style={{ width: "100%", height: "100%" }}
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Skills />
                        </motion.div>
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <motion.div
                            style={{ width: "100%", height: "100%" }}
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <ProjectComponent />
                        </motion.div>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <motion.div
                            style={{ width: "100%", height: "100%" }}
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Contact />
                        </motion.div>
                    }
                />
                <Route
                    path="/github-repositories"
                    element={
                        <motion.div
                            style={{ width: "100%", height: "100%" }}
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <GithubRepositories username = {username} />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};
export const App: React.FC = () => {
    const username = "tmanshhhh";
    return (
        <ThemeProvider>
            <Router>
                <AppContainer>
                    <Header />
                    <MainContent>
                        <AnimatedRoutes username={username} />
                    </MainContent>
                    <Footer />
                </AppContainer>
            </Router>
        </ThemeProvider>
    );
};
