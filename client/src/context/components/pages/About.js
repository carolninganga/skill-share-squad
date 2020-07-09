import React from 'react'
import Member from '../layout/Member/Member';
import Footer from '../layout/Footer/Footer';

const About = () => {
    return (
        <div>
          <h1 className="text-center mt-3">About Skill Share Squad</h1>
          <p className="my-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <h1 className="text-center mt-4">Our Team</h1>
          <h4 className="text-center">Meet Our Awesome Team Members</h4>
          <div className="row">
          <div className="col-md-6">
          <Member />
          </div>
          <div className="col-md-6">
          <Member />
          </div>
          </div>

          <h1 className="text-center mt-3">Contact Us</h1>
          <Footer />
        </div>
    )
}

export default About;