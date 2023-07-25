import React from "react";
import Faq from "react-faq-component";
import { IoMdArrowDropright } from "react-icons/io";

const data = {
  rows: [
    {
      title: <h4>What services do you offer?</h4> ,
      content: <div className="text-start p-2">
        At our software agency, we offer a wide range of services including
         custom software development, web application development, mobile app
          development, software consulting, and Blockchain development services.
           We work with our clients to understand their unique needs and create
            tailored solutions that meet their specific requirements.
            </div>
    }]
}

const data1 = {
    rows: [
    {
      title: <h4>How long does it take to complete a project?</h4>,
      content: <div className="text-start p-2">
        The timeline for each project varies based on the scope and complexity
         of the project. We work closely with our clients to set realistic
          timelines and provide regular updates throughout the development process
           to ensure that the project stays on track.
        </div>
    }]
}
const data2 = {
        rows: [
    {
      title: <h4>How do you ensure the security of the software you develop?</h4>,
      content: <div className="text-start p-2">
       We take security very seriously and take a number of measures to 
       ensure the security of the software we develop. This includes 
       conducting regular security audits, implementing industry-standard 
       security practices, and staying up-to-date on the latest security 
       threats and vulnerabilities.</div>
    }]
}
const data3 = {
        rows: [
    {
      title: <h4>What is your process for developing software?</h4>,
      content: <div className="text-start p-2">
        Our development process typically involves several phases,
         including project planning, design, development, testing,
          and deployment. We use Agile methodologies and work in sprints
           to ensure that the project stays on track and that our clients
            have visibility into the progress being made.
         </div>
      
        
    }]
}

const data4 = {
    rows: [
{
  title: <h4>How do you handle post-launch support and maintenance?</h4>,
  content: <div className="text-start p-2">
    We offer ongoing post-launch support and maintenance for the software we develop to ensure that it continues to function properly and that any issues or bugs are addressed in a timely manner. We also offer service level agreements (SLAs) for clients who require more extensive support and maintenance.</div>

  
  ,
},
],
}


const styles = {
  //  bgColor: "#fc7e13",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "white",
  arrowColor: "white",
};

const config = {
  //   animate: true,
  arrowIcon: <IoMdArrowDropright />,
  //   tabFocus: true
};

function Devfaq() {
  return (
    <div className="faq" id="fq">
      <div className="container-fluid text-start py-5 px-4">
        <div className="row py-5 text-center">
        <h1 >Frequently Asked Question </h1>
        <p >Everything you need to know about the Services and Qubitars.</p>
        </div>
        <div className="row pt-5">
          <div className="col-md-5">
            <img className="image-fluid" src="Assets/faq.png" alt="img" />
          </div>
          <div className="col-md-7 ">
          
            
            <div>
              <Faq config={config} data={data} styles={styles} />
              <Faq config={config} data={data1} styles={styles} />
              <Faq config={config} data={data2} styles={styles} />
              <Faq config={config} data={data3} styles={styles} />
              <Faq config={config} data={data4} styles={styles} />
            </div>
          </div>
         
        </div>
      </div>
      
    </div>
  );
}

export default Devfaq;