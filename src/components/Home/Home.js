import React from 'react';
import MyImageLogo from "./ANA_1.jpg";
import {HomeSection, Content, Title2, Title3, ImageBox, Image, Info } from "./style.js";



const Home = () => {
  return (
    <div>
          
      <HomeSection >
        <div className="container">

          <Content>
            <Title2>AHMED ISMAIL</Title2>
            <Title3> FRONT END DEVELOPER </Title3>
            <ImageBox>
              <Image src={MyImageLogo} alt="" />
            </ImageBox>
            <Info>
              I Creat a Responsive Web Design From A to Z Its Responsive on All Screens
              By Using Many Of Technology And Program Language's Like (HTNL, CSS, JS, React, Redux,..... ) and it's has creative and modern shape
              <br /> <br />
              i'm work on my self all time to get the latest technologey for craeat
              the most better design and i am willing to be a fullStack web developer
            </Info>
          </Content>

        </div>
      </HomeSection>
    
    </div>
  )
}

export default Home
