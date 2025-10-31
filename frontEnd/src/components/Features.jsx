import React from "react";
import { BookOpen, Users, Building2 } from "lucide-react";
import featuresImage from "../assets/features.png";

const Features = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                
                <div>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-bold mb-4">
                        Features
                    </button>

                    <h2 className="text-4xl font-bold text-blue-900 leading-snug mb-6">
                        We Are Expert & Do <span className="text-orange-500">Our Best For Your Goal</span>
                    </h2>

                    <p className="text-gray-700 mb-8 leading-relaxed">
                        At Carewell Matriculation School, we are committed to nurturing young minds through
                        quality education, strong moral values, and all-round development. Our institution
                        stands out for its balanced approach to academics, character-building, and co-curricular
                        excellence.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-orange-500 text-white p-4 rounded-full">
                                <BookOpen size={36} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-blue-900">
                                    Academic Excellence
                                </h3>
                                <p className="text-gray-700">
                                    Follows Tamil Nadu Matriculation Syllabus with structured curriculum,
                                    emphasizing conceptual clarity, application-based learning, and strong
                                    foundational skills.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-orange-500 text-white p-4 rounded-full">
                                <Users size={36} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-blue-900">
                                    Qualified & Dedicated Faculty
                                </h3>
                                <p className="text-gray-700">
                                    Experienced teachers with ongoing training, providing mentorship, guidance,
                                    and personalized attention to support each student’s growth and learning.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-orange-500 text-white p-4 rounded-full">
                                <Building2 size={36} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-blue-900">
                                    Well-Equipped Infrastructure
                                </h3>
                                <p className="text-gray-700">
                                    Smart classrooms, well-equipped labs, library, playground, and auditorium support
                                    holistic learning through academics, sports, and cultural activities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="flex flex-col items-center text-center md:text-left md:items-start">
                    
                    <h5 className="mb-6 max-w-2xl text-gray-700">
                        At Carewell Matriculation School, we are committed to nurturing young minds
                        through quality education, strong moral values, and all-round development.
                        Our institution stands out for its balanced approach to academics,
                        character-building, and co-curricular excellence.
                    </h5>

                    
                    <img
                        src={featuresImage}
                        alt="School Building"
                        className="rounded-3xl shadow-lg w-full max-w-md object-cover"
                    />
                </div>

            </div>
        </section>
    );
};

export default Features;
