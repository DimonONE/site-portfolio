import React, { useEffect, useState } from "react";

export const InfoAboutMe = (props: any) => {
  const [skills, setSkills] = useState([
    { name_skill: "name skill 2", lvl_skill: 100 },
    { name_skill: "name skill 1", lvl_skill: 40 },
    { name_skill: "name skill 3", lvl_skill: 60 },
  ]);

  const getRandomNum = (min: number, max: number) =>
    Math.floor(Math.random() * (max + 1 - min) + min);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkills(
        Array.from(skills).map((e, index) => ({
          ...e,
          lvl_skill:
            e.lvl_skill <= 100 && e.lvl_skill > 0
              ? e.lvl_skill + getRandomNum(1, -1)
              : e.lvl_skill,
        }))
      );
    }, Math.random() * (4000 - 3000) + 3000);
    return () => clearTimeout(timer);
  });

  const locatlState = {
    briefInformation: {
      head: "Коротка інформація",
      text: "Я junior програміст. На разs працюю на фрілансі більше 2-х років. В цілому всі проекти на React. Сам проживаю на заході України в місті Тячів. Тепер студент 4-го курсу на факультеті інженерія ПО.",
    },
    ProfessionalSkills: {
      head: "Професійні вміння",
      skills: [
        {
          head: "React",
          text: `///
      `,
        },
        {
          head: "Redux",
          text: `///
      `,
        },
        {
          head: "TypeScript",
          text: `///
      `,
        },
        {
          head: "Python",
          text: `На Python пишу вже десь 2
          роки. Виконав декілька
          замовлень. Звідси умію
          працювати з базами даних
          SQL/MySQL.
          Вмію розробляти ботів
          телеграм, діскорд.
          Знаю працювати з Flask а саме
          back-end.
          Працював також і з розробкою
          програм з інтерфейсом на
          PyQT та Pygame.
      `,
        },
        {
          head: "Photoshop",
          text: `Базові навики в обробці
          фотографій. Вміння швидко
          обробляти фото. Працювати з
          слоями, накладати різні
          ефекти. Користуюся
          Photoshop_2018 оскільки він
          зручніший.
      `,
        },
        {
          head: "web",
          text: `Як і більша кількість
      програмістів поченав з веб
      розробки. На разі добре знаю
      html/css і не дуже досконало
      js.
      На разі знайомий з веб
      розробкою більше двох років.
      `,
        },
        {
          head: "С++",
          text: `Навики з С++ здобував в
          Закарпатськом
          політехнічному фаховому
          коледжі.
          Вмію складати не складні
          програми +ООП.
          Також є багато прикладів
          робіт з коледжу.
      `,
        },
        {
          head: "Delphi",
          text: `Delphiяк і плюси вивчав в
          коледжі, Вмію складати
          програми з стандартним
          інтерфейсом та базово знаю
          мову /Pascal/
      `,
        },
        {
          head: "Sass",
          text: `Delphiяк і плюси вивчав в
          коледжі, Вмію складати
          програми з стандартним
          інтерфейсом та базово знаю
          мову /Pascal/
      `,
        },
      ],
    },

    education: {
      head: "Освіта",
      yearsOfStudy: [
        {
          year: "2008 - 2017",
          school: "Середня освіта.",
        },
        {
          year: "2018 - 2021",
          school:
            "Закарпатський політехнічний фаховий коледж.Інженер програмного забезпечення.",
        },
      ],
    },
    aboutMyself: {
      head: "Про себе",
      hobby: `Мені довподоби розробляти
      автоматизацію до програм.
      Розробка ботів, статистика,
      графіки. Обробка даних.
      Розробка баз данних їх
      парсинг та створення.`,
      aboutMy: [
        {
          text: `На разі в мене було лише декілька ділових осіб з якими я мав співпрацю,
      кожен з них зі своїм характером, але кожен з них ввічливо і швидко
      відповідав на мої питання що допомагало швидко і якісно виконувати
      подану задачу.`,
        },
        {
          text: `Що до самих проектів то мені
          доводилося створювати нові бази даних використовуючи SQL та збору
          данних методом парсингу`,
        },
        {
          text: `Також доводилося розробляти нейронні звязки(нейронная сеть) для
          подальшого прогнозування та виведення на екран різного роду графіків.`,
        },
        {
          text: `Сам я людина оптимістична, не здаюся допоки не зроблю запланованого.
          Завжди добиваюся свого, якщо це не приносить шкоди оточуючим.`,
        },
        {
          text: `Я палко прагну й надалі розвиватися в ІТ сфері оскільки це дійсно цікава
          справа. Мене заводить коли я даю життя і якісь вміння машині. На разі
          особливо цікавлюся НС та розробкою ИИ.`,
        },
        {
          text: `Але так як в цьому світі не вижити без аби яких фінансових потреб
          змушений не тільки вчитися але й працювати. Хоча така робота зовсім не в
          тягість.`,
        },
        {
          text: `Вдячний за увагу ;)`,
        },
      ],
    },
  };

  return (
    <div className="info-about-me">
      <div className="brief-information">
        <h2 className="head header">{locatlState.briefInformation.head}</h2>
        <div className="content">
          <p className="text-info">{locatlState.briefInformation.text}</p>
        </div>
      </div>
      <div className="professional-skills">
        <h2 className="head header">{locatlState.ProfessionalSkills.head}</h2>
        <div className="block">
          {locatlState.ProfessionalSkills.skills.map((e) => (
            <span className="block__skill">
              <h2>{e.head}</h2>
              <span className="text-info">{e.text}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="about-myself">
        <h2 className="head header">{locatlState.aboutMyself.head}</h2>
        <div className="content">
          <h2 className="hobby">{locatlState.aboutMyself.hobby}</h2>
          <div className="block">
            {locatlState.aboutMyself.aboutMy.map((e) => (
              <span className="hobby">
                <p className="text-info">{e.text}</p>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="education">
        <h2 className="head header">{locatlState.education.head}</h2>
        <div className="content">
          {locatlState.education.yearsOfStudy.map((e) => (
            <span className="years-of-study">
              <h3>{e.year}</h3>
              <p className="text-info">{e.school}</p>
            </span>
          ))}
        </div>
      </div>
      {/* <div className="block-skills">
        {skills.map((e) => (
          <div className="skill-container">
            <span className="skill" style={{ width: `${e.lvl_skill}%` }}>
              {e.lvl_skill}
            </span>
            <p>{e.name_skill}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};
