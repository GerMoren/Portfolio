import React from "react";
import { skillsSection } from "../../portfolio";
import style from "./SoftwareSkill.module.css";

export default function SoftwareSkill() {
  return (
    <div>
      {/* <div className="software-skills-main-div"> */}
      <ul className={style.devIcons}>
        {skillsSection.softwareSkills.map((skills, index) => {
          return (
            <li
              key={index}
              className={style.softwareSkillsInline}
              name={skills.skillName}
            >
              <i className={skills.fontAwesomeClassname}></i>
              <p>{skills.skillName}</p>
            </li>
          );
        })}
      </ul>
      {/* </div> */}
    </div>
  );
}
