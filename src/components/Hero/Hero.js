import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hey, I’m Ayman El Hamoussi , I am Web Developer with Electrical
          Engineering background. I like to create new stuff and experiment with
          it. Nothing is constant, so I favor action over perfection (I learn it
          the hard way). I am passionate about User Experience and Design, I’m
          in the process to nail that skill on professional level. This website
          is one of my attempts of trial and error in my learning process. I
          hope you like it. I think that technology evolving faster than we can
          adapt to it, so the best way is to adjust the mentality of being
          uncomfortable to some degree. The future is just another path.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
