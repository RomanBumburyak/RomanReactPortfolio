import React from 'react';
import ReactDOM from 'react-dom';
import './information.css';





class Information extends React.Component {
    render () {
        return (
            
               
                <div className="main-info-div">
                    <div className="information-class-parent">
                    <h1>About Me</h1>
                        <p>
                        I am an ambitious person who values code. I really enjoy technology and all of the possible applications I could create.<br></br>
                         When I was about 5 we got our first computer. I've been glued to it ever since.
                            My main goal is to convert real-life issues into software solutions.
                            <br></br> I have helped companies in the past edit and fix their sites in various languages. I believe that I can effectively use my knowledge in coding, and 
                            help Business owners fix issues, and improve their Software tools. 
                            Learning to solve detailed tech issues is a useful skill I've improved in.
                            <br></br>I was born in Ukraine, and moved to the USA when I was a year old. I speak fluent Ukrainian and Russian. 
                            I play Basketball when i'm not coding. I'm single and I'm almost 24 years old.
                        </p>
                       
                    </div>
                    <div className="info-child-one">
                        <h1>My Skill Set</h1>
                        <p>
                        Programming is one of my favorite activities. Learning,testing, and patience in coding difficulties, are skills I have improved on significantly.<br></br>
                         I have experience with multiple Languages. Back-end, Front-end, Mobile, Databases, and Frameworks, all have interested me 
                          greatly since I began coding several years ago. I would like to continue to persue Front-End development,
                           specifically in JavaScript React and Angular. I have experimented with React Native and Expo, along with Android Studio.
                           I understand how technologies work with one another inside an application. And their benefits. I am a tedious learner and when I come across something I don't know,
                           I take the time to learn it completely and thoroughly.
                        </p>
                        
                    </div>
                    <div className="info-child-two">
                        <h1>My Aspirations</h1>
                        <p>
                            I aspire to own a Successful Software Development Company.<br></br>
                             Either creating websites/portals, internal software, complex applications, and overall
                            useful and efficient Software Solutions for Businesses.
                            <br></br> I would like to have my own team with Developers, Project Managers,
                              Designers, Tech leads, in order to create meaningful Software.  
                        </p>
                    </div>
                 </div>
         )
    }
}


export default Information;