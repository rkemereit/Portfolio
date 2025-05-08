import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BioCard from './components/BioCard';
import SkillsGallery from './components/SkillsGallery';
import Projects from './pages/Projects';
import ContactForm from './components/ContactForm';
import ThemeSwitch from './components/ThemeSwitch';
import profilePicture from './img/pro_picture.jpeg';
import './App.scss';

function App() {
  const sampleData = {
    profilePicture: profilePicture,
    name: 'Richard Kemereit',
    bio: `Hi! I'm Richard, a Web Developer from Illinois. I am currently 
    finishing my degree with Kirkwood Community College. I specialize in front-end development but
    am open to all possibilities. I am a quick learner and a team player. I have
    built a few projects in the past including databases as well as this portfolio.
    You can reach out to me via my contact page or see my socials.`,
    skills: ['React/Sass', 'MySQL', 'Java', 'JavaScript', 'HTML/CSS', 'Python']
  };

  return (
    <Router basename="/Portfolio">
      <div className="app">
        <header className="app__header">
          <ThemeSwitch />
        </header>
        
        <nav className="app__nav">
          <Link to="/" className="app__nav-link">Home</Link>
          <Link to="/projects" className="app__nav-link">Projects</Link>
          <Link to="/contact" className="app__nav-link">Contact</Link>
        </nav>

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <BioCard
                  profilePicture={sampleData.profilePicture}
                  name={sampleData.name}
                  bio={sampleData.bio}
                  skills={sampleData.skills}
                />
                <SkillsGallery skills={sampleData.skills} />
              </>
            } 
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
