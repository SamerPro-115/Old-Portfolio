import {useDarkMode } from '../Body/DarkModeContext.js';



const AboutMe = (prop) => {
  const isDarkMode = useDarkMode();

    return (
        <section className={`animate__animated animate__fadeIn about-me ${isDarkMode ? "" : "light-text"}`}>
<h1 className="about-me-title">About me ?</h1>
<p className="about-me-des">
  My name is Samer Mohammed Alashqar. I'm a web developer who designs and build
  websites. I'm a university student also, I'm a developer since 2021. And not just that ! I'm also a
  content creator on TikTok with over 50k brothers. I'm the founder and creator of the
  "Programming World" Discord server which contains over 500 people
  sharing the same interest on learning how to code !
</p>
</section>
    );
}

export default AboutMe;