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
      <Card className="overflow-hidden bg-cream border-[3px] border-neo-black rounded-neo shadow-neo-brutal transition-transform duration-300 hover:-translate-y-2">
        <CardContent className="p-8 flex flex-col items-center text-center">
          <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-[3px] border-neo-black shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-neo-yellow">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
          </div>

          <h3 className="text-3xl font-black text-neo-black mb-2 uppercase">
            {member.name}
          </h3>
          <p className="bg-neo-blue text-white px-3 py-1 font-bold text-sm mb-6 pb-1 border-[2px] border-neo-black">
            NIM: {member.nim}
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href={member.socials.instagram}
              className="w-12 h-12 bg-white flex items-center justify-center border-[3px] border-neo-black rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-neo-yellow hover:-translate-y-1 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 stroke-[2.5px] text-neo-black" />
            </a>
            <a
              href={member.socials.github}
              className="w-12 h-12 bg-white flex items-center justify-center border-[3px] border-neo-black rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-neo-yellow hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 stroke-[2.5px] text-neo-black" />
            </a>
            <a
              href={member.socials.linkedin}
              className="w-12 h-12 bg-white flex items-center justify-center border-[3px] border-neo-black rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-neo-yellow hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 stroke-[2.5px] text-neo-black" />
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
        <Card className="bg-neo-green border-[3px] border-neo-black rounded-neo overflow-hidden shadow-neo-brutal">
          <CardContent className="p-8 md:p-10 space-y-8 bg-white mt-2 mb-2 ml-2 mr-2 border-[3px] border-neo-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl md:text-4xl font-black text-neo-black text-center uppercase bg-neo-yellow inline-block px-4 py-2 border-[3px] border-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)] -rotate-1 mx-auto block w-fit">
              About This Project
            </h2>

            <div className="space-y-6 text-neo-black font-medium leading-relaxed text-left text-lg">
              <p>
                Website ini dikembangkan sebagai bagian dari tugas Ujian Akhir
                Semester pada mata kuliah{" "}
                <strong className="font-bold bg-cream px-1 border border-neo-black">
                  Strategi Algoritma
                </strong>
                . Tujuan utama dari pengembangan aplikasi ini adalah untuk
                mengimplementasikan dan memvisualisasikan algoritma{" "}
                <strong className="font-bold bg-neo-yellow px-1 border border-neo-black">
                  Greedy
                </strong>{" "}
                dalam menyelesaikan permasalahan{" "}
                <strong className="font-bold bg-neo-blue text-white px-1 border border-neo-black">
                  Coin Change
                </strong>{" "}
                (kembalian uang).
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
