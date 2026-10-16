import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BookOpenText, FileText } from 'lucide-react';
import { ThinkingOrb } from 'thinking-orbs';
import { chatSamples } from '../data/demoContent';
import { ArrowIcon, LogoMark, Reveal } from './Brand';

const sampleDocuments = [
  {
    title: 'The Loop Hackathon · Event flyer',
    category: 'EVENTS',
    updated: 'OCT 12',
    content: 'The Loop Hackathon runs October 24–25 in the Main Hall. It is open to students from all year groups, including third-year AI/ML students. Registration closes October 23 at 11:59 PM.',
    keywords: 'hackathon event third-year ai ml register registration main hall',
    sampleQuestion: 'When is the hackathon and who can join?',
  },
  {
    title: 'Course handbook · Attendance',
    category: 'ACADEMIC',
    updated: 'OCT 08',
    content: 'The sample course handbook allows up to three absences per course. For medical or other approved leave, contact the department office and check the course-specific syllabus for exceptions.',
    keywords: 'attendance absence class policy course handbook medical leave',
    sampleQuestion: 'What is the attendance policy?',
  },
  {
    title: 'Design Jam · Room update',
    category: 'NOTICE',
    updated: 'OCT 16',
    content: 'The Design Jam workshop is on October 18 at 2:00 PM in Room B-204. The venue changed from Room A-101. Bring a laptop if you have one; materials are provided.',
    keywords: 'design jam workshop room change venue location where',
    sampleQuestion: 'Where is the Design Jam now?',
  },
  {
    title: 'Career cell · Internship bulletin',
    category: 'OPPORTUNITY',
    updated: 'OCT 14',
    content: 'The campus product design internship accepts applications through October 29. Submit a portfolio and resume using the career-cell application form.',
    keywords: 'internship opportunity job apply application portfolio resume deadline',
    sampleQuestion: 'When is the internship application due?',
  },
  {
    title: 'Academic calendar · Midterms',
    category: 'ACADEMIC',
    updated: 'OCT 10',
    content: 'Midterm examinations are scheduled from October 28 through November 2. Check the department timetable for your room and subject-specific start time.',
    keywords: 'academic calendar midterm exam examination date timetable',
    sampleQuestion: 'When do midterm exams start?',
  },
];

const ignoredTerms = new Set(['about', 'after', 'and', 'are', 'can', 'does', 'for', 'from', 'how', 'into', 'is', 'it', 'the', 'this', 'what', 'when', 'where', 'who', 'with', 'you']);
const tokenize = (text) => text.toLowerCase().match(/[a-z0-9]+/g) ?? [];

function searchSampleDocuments(question) {
  const terms = [...new Set(tokenize(question).filter((term) => !ignoredTerms.has(term)))];
  const rankedMatches = sampleDocuments
    .map((document) => {
      const titleTerms = tokenize(document.title);
      const searchableTerms = new Set([...titleTerms, ...tokenize(document.content), ...tokenize(document.keywords)]);
      const score = terms.reduce((total, term) => total + (searchableTerms.has(term) ? (titleTerms.includes(term) ? 3 : 1) : 0), 0);
      return { document, score };
    })
    .filter(({ score }) => score > 0)
    .sort((first, second) => second.score - first.score);
  const bestScore = rankedMatches[0]?.score ?? 0;
  const matches = rankedMatches
    .filter(({ score }) => score >= Math.max(1, Math.ceil(bestScore * 0.45)))
    .slice(0, 2)
    .map(({ document }) => document);

  if (matches.length === 0) {
    return {
      text: 'I couldn’t find a close match in the sample campus documents. Try asking about the hackathon, attendance, the Design Jam room, an internship, or midterms.',
      sources: [],
    };
  }

  return {
    text: matches.map((document) => document.content).join(' '),
    sources: matches.map((document) => document.title),
  };
}

export default function AIAssistant() {
  const [question, setQuestion] = useState('');
  const [asked, setAsked] = useState('');
  const [answer, setAnswer] = useState(null);
  const [sourceNotice, setSourceNotice] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const reduceMotion = useReducedMotion();
  const searchTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(searchTimer.current), []);

  function ask(rawQuestion) {
    const cleanQuestion = rawQuestion.trim();
    if (!cleanQuestion || isSearching) return;

    setAsked(cleanQuestion);
    setQuestion('');
    setSourceNotice('');
    setIsSearching(true);
    window.clearTimeout(searchTimer.current);
    searchTimer.current = window.setTimeout(() => {
      setAnswer(searchSampleDocuments(cleanQuestion));
      setIsSearching(false);
    }, reduceMotion ? 150 : 1100);
  }

  function handleSubmit(event) {
    event.preventDefault();
    ask(question);
  }

  return (
    <section id="assistant" data-story-chapter="7" className="section-ai section-shell">
      <Reveal className="ai-heading">
        <h2>ASK YOUR CAMPUS.<br /><span>GET THE SOURCE.</span></h2>
        <p>Search five fictional campus documents and get answers with their sources.</p>
      </Reveal>

      <div className="ai-layout">
        <Reveal className="chat-window" delay={100}>
          <div className="chat-top">
            <div className="chat-brand">
              <span className="chat-logo"><LogoMark small /></span>
              <div><b>pexo ai</b><span><i /> CAMPUS GUIDE · DEMO</span></div>
            </div>
            <span className="chat-menu-dots">···</span>
          </div>

          <div className="chat-thread">
            {asked && <>
              <div className="chat-date-divider"><span /> SEARCH RESULTS <span /></div>
              <motion.div key={asked} className="chat-user-message" initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24 }}>
                {asked}
              </motion.div>
            </>}

            {isSearching ? (
              <div className="chat-thinking" role="status" aria-live="polite">
                <ThinkingOrb state="searching" size={64} theme="dark" />
                <div><b>PEXO is searching…</b><span>Looking through sample campus sources</span></div>
              </div>
            ) : (
              <motion.div key={`${asked}-answer`} className="chat-answer-wrap" initial={reduceMotion ? false : { opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                {answer && <>
                  <div className="chat-answer-avatar"><LogoMark small /></div>
                  <div className="chat-answer">
                    <span className="chat-answer-name">PEXO AI <i>· SAMPLE DOCUMENT ANSWER</i></span>
                    <p>{answer.text}</p>
                    {answer.sources.length > 0 && <div className="chat-sources">
                      <span>SOURCES · SAMPLE DOCS</span>
                      {answer.sources.map((source, index) => (
                        <motion.button key={source} type="button" initial={reduceMotion ? false : { opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: reduceMotion ? 0 : 0.12 + index * 0.08 }} onClick={() => setSourceNotice(sampleDocuments.find((document) => document.title === source)?.content ?? `No sample document found for ${source}.`)}>
                          <span>↗</span> {source}
                        </motion.button>
                      ))}
                    </div>}
                  </div>
                </>}
              </motion.div>
            )}
            {sourceNotice && <p className="source-notice" role="status" aria-live="polite">{sourceNotice}</p>}
          </div>

          <div className="chat-suggestions">
            <span>TRY ASKING</span>
            {chatSamples.map((sample) => (
              <button key={sample} type="button" disabled={isSearching} onClick={() => ask(sample)}>{sample} <ArrowIcon diagonal /></button>
            ))}
          </div>
          <form className="chat-input-row" onSubmit={handleSubmit}>
            <label className="visually-hidden" htmlFor="campus-question">Ask PEXO AI a campus question</label>
            <input id="campus-question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask your campus anything…" />
            <button type="submit" aria-label="Send campus question" disabled={!question.trim() || isSearching}><ArrowIcon /></button>
          </form>
          <p className="chat-demo-disclaimer">FICTIONAL DEMO · NOT A LIVE CAMPUS ASSISTANT</p>
        </Reveal>
      </div>
      <Reveal className="ai-doc-library" delay={160}>
        <div className="ai-doc-library-heading"><BookOpenText size={18} /><span>DEMO CAMPUS LIBRARY</span><b>{sampleDocuments.length} SAMPLE DOCS</b></div>
        <div className="ai-doc-grid">
          {sampleDocuments.map((document) => (
            <button key={document.title} type="button" className="ai-doc-card" disabled={isSearching} onClick={() => ask(document.sampleQuestion)}>
              <span className="ai-doc-type"><FileText size={13} /> {document.category}<i>{document.updated}</i></span>
              <strong>{document.title}</strong>
              <span className="ai-doc-preview">{document.content}</span>
              <span className="ai-doc-ask">ASK ABOUT THIS <ArrowIcon diagonal /></span>
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
