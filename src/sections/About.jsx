import React, {useEffect, useRef, useState} from 'react'
import Globe from "react-globe.gl";
import ButtonResume from "../components/ButtonResume.jsx";
import ButtonScrollContact from "../components/ButtonScrollContact.jsx";

const About = () => {

    const globeRef = useRef();
    const [hasCopied, setHasCopied] = useState(false);

    useEffect(() => {
        const globe = globeRef.current;
        if (!globe) return;

        const rotateGlobe = () => {
            globe.pointOfView(
                { lat: globe.pointOfView().lat, lng: globe.pointOfView().lng + 2.5 },
                50 // Adjust duration for smooth rotation
            );
            requestAnimationFrame(rotateGlobe);
        };

        rotateGlobe();
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText("vyomgoyal2004@gmail.com");
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">
                                Hi, I am Vyom
                            </p>
                            <p className="grid-subtext">
                                • 3rd-year Information Technology student at BMS College of Engineering, Bangalore.
                            </p>
                            <p className="grid-subtext">
                                • Skilled in backend development using Java Spring Boot and frontend development with React.
                            </p>
                            <p className="grid-subtext">
                                • Consistently achieved a 9.2 CGPA in academics.
                            </p>
                            <p className="grid-subtext">
                                • Dedicated to building impactful projects and contributing as a versatile team player.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/Grid2New.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">
                                Achievements
                            </p>
                            <p className="grid-subtext">
                                • ACM ICPC 2024 Asia West Regionalist.
                            </p>
                            <p className="grid-subtext">
                                • Rank 37 at ICPC Chennai Onsite Regional & 170 at Amritapuri Multisite Regionals.
                            </p>
                            <p className="grid-subtext">
                                • Rank 170 out of 3000+ teams at ICPC online preliminary round.
                            </p>
                            <p className="grid-subtext">
                                • <a href="https://www.codechef.com/users/vyom26"
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="link-style">
                                4 star Codechef (max 1679 rating)
                            </a>

                            </p>
                            <p className="grid-subtext">
                                • <a href="https://leetcode.com/u/VYOM_GOYAL/"
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="link-style">
                                Knight Leetcode (max 2073 rating)
                            </a>

                            </p>
                            <p className="grid-subtext">
                                • <a href="https://codeforces.com/profile/vyomgoyal098"
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="link-style">
                                Specialist CoderForces (max 1433 rating)
                            </a>

                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                ref={globeRef}
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere={true}
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 12, lng: 77, text: 'Bangalore, India', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">
                                Open to Exciting Tech Opportunities Worldwide!
                            </p>
                            <p className="grid-subtext">
                                • I am actively seeking tech opportunities across any time zone, with a preference for remote work.
                            </p>
                            <p className="grid-subtext">
                                • As a Bangalore-based developer with a passion for backend development, frontend expertise, and competitive programming, I’m eager to contribute my skills to impactful projects.
                            </p>
                            <p className="grid-subtext">
                                • If you’re looking for a versatile and driven professional to join your team, let’s connect!
                            </p>
                            <ButtonScrollContact
                                name="Contact Me"
                                isBeam
                                containerClas="w-full mt-10"
                            />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">
                                My passion for coding
                            </p>
                            <p className="grid-subtext">
                                • Enthusiastic problem-solver with a love for tackling challenging coding problems.
                            </p>
                            <p className="grid-subtext">
                                • Passionate about building impactful projects that address real-world problems.
                            </p>
                            <p className="grid-subtext">
                                • Dedicatedly built a LinkedIn following of over 12k in less than 6 months, sharing knowledge and experiences with the tech community.
                            </p>
                            <p className="grid-subtext">
                                • Actively seeking opportunities in Big Tech, startups, and finance to expand my skill set and grow professionally.
                            </p>
                            <p className="grid-subtext">
                                • Check out my resume and feel free to reach out if you have an opportunity that aligns with my skills and interests!
                            </p>
                            <ButtonResume
                                name="Resume"
                                isBeam
                                containerClas="w-full mt-10"
                                onClick={() =>
                                    window.open(
                                        "https://drive.google.com/file/d/1dvYxrpJo20zjsApyQq3Te7G6L0beOCUu/view?usp=sharing",
                                        "_blank"
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">
                                Contact Me
                            </p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/icons8-checkmark.svg' : '/assets/copy.svg'} alt="copy"/>
                                <p className="xl:text-xl md:text-md font-medium text-gray_gradient text-white">
                                    vyomgoyal2004@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About