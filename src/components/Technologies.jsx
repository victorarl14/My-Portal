import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaGithub } from 'react-icons/fa';

const Technologies = () => (
  <section className="technologies">
    <h2>Tecnologías</h2>
    <div className="technologies__icons">
      <FaHtml5 title="HTML5" />
      <FaCss3Alt title="CSS3" />
      <FaJs title="JavaScript" />
      <FaReact title="React" />
      <FaPython title="Python" />
      <FaNodeJs title="Node.js" />
      <FaGithub title="GitHub" />
      {/* Agrega más íconos según tus tecnologías */}
    </div>
  </section>
);

export default Technologies; 