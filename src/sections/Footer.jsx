import React from 'react'

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-4 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 mt-50">
            <div className="text-white-500 flex gap-2">
                <p>
                   Terms & Conditions
                </p>
                <p>
                    |
                </p>
                <p>
                    Privacy Policy
                </p>
            </div>
            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/vyom-goyal-09ab5b246/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/icons8-linkedin.svg" alt="linkedin" className="w-1/2 h-1/2 ml-3" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://github.com/Vyom-26" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 ml-3" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.instagram.com/vyom__goyal/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2 ml-3" />
                    </a>
                </div>
            </div>

            <p className="text-white-500">
                © 2025 Vyom. All rights reserved.
            </p>
        </section>
    )
}
export default Footer
