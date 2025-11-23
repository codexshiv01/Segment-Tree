import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
    {
        name: "Aarav Patel",
        role: "SDE II at Google",
        content: "Segment Tree was the game changer for my LLD preparation. The AI feedback is incredibly accurate and helped me identify edge cases I would have missed.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces"
    },
    {
        name: "Priya Sharma",
        role: "Frontend at Meta",
        content: "The machine coding challenges are exactly what I faced in my onsite interviews. The platform's environment is identical to the real thing. Highly recommended!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
    },
    {
        name: "Rohan Gupta",
        role: "SDE I at Amazon",
        content: "I struggled with System Design until I found this course. The visualizations make complex distributed system concepts so easy to understand.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
    },
    {
        name: "Sneha Reddy",
        role: "Software Engineer at Netflix",
        content: "The mock interviews are brutal but necessary. They prepared me for the pressure of the actual interview better than any other platform.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces"
    },
    {
        name: "Vikram Singh",
        role: "Backend Lead at Uber",
        content: "Finally, a platform that goes deep into database internals. The DB Design module is world-class.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        let timer;
        if (isAutoPlaying) {
            timer = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % reviews.length);
            }, 5000);
        }
        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
        setIsAutoPlaying(false);
    };

    return (
        <div className="py-24 bg-[#0B1120] relative overflow-hidden text-white">
            {/* Vibrant Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Thousands</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Join the community of engineers who have transformed their careers with Segment Tree.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Main Card */}
                    <div
                        className="glass-card bg-white/5 border-white/10 p-8 md:p-16 rounded-[2.5rem] relative min-h-[350px] flex flex-col justify-center transition-all duration-500 backdrop-blur-xl shadow-2xl"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <Quote className="text-primary/40 absolute top-10 left-10" size={80} />

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            {/* User Image */}
                            <div className="flex-shrink-0">
                                <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-primary to-secondary">
                                    <img
                                        src={reviews[currentIndex].image}
                                        alt={reviews[currentIndex].name}
                                        className="w-full h-full rounded-full object-cover border-4 border-[#0B1120]"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center md:text-left flex-1">
                                <div className="flex justify-center md:justify-start gap-1 text-yellow-400 mb-6">
                                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} size={24} fill="currentColor" />
                                    ))}
                                </div>

                                <p className="text-xl md:text-2xl text-slate-200 mb-6 leading-relaxed font-medium italic">
                                    "{reviews[currentIndex].content}"
                                </p>

                                <div>
                                    <h4 className="font-bold text-white text-xl">{reviews[currentIndex].name}</h4>
                                    <p className="text-primary font-medium">{reviews[currentIndex].role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white transition-all backdrop-blur-md"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white transition-all backdrop-blur-md"
                    >
                        <ChevronRight size={28} />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-10">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setIsAutoPlaying(false);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-8' : 'bg-slate-700 w-2 hover:bg-slate-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
