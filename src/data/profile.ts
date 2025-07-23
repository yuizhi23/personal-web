import { ExperienceItem, EducationItem, OrganizationItem, CertificationItem, AchievementItem, SkillCategory } from '../types';

export const personalInfo = {
  name: 'Yukie Ramadhani Kiyoshi',
  title: 'Informatics Student & Voice-Over Artist',
  email: 'yukiekiyoshi123@gmail.com',
  phone: '081280106134',
  location: 'Bandung, West Java',
  linkedin: 'linkedin.com/in/yukiekiyoshi',
  summary: 'A highly motivated and versatile Informatics student with expertise in programming, content creation, video editing, story writing, and voice-over. Proficient in Microsoft Office and equipped with strong problem-solving and communication skills. Actively seeking opportunities to apply my knowledge and grow in dynamic, collaborative environments. Known for adaptability, creativity, and strong initiative.',
  tagline: 'Clean visuals. Clear message. Conscious intent.',
  voiceOverTagline: 'Every word, with purpose. Every tone, with feeling.',
  voiceOverDescription: 'My voice-over work blends clarity, character, and rhythm — whether it\'s narrating a course, telling a brand story, or giving soul to a product.',
  voiceOverLink: 'https://bit.ly/VoiceOverYukie',
  whyChooseMe: 'Choose me for my ability to merge creativity, technical skills, and leadership into results that matter — not just for now, but for what\'s next.'
};

export const professionalExperience: ExperienceItem[] = [
  {
    title: 'Voice Over Artist',
    organization: 'PT Panca Kraft Pratama',
    period: 'May 2025',
    location: 'Indonesia (Hybrid)',
    description: 'Voiced the official company profile video with clear, engaging narration that captured the brand\'s values and vision. Delivered voice-over with professional tone and message clarity.',
    skills: ['Voice Acting', 'Voice Direction', 'Commission Work', 'Voice Casting']
  },
  {
    title: 'Voice Over Artist',
    organization: 'FREZHCHICK (Larislokal)',
    period: 'Feb 2025',
    location: 'Indonesia (Hybrid)',
    description: 'Lent voice to Tokopedia x Frezhchick\'s Ramadhan campaign. Created a warm, human-centered audio presence aligned with the festive tone.',
    skills: ['Voice Acting', 'Direction', 'Gigs', 'Branding']
  },
  {
    title: 'Voice Over Talent & Scriptwriter',
    organization: 'ERA Infinity',
    period: 'Mar 2025',
    location: 'Remote (Indonesia)',
    description: 'Wrote and narrated engaging real estate promos that bring property listings to life. Helped humanize listings and improve digital engagement.',
    skills: ['Voice Acting', 'Scriptwriting', 'Branding', 'Client Engagement']
  },
  {
    title: 'Voice Over Artist',
    organization: 'JAGOTI LMS',
    period: 'Oct 2024',
    location: 'Remote',
    description: 'Narrated K3 training, customer service, and communication skill modules for LMS platform. Balanced clarity, tone, and warmth in e-learning voice-overs.',
    skills: ['Voice Direction', 'Voice Acting', 'eLearning VO', 'Storytelling']
  },
  {
    title: 'Content Creator & Marketing Specialist',
    organization: 'HelPhin Indonesia',
    period: 'Oct 2024',
    location: 'Hybrid',
    description: 'Created and starred in promotional/educational video content. Developed bold, youth-friendly campaigns to elevate HelPhin\'s platform and brand identity.',
    skills: ['Strategic Marketing', 'Content Creation', 'Video Editing', 'Scriptwriting']
  },
  {
    title: 'Content Creator',
    organization: 'HelPhin.id',
    period: 'Oct 2024',
    location: 'Hybrid',
    description: 'Produced creative, bold, and relatable content to communicate HelPhin\'s vision. Engaged users through storytelling and visual branding.',
    skills: ['Content Creation', 'Campaign Writing', 'Strategic Marketing']
  },
  {
    title: 'Voice Over Artist',
    organization: 'Belawa Phone',
    period: 'Mar 2024',
    location: 'Indonesia (Hybrid)',
    description: 'Joined as freelance voice-over talent, narrating product messages with clarity and character. Brought fresh tone to tech-forward content.',
    skills: ['Voice Acting', 'Voice Over Internet Protocol (VoIP)', 'Commission Work', 'Audio Branding']
  },
  {
    title: 'Voice Over Artist',
    organization: 'Freelancer.com',
    period: 'Nov 2023',
    location: 'Remote',
    description: 'Worked on a variety of projects, from voice acting to creative writing and content editing. Built early client base and polished voice-over delivery.',
    skills: ['Voice Acting', 'Creative Writing', 'Microsoft Office', 'Canva', 'Go Programming']
  },
  {
    title: 'Voice Over Artist',
    organization: 'Fastwork.co',
    period: 'Jun 2024 – Oct 2024',
    location: 'Remote',
    description: 'Handled commissioned voice-over projects ranging from character dubbing to commercial delivery.',
    skills: ['Dubbing', 'Gigs', 'Commission Work']
  }
];

export const organizationalExperience: OrganizationItem[] = [
  {
    role: 'Event Coordinator',
    organization: 'Hello World 2025',
    period: 'May – Sep 2025',
    location: 'Bandung (On-site)',
    description: 'Served as the Event Coordinator for Hello World 2025, a flagship program under the Student Affairs Division (KMS) aimed at welcoming new Informatics students. Oversaw the entire execution of the event, from planning and concept development to cross-team coordination and on-the-day operations.',
    skills: ['Event Management', 'Leadership', 'Coordination', 'Execution']
  },
  {
    role: 'Public Relations Committee Leader',
    organization: 'Hello World 2024',
    period: 'Jul – Sep 2024',
    location: 'Bandung (On-site)',
    description: 'Led communication, content strategy, and media outreach for a major welcoming event for Informatics students. Ensured high visibility and impactful messaging.',
    skills: ['Public Relations', 'Campaign Strategy', 'Team Leadership']
  },
  {
    role: 'Public Relations Committee Leader',
    organization: 'CARNIVAL 2025',
    period: 'May 2025',
    location: 'Bandung (On-site)',
    description: 'Led the Public Relations division for CARNIVAL 2025, an appreciation and celebration event for Informatics graduates, commonly known as "Arak-arakan." Crafted messaging strategies, supervised social media campaigns, and ensured strong visibility for this flagship event by HIMA IF.',
    skills: ['Public Relations', 'Strategic Communication', 'Leadership', 'Campaign Coordination']
  },
  {
    role: 'Public Relations Committee Leader',
    organization: 'CARNIVAL 2024',
    period: 'Nov 2024 – Dec 2024',
    location: 'Bandung (On-site)',
    description: 'Crafted communication strategies to celebrate Informatics graduates. Built event visibility through digital content and storytelling.',
    skills: ['Public Speaking', 'Public Relations', 'Coordination']
  },
  {
    role: 'Public Relations Committee Staff',
    organization: 'Viva La Fia 2024',
    period: 'Aug – Oct 2024',
    location: 'Bandung',
    description: 'Helped shape the event\'s digital presence through public relations strategy and creative media posts.',
    skills: ['Copywriting', 'Digital Public Relations']
  },
  {
    role: 'Logistics Staff',
    organization: 'Anniv Insight HIMA IF',
    period: 'Nov – Dec 2024',
    location: 'Bandung',
    description: 'Managed event logistics and materials for HIMA IF\'s anniversary celebration. Ensured readiness and coordination of key needs.',
    skills: ['Logistics', 'Resource Management']
  },
  {
    role: 'Event Staff & Master of Ceremony',
    organization: 'One Fine Day 2024 (BPH HIMA IF)',
    period: 'Dec 2024 – Jan 2025',
    location: 'Bandung',
    description: 'Contributed to event planning and served as Master of Ceremony. Strengthened public speaking and crowd engagement in a creative setting.',
    skills: ['Event Planning', 'Hosting', 'Public Speaking']
  },
  {
    role: 'Managerial Intern (Valorant Division)',
    organization: 'YOUNGERS (FIA)',
    period: 'Oct 2024 – Present',
    location: 'On-site',
    description: 'Supported event and team operations in the e-sports sub-division. Assisted with documentation, strategy, and coordination.',
    skills: ['Coordination', 'Event Support']
  }
];

export const leadershipExperience: OrganizationItem[] = [
  {
    role: 'Head of Student Affairs Division (KMS)',
    organization: 'HIMA S1 Informatika',
    period: 'Mar 2025 – Present',
    location: 'Bandung',
    description: 'Leads division activities, initiatives, and member development. Serves as a communication bridge between students and academic leaders.',
    skills: ['Leadership', 'Advocacy', 'Mentorship']
  },
  {
    role: 'Mahasiswa of The Year 2023',
    organization: 'HIMA S1 Informatika',
    period: 'Dec 2024 – Present',
    location: 'Bandung',
    description: 'Awarded for outstanding contributions to the community and organization. Recognized at Insight & Anniv HIMA IF 2024.',
    skills: ['Leadership', 'Public Speaking', 'Time Management']
  },
  {
    role: 'Junior Staff (KMS Division)',
    organization: 'BPH HIMAIF',
    period: 'Oct 2024 – Present',
    location: 'Bandung',
    description: 'Contributed to student support initiatives and communication platforms. Worked closely with team to build inclusive student culture.',
    skills: ['Student Support', 'Problem Solving', 'Communication']
  },
  {
    role: 'Vice President',
    organization: 'PMR SMAN 12 Bekasi',
    period: '2021 – 2022',
    location: 'Bekasi',
    description: 'Led youth health campaigns and student outreach efforts. Supported internal coordination and external representation.',
    skills: ['Leadership', 'Youth Engagement']
  }
];

export const education: EducationItem[] = [
  {
    institution: 'Telkom University',
    degree: 'Bachelor\'s Degree in Informatics',
    period: '2023 – 2027'
  },
  {
    institution: 'Senior High School 12 Bekasi',
    degree: 'Science and Biology Major',
    period: '2020 – 2023'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Technical Skills',
    skills: [
      { name: 'Programming', level: 80 },
      { name: 'Graphic Design', level: 75 },
      { name: 'Content Creation', level: 90 },
      { name: 'Video Editing', level: 85 },
      { name: 'Voice-Over & Dubbing', level: 95 },
      { name: 'Microsoft Office', level: 85 }
    ]
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Public Relations', level: 90 },
      { name: 'Leadership', level: 85 },
      { name: 'Communication', level: 95 },
      { name: 'Teamwork', level: 90 },
      { name: 'Problem-Solving', level: 85 }
    ]
  },
  {
    name: 'Languages',
    skills: [
      { name: 'English', level: 90 },
      { name: 'Indonesian', level: 100 },
      { name: 'Korean', level: 40 }
    ]
  }
];

export const certifications: CertificationItem[] = [
  { title: 'Getting Started Programming with Dart', date: 'May 2024' },
  { title: 'English Proficiency Test (EPRT)', date: 'Aug 2023' },
  { title: 'Introduction to Microsoft Excel', date: 'Feb 2025' },
  { title: 'Investment Risk Management', date: 'Feb 2025' },
  { title: 'Business Analysis & Process Management', date: 'Feb 2025' },
  { title: 'Website Development with WordPress', date: 'Feb 2025' },
  { title: 'Korean Language Beginner', issuer: 'KT&G SangSang Univ. Indonesia', date: 'Apr 2025' },
  { title: 'Career Preparation with HRD', issuer: 'KT&G SangSang Univ. Indonesia', date: 'Apr 2025' },
  { title: 'Staff Muda Divisi Kemahasiswaan', issuer: 'Himpunan Mahasiswa S1 Informatika Telkom University', date: 'Apr 2025' },
  { title: 'Qwords Digital Sprint: Digital Marketing', issuer: 'Qwords Academy', date: 'Jun 2025' }
];

export const achievements: AchievementItem[] = [
  { title: 'Kaderisasi FORTRAN 2024', date: 'Nov 2024' },
  { title: 'Lead Informatics 2024 Awarding', date: 'Dec 2024' },
  { title: 'Mahasiswa \'23 Of The Year', date: 'Dec 2024' },
  { title: 'Hello World 2024 Participant', date: 'Feb 2025' },
  { title: 'Staff Muda Divisi Kemahasiswaan', date: 'Feb 2025' }
];