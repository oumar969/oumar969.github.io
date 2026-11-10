import { config } from "../config";
import "./styles/AIAgents.css";

const AIAgents = () => {
  return (
    <section className="ai-agents" id="ai-agents" aria-labelledby="ai-agents-title">
      <div className="ai-agents-inner">
        <header className="ai-agents-header">
          <div>
            <p>Autonomous workflows · human control</p>
            <h2 id="ai-agents-title">AI <span>Agents</span></h2>
          </div>
          <p className="ai-agents-intro">
            Practical agents that reduce repetitive work while keeping important decisions with the user.
          </p>
        </header>

        <div className="ai-agents-list">
          {config.aiAgents.map((agent, index) => (
            <article className="ai-agent-card" key={agent.id}>
              <div className="ai-agent-media">
                <video
                  src={agent.video}
                  poster={agent.image}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={`${agent.title} demonstration video`}
                />
                <div className="ai-agent-media-topline">
                  <span>Agent {String(index + 1).padStart(2, "0")}</span>
                  <span>{agent.status}</span>
                </div>
              </div>

              <div className="ai-agent-content">
                <p className="ai-agent-kicker">{agent.subtitle}</p>
                <h3>{agent.title}<span>.</span></h3>
                <p className="ai-agent-description">{agent.description}</p>

                <ul className="ai-agent-highlights" aria-label={`${agent.title} key features`}>
                  {agent.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="ai-agent-safety">
                  <span>Human in the loop</span>
                  <p>{agent.safety}</p>
                </div>

                <ul className="ai-agent-tech" aria-label={`${agent.title} technologies`}>
                  {agent.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgents;
