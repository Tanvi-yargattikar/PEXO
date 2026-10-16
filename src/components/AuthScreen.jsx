import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import StudentCharacter from './story/StudentCharacter';
import { Wordmark } from './Brand';

export default function AuthScreen({ onBack, onDemo }) {
  const [mode, setMode] = useState('signup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const submit = (event) => {
    event.preventDefault();
    if (!email.trim() || !password.trim() || (mode === 'signup' && !name.trim())) {
      setMessage('Fill in the fields to preview the PEXO account flow.');
      return;
    }
    setMessage('This is a frontend demo — account creation and sign-in are not connected yet.');
    if (onDemo) onDemo();
  };

  return (
    <main className="auth-screen">
      <header className="auth-header">
        <Wordmark />
        <button type="button" className="auth-back" onClick={onBack}><ArrowLeft size={16} /> Back to PEXO</button>
      </header>
      <div className="auth-layout">
        <section className="auth-story">
          <span className="auth-kicker"><span className="live-dot" /> YOUR CAMPUS, YOUR PEOPLE</span>
          <h1>{mode === 'signup' ? <>GOOD THINGS<br />HAPPEN WITH<br /><em>YOUR PEOPLE.</em></> : <>HEY, YOU’RE<br />BACK IN THE<br /><em>LOOP.</em></>}</h1>
          <p>{mode === 'signup' ? 'Find the events, ideas, and teammates that make college feel a little more like your place.' : 'Your campus plans, projects, and people are waiting for you.'}</p>
          <div className="auth-mascot-wrap">
            <div className="auth-sticker auth-sticker-yellow">MAKE<br />SOMETHING<br />COOL ✳</div>
            <div className="auth-mascot"><StudentCharacter mood="confident" className="h-full w-full" label="Friendly PEXO student mascot" /></div>
            <div className="auth-sticker auth-sticker-purple">YOUR<br />CREW ↗</div>
            <div className="auth-orbit auth-orbit-one" /><div className="auth-orbit auth-orbit-two" />
          </div>
        </section>
        <section className="auth-card">
          <div className="auth-card-top"><span className="auth-card-symbol">✳</span><span className="auth-demo-tag">EARLY ACCESS · DEMO</span></div>
          <h2>{mode === 'signup' ? 'Get into PEXO.' : 'Welcome back.'}</h2>
          <p className="auth-subtitle">{mode === 'signup' ? 'Your next big thing starts here.' : 'Pick up where your campus story left off.'}</p>
          <div className="auth-tabs" role="tablist" aria-label="Account type">
            <button type="button" role="tab" aria-selected={mode === 'signup'} className={mode === 'signup' ? 'active' : ''} onClick={() => { setMode('signup'); setMessage(''); }}>Create account</button>
            <button type="button" role="tab" aria-selected={mode === 'login'} className={mode === 'login' ? 'active' : ''} onClick={() => { setMode('login'); setMessage(''); }}>Log in</button>
          </div>
          <form className="auth-form" onSubmit={submit}>
            {mode === 'signup' && <label>Your name<input value={name} onChange={event => setName(event.target.value)} placeholder="What should we call you?" autoComplete="name" /></label>}
            <label>College email<div className="auth-input-icon"><Mail size={16} /><input type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="you@college.edu" autoComplete="email" /></div></label>
            <label>Password<input type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="At least 8 characters" autoComplete={mode === 'signup' ? 'new-password' : 'current-password'} /></label>
            <button className="button button-blue auth-submit" type="submit">{mode === 'signup' ? 'CREATE MY ACCOUNT' : 'LOG IN TO PEXO'} <ArrowUpRight size={17} /></button>
            {message && <p className="auth-message" role="status">{message}</p>}
          </form>
          <div className="auth-divider"><span /> OR CONNECT YOUR WORK <span /></div>
          <div className="auth-social-buttons"><button type="button" onClick={() => setMessage('GitHub linking will be available when authentication is configured.')}><Github size={16} /> GitHub</button><button type="button" onClick={() => setMessage('LinkedIn linking will be available when authentication is configured.')}><Linkedin size={16} /> LinkedIn</button></div>
          <p className="auth-terms">Demo interface only. No account details are sent or stored.</p>
        </section>
      </div>
    </main>
  );
}
