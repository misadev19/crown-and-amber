import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <main className="about-page">
      {/* Our Beginning */}
      <section className="about-beginning">
        <div className="about-beginning-content">
          <p className="about-label">{t("about.beginning.label")}</p>

          <h2>{t("about.beginning.title")}</h2>

          <p>{t("about.beginning.text")}</p>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="about-philosophy">
        <div className="about-philosophy-image">
          <img
            src="/images/story/about-philosophy.jpg"
            alt={t("about.philosophy.imageAlt")}
          />
        </div>

        <div className="about-philosophy-content">
          <p className="about-label">{t("about.philosophy.label")}</p>

          <h2>{t("about.philosophy.title")}</h2>

          <p>{t("about.philosophy.text")}</p>
        </div>
      </section>

      {/* Our Tea */}
      <section className="about-tea">
        <p className="about-label">{t("about.tea.label")}</p>

        <h2>{t("about.tea.title")}</h2>

        <p>{t("about.tea.text")}</p>
      </section>
    </main>
  );
}

export default About;
