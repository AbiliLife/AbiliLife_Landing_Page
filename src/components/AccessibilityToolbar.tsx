import { useState, useEffect } from 'react';
import { Contrast, Volume2, Accessibility } from 'lucide-react';

const AccessibilityToolbar = () => {
    const [fontSize, setFontSize] = useState(16);
    const [highContrast, setHighContrast] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Apply font size changes
        document.documentElement.style.fontSize = `${fontSize}px`;

        // Apply high contrast mode
        if (highContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
    }, [fontSize, highContrast]);

    const increaseFontSize = () => {
        if (fontSize < 24) setFontSize(fontSize + 2);
    };

    const decreaseFontSize = () => {
        if (fontSize > 12) setFontSize(fontSize - 2);
    };

    const toggleHighContrast = () => {
        setHighContrast(!highContrast);
    };

    const readPageContent = () => {
        if ('speechSynthesis' in window) {
            const text = document.body.innerText;
            window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
        }
    };

    return (
        <>
            <style>
                {`
          .accessibility-toolbar button:focus {
            outline: 3px solid #46216E;
            outline-offset: 2px;
          }
        `}
            </style>

            <div className="fixed top-6 right-6 z-50">
                <button
                    onClick={() => setIsVisible(!isVisible)}
                    className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
                    aria-label="Toggle accessibility toolbar"
                >
                    <Accessibility className="h-5 w-5" />
                </button>

                {isVisible && (
                    <div className="accessibility-toolbar mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 min-w-[250px]">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Accessibility Options</h3>

                        {/* Font Size Controls */}
                        <div className="mb-4">
                            <label className="text-xs text-gray-600 block mb-1">Font Size</label>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={decreaseFontSize}
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm transition-colors"
                                    aria-label="Decrease font size"
                                >
                                    A-
                                </button>
                                <span className="text-sm text-gray-600 min-w-[3rem] text-center">{fontSize}px</span>
                                <button
                                    onClick={increaseFontSize}
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm transition-colors"
                                    aria-label="Increase font size"
                                >
                                    A+
                                </button>
                            </div>
                        </div>

                        {/* High Contrast Toggle */}
                        <div className="mb-4">
                            <button
                                onClick={toggleHighContrast}
                                className={`w-full flex items-center gap-2 p-2 rounded text-sm transition-colors ${highContrast
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                    }`}
                                aria-pressed={highContrast}
                            >
                                <Contrast className="h-4 w-4" />
                                High Contrast
                            </button>
                        </div>

                        {/* Screen Reader */}
                        <div>
                            <button
                                onClick={readPageContent}
                                className="w-full flex items-center gap-2 p-2 rounded text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                                aria-label="Read page content aloud"
                            >
                                <Volume2 className="h-4 w-4" />
                                Read Aloud
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default AccessibilityToolbar;