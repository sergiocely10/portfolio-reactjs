import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import './css/header.css'
import './css/intro.css'
import './css/projects.css'
import './css/contactform.css'
import './css/footer.css'
import Header from './Header.jsx'
import Intro from './Intro.jsx'
import Projects from './Projects.jsx'
import ContactForm from './ContactForm.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('home-page')).render(
  <React.StrictMode>
    <Header />
    <Intro />
    <Projects />
    <ContactForm />
    <Footer />
  </React.StrictMode>,
)
