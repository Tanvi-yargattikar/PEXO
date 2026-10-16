export const profiles = [
    { id: 'mira', name: 'Mira Shah', branch: 'Computer Science', initials: 'MS', color: 'peach', year: '3rd year', track: 'AI/ML', skills: ['Python', 'PyTorch', 'NLP'], project: 'SignSense', projectNote: 'A tiny language model learning sign language from everyday campus clips.', portfolio: 'SignSense · demo portfolio preview', interests: ['Inclusive tech', 'Music theory', 'Midnight chai'], hackathons: '2 hackathons · loves a scrappy prototype' },
    { id: 'arjun', name: 'Arjun Mehta', branch: 'Information Technology', initials: 'AM', color: 'mint', year: '2nd year', track: 'Web Development', skills: ['React', 'TypeScript', 'Supabase'], project: 'Roomie Radar', projectNote: 'A lost-and-found board that actually finds your lost airpods.', portfolio: 'Roomie Radar · demo portfolio preview', interests: ['Open source', 'Badminton', 'Poster design'], hackathons: '1 hackathon · looking for build weekends' },
    { id: 'zoe', name: 'Zoe Fernandes', branch: 'Product Design', initials: 'ZF', color: 'lilac', year: '4th year', track: 'Design', skills: ['Figma', 'Prototyping', 'Motion'], project: 'Soft Start', projectNote: 'A gentle, student-built onboarding guide for campus newcomers.', portfolio: 'Soft Start · demo portfolio preview', interests: ['Accessibility', 'Printmaking', 'Thrift finds'], hackathons: '3 hackathons · design partner & professional hype-person' },
    { id: 'ishan', name: 'Ishan Rao', branch: 'Electronics & Robotics', initials: 'IR', color: 'yellow', year: '3rd year', track: 'Robotics', skills: ['Arduino', 'ROS', 'CAD'], project: 'Tiny Cart', projectNote: 'A tabletop delivery rover for bringing snacks to long studio nights.', portfolio: 'Tiny Cart · demo portfolio preview', interests: ['Hardware', 'Sketching', 'Maker spaces'], hackathons: '2 hardware jams · brings his own toolkit' },
    { id: 'anaya', name: 'Anaya Bose', branch: 'Applied Mathematics', initials: 'AB', color: 'blue', year: '2nd year', track: 'Data Science', skills: ['SQL', 'Python', 'Storytelling'], project: 'Bus, Actually', projectNote: 'A friendly chart that tracks campus shuttle chaos in real time.', portfolio: 'Bus, Actually · demo portfolio preview', interests: ['Civic data', 'Film club', 'Puzzle hunts'], hackathons: 'First hackathon soon · looking for a kind team' },
];
export const categories = [
    { id: 'events', number: '01', name: 'Events &\nhackathons', detail: 'Catch the room before it fills up.', color: 'blue', symbol: '✳' },
    { id: 'posters', number: '02', name: 'Posters &\nannouncements', detail: 'The noticeboard, minus the missing pins.', color: 'coral', symbol: '↗' },
    { id: 'docs', number: '03', name: 'PDFs &\nacademic docs', detail: 'That one syllabus? Found in a sec.', color: 'yellow', symbol: '⌁' },
    { id: 'opportunities', number: '04', name: 'Internships &\nopportunities', detail: 'Good things rarely wait for word-of-mouth.', color: 'lilac', symbol: '★' },
    { id: 'projects', number: '05', name: 'Student projects\n& communities', detail: 'Find the ideas, then find the people.', color: 'mint', symbol: '✳' },
];
export const events = [
    { id: 'loop', type: 'HACKATHON', date: 'OCT 24–25 · DEMO', title: 'THE LOOP\nHACKATHON', details: 'Build something for your campus in a 24-hour sprint. This fictional demo listing includes an illustrative eligibility note for third-year AI students.', color: 'poster-blue', tag: 'BUILD TOGETHER', mark: '24H', filter: 'Hackathon' },
    { id: 'type', type: 'WORKSHOP', date: 'OCT 18 · DEMO', title: 'TYPE THAT\nTALKS BACK', details: 'An imaginary kinetic-type lab for anyone curious about motion, lettering, and making interfaces feel alive.', color: 'poster-yellow', tag: 'DESIGN CLUB', mark: 'Aa!', filter: 'Workshop' },
    { id: 'makers', type: 'CAMPUS EVENT', date: 'OCT 20 · DEMO', title: 'MAKERS AFTER\nMIDNIGHT', details: 'An invented late-night meetup for makers, tinkerers, and anyone who brought a half-finished prototype.', color: 'poster-coral', tag: 'OPEN TABLE', mark: '✳', filter: 'Club' },
    { id: 'summer', type: 'INTERNSHIP', date: 'APPLY BY OCT 29 · DEMO', title: 'YOUR FIRST\nBIG INTERNSHIP', details: 'A fictional opportunity-card example. In a live campus workspace, PEXO could surface a verified link and deadline here.', color: 'poster-lilac', tag: 'OPPORTUNITY WALL', mark: 'GO!', filter: 'Opportunity' },
    { id: 'syllabus', type: 'ACADEMIC DEADLINE', date: 'OCT 23 · DEMO', title: 'SYLLABUS\nCHECK-IN', details: 'An illustrative deadline reminder from a fictional course calendar. Always confirm dates with official college sources.', color: 'poster-yellow', tag: 'COURSE CALENDAR', mark: 'DUE', filter: 'Deadline' },
];
export const chatSamples = [
    'When is the hackathon and who can join?',
    'What is the attendance policy?',
    'Where is the Design Jam now?',
    'When do midterm exams start?',
];
