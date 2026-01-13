import React from 'react';
import { teamMembers } from '../data';

const About = () => {
    return (
        <div className="container py-5">
            <div className="text-center mb-5" style={{ paddingTop: '100px' }}>
                <h1 className="fw-bold mb-3 display-6"><span className="text-gradient" >About Us</span></h1>
                <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
                    We are dedicated to preserving knowledge and fostering a community of lifelong learners. Meet the team behind the library.
                </p>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {teamMembers.map((member) => (
                    <div className="col" key={member.id}>
                        <div className="book-card h-100 p-4 text-center">
                            <img
                                src={member.image}
                                className="rounded-circle mx-auto mb-3 shadow"
                                alt={member.name}
                                style={{ width: '120px', height: '120px', objectFit: 'cover', border: '3px solid var(--primary-color)' }}
                            />
                            <div className="card-body p-0">
                                <h5 className="card-title fw-bold mb-1">{member.name}</h5>
                                <p className="text-secondary mb-0 small">{member.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-5 glass-panel p-5 rounded-4">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-3">Our <span className="text-gradient">Mission</span></h2>
                        <p className="mb-4 text-secondary">
                            To provide universal access to the world's knowledge and to create a welcoming space for everyone to explore, discover, and create.
                        </p>
                        <p className="text-light opacity-75">
                            We believe that libraries are the heart of a community. They are places where people can come together to learn, share ideas, and grow. Whether you are looking for a quiet place to study, a new book to read, or a community event to attend, we have something for everyone. Come visit us and see what we have to offer!
                        </p>
                    </div>
                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <img
                            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800&h=500"
                            alt="Library Interior"
                            className="img-fluid rounded-3 shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
