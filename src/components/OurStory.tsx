import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ourStoryImage from "../assets/story/our-story.jpg";

function OurStory() {
  const { t } = useTranslation();

  return (
    <section className="our-story">
      <div className="our-story-image">
        <img src={ourStoryImage} alt="A traditional afternoon tea" />
      </div>

      <div className="our-story-content">
        <p className="our-story-label">OUR STORY</p>

        <h2>CROWN & AMBER</h2>

        <p className="our-story-intro">{t("ourStory.intro")}</p>

        <p className="our-story-text">{t("ourStory.text")}</p>

        <Link to="/about" className="our-story-button">
          VIEW MORE
        </Link>
      </div>
    </section>
  );
}

export default OurStory;
