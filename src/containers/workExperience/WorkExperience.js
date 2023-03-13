import React, { useContext } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import style from "./WorkExperience.module.css";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);
  if (workExperiences.viewExperiences) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className={style.container} id="workExperience">
            <div>
              <h1 className={style.heading}>Experiences</h1>
              <div className={style.cardsDiv}>
                {workExperiences.experience.map((card, index) => {
                  return (
                    <ExperienceCard
                      key={index}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
