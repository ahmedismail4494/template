import React from 'react';
import Skills from "../Skills/Skills";

import {AboutSection, Title, TitleSpan, Personal, Part, Title3, Part_P, PartSpan } from "./style.js";

const About = () => {
  return (
    <div>
        <AboutSection>
          <div class="container">

            <Title> ABOUT <TitleSpan>ME</TitleSpan> </Title>

            <Personal>
                <Part>
                    <Title3> Personal Information About Me :- </Title3>
                    <Part_P> <PartSpan> NAME : </PartSpan> Ahmed Ismail Mohamed </Part_P>
                    <Part_P> <PartSpan> Education : </PartSpan> Mechatronics Engineering </Part_P>
                    <Part_P> <PartSpan> Date of Birth : </PartSpan> 4 / 4 / 1994</Part_P>
                    <Part_P> <PartSpan> Work : </PartSpan> FrontEnd Developer</Part_P>
                    <Part_P> <PartSpan> Nationality : </PartSpan> Egyption</Part_P>
                    <Part_P> <PartSpan> First Language : </PartSpan> Arabic / Mother Tongue</Part_P>
                    <Part_P> <PartSpan> Secound Language : </PartSpan> English</Part_P>
                </Part>
        
                <div class="part_2 ">
        
                </div>
            </Personal>  

          </div>

          <Skills />
        </AboutSection>

    </div>
  )
}

export default About
