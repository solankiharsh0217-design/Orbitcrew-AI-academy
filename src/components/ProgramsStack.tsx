import { useState } from "react";
import { programs } from "../data/programs";

export default function ProgramsStack() {
  const [openId, setOpenId] = useState(programs[0].id);

  return (
    <div className="programs-stack">
      {programs.map((p) => (
        <div key={p.id} className={`program-card ${openId === p.id ? "open" : ""}`}>
          <div className="program-card-header" onClick={() => setOpenId(openId === p.id ? null : p.id)}>
            <h3>{p.title}</h3>
            <div className="meta">
              <span className="duration">{p.duration}</span>
              <span className="toggle-icon">{openId === p.id ? "⌃" : "⌄"}</span>
            </div>
          </div>
          <div className="program-card-body">
            <div className="program-card-body-inner">
              {p.id === "custom-path" ? (
                <div className="program-details">
                  <div>
                    <h4>What It Means</h4>
                    <p style={{ fontSize: 14, color: "var(--gray-500)", lineHeight: 1.7 }}>Students can combine multiple skills and create personalized learning paths based on their career goals. Our mentors help design a custom curriculum.</p>
                    <h4 style={{ marginTop: 20 }}>Example Combinations</h4>
                    <ul>
                      {p.combinations?.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4>Who It Is For</h4>
                    <p style={{ fontSize: 14, color: "var(--gray-500)", lineHeight: 1.7 }}>Students who want a unique skill combination rather than a single track. Perfect for those who want to stand out in the job market with a diverse skill set.</p>
                    <h4 style={{ marginTop: 20 }}>Outcome</h4>
                    <ul>
                      <li>Custom portfolio aligned with goals</li>
                      <li>Versatile career options</li>
                      <li>Unique market positioning</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="program-details">
                  <div>
                    <h4>What You Learn</h4>
                    <ul>{p.topics.map((t, i) => <li key={i}>{t}</li>)}</ul>
                    <h4 style={{ marginTop: 20 }}>Tools You Master</h4>
                    <ul>{p.tools.map((t, i) => <li key={i}>{t}</li>)}</ul>
                  </div>
                  <div>
                    <h4>Projects You Build</h4>
                    <ul>{p.projects.map((pr, i) => <li key={i}>{pr}</li>)}</ul>
                    <h4 style={{ marginTop: 20 }}>Career Pathways</h4>
                    <ul>{p.careers.map((c, i) => <li key={i}>{c}</li>)}</ul>
                    <h4 style={{ marginTop: 20 }}>Perfect For</h4>
                    <p style={{ fontSize: 14, color: "var(--gray-500)" }}>{p.for}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
