import AccessibilityToolbar from '@/components/AccessibilityToolbar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ProblemSolution from '@/components/ProblemSolution';
import VisionTeaser from '@/components/VisionTeaser';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

const Index = () => {
    return (
        <div className="min-h-screen bg-white">
            <AccessibilityToolbar />
            <Header />
            <main>
                <Hero />
                <HowItWorks />
                <ProblemSolution />
                <VisionTeaser />
                <Team />
            </main>
            <Footer />
        </div>
    );
};

export default Index;