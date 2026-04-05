import React from "react";
import { motion } from "motion/react";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent } from "../components/ui/Card";

interface TeamMember {
  name: string;
  nim: string;
  photo: string;
  socials: {
    instagram: string;
    github: string;
    linkedin: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Zain",
    nim: "1",
    photo: "/src/img/profil.jpg",
    socials: {
      instagram: "#",
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "Adid",
    nim: "2",
    photo: "/src/img/profil.jpg",
    socials: {
      instagram: "#",
      github: "#",
      linkedin: "#",
    },
  },
];

const ProfileCard: React.FC<{ member: TeamMember; delay: number }> = ({
  member,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="group"
    >
      <Card className="overflow-hidden bg-slate-800/80 backdrop-blur-sm border-slate-700/50 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20">
        <CardContent className="p-8 flex flex-col items-center text-center">
          <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-slate-700 group-hover:border-blue-500/50 transition-colors duration-300 shadow-inner">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>

          <h3 className="text-2xl font-bold text-slate-100 mb-1">
            {member.name}
          </h3>
          <p className="text-blue-400 font-medium text-sm mb-6 pb-6 border-b border-slate-700/50 w-full">
            {member.nim}
          </p>

          <div className="flex gap-5 justify-center">
            <a
              href={member.socials.instagram}
              className="text-slate-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href={member.socials.github}
              className="text-slate-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={member.socials.linkedin}
              className="text-slate-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export function About() {
  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-12 pt-4">
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          {teamMembers.map((member, idx) => (
            <ProfileCard key={idx} member={member} delay={idx * 0.2} />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-4xl mx-auto px-4"
      >
        <Card className="bg-slate-800/80 border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl">
          <CardContent className="p-8 md:p-10 space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 text-center">
              About This Project
            </h2>

            <div className="space-y-4 text-slate-300 leading-relaxed text-left">
              <p>
                Website ini dikembangkan sebagai bagian dari tugas Ujian Akhir
                Semester pada mata kuliah Strategi Algoritma. Tujuan utama dari
                pengembangan aplikasi ini adalah untuk mengimplementasikan dan
                memvisualisasikan algoritma Greedy dalam menyelesaikan
                permasalahan Coin Change (kembalian uang).
              </p>
              <p>
                Melalui website ini, pengguna dapat memahami bagaimana algoritma
                Greedy bekerja secara langkah demi langkah dalam menentukan
                kombinasi pecahan uang yang optimal. Selain itu, aplikasi ini
                juga dirancang untuk memberikan pengalaman interaktif agar
                konsep algoritma lebih mudah dipahami secara praktis.
              </p>
              <p>
                Pengembangan aplikasi ini diharapkan dapat membantu dalam proses
                pembelajaran serta menjadi media demonstrasi yang efektif dalam
                memahami strategi algoritma pada permasalahan nyata.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
