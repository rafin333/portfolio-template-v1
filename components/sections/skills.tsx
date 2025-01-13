// "use client";

// import { motion } from 'framer-motion';
// import { Progress } from '@/components/ui/progress';
// import { useInView } from 'react-intersection-observer';

// const skills = {
//   technical: [
//     { name: "React/Next.js", level: 95 },
//     { name: "TypeScript", level: 90 },
//     { name: "Node.js", level: 85 },
//     { name: "Python", level: 80 },
//     { name: "SQL/NoSQL", level: 85 },
//     { name: "AWS/Cloud", level: 75 },
//   ],
//   soft: [
//     "Problem Solving",
//     "Team Leadership",
//     "Communication",
//     "Project Management",
//     "Agile Methodology",
//     "Mentoring",
//   ],
// };

// export function Skills() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="skills" className="py-20 bg-muted/50">
//       <div className="container mx-auto px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
//           <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
//             <div>
//               <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
//               <div className="space-y-6">
//                 {skills.technical.map((skill, index) => (
//                   <motion.div
//                     key={skill.name}
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={inView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                   >
//                     <div className="flex justify-between mb-2">
//                       <span>{skill.name}</span>
//                       <span>{skill.level}%</span>
//                     </div>
//                     <Progress value={skill.level} className="h-2" />
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {skills.soft.map((skill, index) => (
//                   <motion.div
//                     key={skill}
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={inView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="bg-card p-4 rounded-lg text-center"
//                   >
//                     {skill}
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { useInView } from 'react-intersection-observer';

const skills = {
  technical: [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "SQL/NoSQL", level: 85 },
    { name: "AWS/Cloud", level: 75 },
  ],
  soft: [
    "JavaScript",
    "JavaScript Frameworks (React, Vue, Angular)",
    "Next JS",
    "Tailwind CSS",
    "Version Control: Git and GitHub",
  ],
};

const experience = [
  { year: 2023, role: "WordPress", company: "Fiverr" },
  { year: 2024, role: "Junior Software Engineer", company: "Fintech Hub" },
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Experience</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Skills</h3>
              <div className="space-y-4">
                {skills.soft.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-4 rounded-lg shadow-md"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-4 border-primary pl-4"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-lg font-semibold">{exp.year}</div>
                      <div className="flex flex-col">
                        <span className="text-md font-bold">{exp.role}</span>
                        {exp.company && <span className="text-sm text-gray-600">{exp.company}</span>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
