import AccessibilityToolbar from '@/components/AccessibilityToolbar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ProblemSolution from '@/components/ProblemSolution';
import VisionTeaser from '@/components/VisionTeaser';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import EcosystemRoadmap from '@/components/EcosystemRoadmap';

const Index = () => {
    return (
        <div className="min-h-screen bg-white relative">
            <AccessibilityToolbar />
            <Header />
            {/* Background decorative elements */}
            <div className="absolute inset-0 w-full h-full opacity-5 overflow-hidden pointer-events-none z-0" style={{ minHeight: '100%' }}>
                {/* Circles */}
                <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-primary rounded-full"></div>
                <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-primary rounded-full"></div>
                <div className="absolute top-10 right-1/3 w-28 h-28 border border-primary rounded-full"></div>
                <div className="absolute bottom-10 left-1/4 w-18 h-18 border-2 border-primary rounded-full"></div>
                <div className="absolute top-2/3 right-10 w-14 h-14 border border-primary rounded-full"></div>
                <div className="absolute top-1/4 left-1/2 w-10 h-10 border border-primary rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/2 w-22 h-22 border-2 border-primary rounded-full"></div>
                <div className="absolute top-40 right-20 w-8 h-8 border border-primary rounded-full"></div>
                <div className="absolute bottom-40 left-20 w-26 h-26 border border-primary rounded-full"></div>
                <div className="absolute top-[15%] left-[60%] w-36 h-36 border border-primary rounded-full"></div>
                <div className="absolute top-[85%] left-[70%] w-20 h-20 border-2 border-primary rounded-full"></div>
                <div className="absolute top-[45%] right-[15%] w-18 h-18 border border-primary rounded-full"></div>
                <div className="absolute top-[70%] left-[45%] w-14 h-14 border-2 border-primary rounded-full"></div>
                <div className="absolute top-[25%] right-[40%] w-24 h-24 border border-primary rounded-full"></div>

                {/* Squares and Rectangles */}
                <div className="absolute top-[10%] right-[25%] w-16 h-16 border-2 border-primary rotate-45"></div>
                <div className="absolute bottom-[30%] left-[15%] w-20 h-20 border border-primary rotate-12"></div>
                <div className="absolute top-[60%] right-[35%] w-12 h-24 border-2 border-primary rotate-[30deg]"></div>
                <div className="absolute top-[35%] left-[10%] w-28 h-16 border border-primary rotate-[-15deg]"></div>
                <div className="absolute bottom-[15%] right-[50%] w-14 h-14 border-2 border-primary rotate-[60deg]"></div>
                <div className="absolute top-[80%] left-[80%] w-18 h-18 border border-primary rotate-[25deg]"></div>
                <div className="absolute top-[50%] right-[5%] w-22 h-10 border border-primary rotate-[-20deg]"></div>

                {/* Triangles (using borders) */}
                <div className="absolute top-[20%] left-[75%] w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-primary"></div>
                <div className="absolute bottom-[50%] right-[20%] w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-primary rotate-180"></div>
                <div className="absolute top-[75%] left-[25%] w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-primary rotate-90"></div>
                <div className="absolute top-[5%] left-[40%] w-0 h-0 border-l-[18px] border-r-[18px] border-b-[30px] border-l-transparent border-r-transparent border-b-primary rotate-[-45deg]"></div>
            </div>
            <main>
                <Hero />
                <ProblemSolution />
                <HowItWorks />
                <VisionTeaser />
                <EcosystemRoadmap />
                <Team />
            </main>
            <Footer />
        </div>
    );
};

export default Index;