import React from "react";
import style from "../styles/Flipper.module.css";
import Flipper from "./Flipper";
import skills from "../data/skills";

export default function Skills({}) {
  return (
    <div className={style.skills}>
      {skills.map((skill, id) => (
        <Flipper key={id} image={skill.image} text={skill.name} />
      ))}
    </div>
  );
}
