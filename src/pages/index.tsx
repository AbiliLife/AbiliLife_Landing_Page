import AccessibilityToolbar from '@/components/AccessibilityToolbar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

const Index = () => {
    return (
        <div className="min-h-screen bg-white">
            <AccessibilityToolbar />
            <Header />
            <main>
                <Hero />
                <Ecosystem />
                <ProblemSolution />
                <HowItWorks />
                <Team />
            </main>
            <Footer />
        </div>
    );
};

export default Index;