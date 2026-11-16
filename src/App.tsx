import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ImpactSection } from './components/ImpactSection';
import { DestinationsSection } from './components/DestinationsSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { TipsSection } from './components/TipsSection';
import { QuizSection } from './components/QuizSection';
import { CommitmentSection } from './components/CommitmentSection';
import { ReferencesFooter } from './components/ReferencesFooter';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F8F6EF] text-[#153E35]">
        <Navbar />
        <main>
          <HeroSection />
          <ImpactSection />
          <DestinationsSection />
          <ExperiencesSection />
          <TipsSection />
          <QuizSection />
          <CommitmentSection />
        </main>
        <ReferencesFooter />
      </div>
    </MotionConfig>
  );
}
