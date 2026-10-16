import { useEffect, useRef, useState } from 'react';
import AIAssistant from './components/AIAssistant';
import AuthScreen from './components/AuthScreen';
import CampusDecoded from './components/CampusDecoded';
import Closing from './components/Closing';
import Events from './components/Events';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import People from './components/People';
import InfoChaosScene from './components/story/InfoChaosScene';
import PexoRevealScene from './components/story/PexoRevealScene';
import TeamProblemScene from './components/story/TeamProblemScene';

export default function App() {
  const [toast, setToast] = useState('');
  const [showAuth, setShowAuth] = useState(false);
  const timer = useRef(null);

  const openAuth = () => {
    setShowAuth(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showJoinNote = () => {
    setToast('This is a PEXO concept demo — real account creation is not connected yet.');
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(''), 5000);
  };

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current);
  }, []);

  if (showAuth) {
    return <AuthScreen onBack={() => setShowAuth(false)} onDemo={showJoinNote} />;
  }

  return (
    <>
      <Navigation onJoin={openAuth} />
      <main>
        <Hero onJoin={openAuth} />
        <InfoChaosScene />
        <TeamProblemScene />
        <PexoRevealScene />
        <div id="scene-5" data-story-chapter="5" aria-label="Scene five: campus discovery wall">
          <CampusDecoded />
          <Events />
        </div>
        <People />
        <AIAssistant />
        <Closing onJoin={openAuth} />
      </main>
      <div className={`toast${toast ? ' toast-visible' : ''}`} role="status" aria-live="polite" aria-atomic="true">
        {toast}
        <button type="button" aria-label="Dismiss notification" onClick={() => setToast('')}>×</button>
      </div>
    </>
  );
}
