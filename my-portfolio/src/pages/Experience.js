import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function ExperiencePage() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#000000">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2023"
          iconStyle={{ background: "#c3c1ab", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          University of North Texas, Denton, Texas
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
             Bachelor of Science Degree
          </h4>
          <p>Computer Science</p>
<p>
•	Learned time complexity of various algorithms; merge and heap sort; trees and graphs, etc. Worked on multiple sprints for design and implementation of software systems utilizing current design tools such as UML, system and user documentation. 
</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2023"
          iconStyle={{ background: "#c3c1ab", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          University of North Texas, Denton, Texas
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Associate of Arts Degree
          </h4>

          <p> International Studies</p>
<p>
•	Learned and practiced writing technical documents used in business and industry. Drafted and edited documents such as user manuals, software installation guides, legal disclaimers, thesis statements, etc.
</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2022-August 2022"
          iconStyle={{ background: "#b7796f", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Vehicular Edge Computing & Security Research Intern — National Science Foundation
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Denton, TX
          </h4>
          <p>•	Tested various real time object detection algorithms for multiple edge computing devices.</p>
          <p>•	Identified methods of improvement for existing techniques.</p>
<p>•	Utilized MMdetection framework and Python Anaconda Environment.</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2019 - December 2021"
          iconStyle={{ background: "#b7796f", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Adjunct Professor Assistant — Tarrant County Community College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Fort Worth, TX
          </h4>
          <p>
          Managed class material for 3 university level business and accounting courses.
          </p>
          <p>•	Set foundation for online learning platforms.</p>
          <p>•	Kept organized record of student submissions.  </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default ExperiencePage;