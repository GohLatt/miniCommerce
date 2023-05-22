import Section from "../../../Common/Section";
import Card from "../../../Common/Card";
import "./Service.css";
const data = [
  {
    id: 1,
    title: "Worldwide Delivery",
    text: "We offer competitive price on our 100 million plus product only range",
    icon: <i className="fa-solid fa-truck icon-service"></i>,
  },
  {
    id: 2,
    title: "Safe Payment",
    text: "We offer competitive price on our 100 million plus product only range",
    icon: <i className="fa-solid fa-money-check-dollar icon-service"></i>,
  },
  {
    id: 3,
    title: "Shop With Confidence",
    text: "We offer competitive price on our 100 million plus product only range",
    icon: <i className="fa-solid fa-shield-heart icon-service"></i>,
  },
  {
    id: 4,
    title: "24/7 Support",
    text: "We offer competitive price on our 100 million plus product only range",
    icon: <i className="fa-regular fa-clock icon-service"></i>,
  },
];
function Service() {
  return (
    <Section className="service-section">
      <Card className="service-container">
        {data.map((p) => (
          <Card className="service-box" key={p.id}>
            <div>{p.icon}</div>
            <p className="service-title">{p.title}</p>
            <p>{p.text}</p>
          </Card>
        ))}
      </Card>
    </Section>
  );
}

export default Service;
