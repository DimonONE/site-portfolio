import React from "react";
import page_mote_1 from "../../../../img/page-mote_1.png";
import page_mote_2 from "../../../../img/page-mote_2.png";
import page_mote_3 from "../../../../img/page-mote_3.png";
import page_mote_4 from "../../../../img/page-mote_4.png";

export const ShowingOfWork = (props: any) => {
  const localState = [
    {
      head: "Page Moto Shool",
      link: "https://pagemoto-14372.web.app/",
      images: [
        { img: page_mote_1 },
        { img: page_mote_2 },
        { img: page_mote_3 },
        { img: page_mote_4 },
      ],
    },
    // {
    //   head: "Name Work",
    //   link: "links",
    //   images: [
    //     { img: img_work_1 },
    //     { img: img_work_2 },
    //     { img: img_work_3 },
    //     { img: img_work_1 },
    //   ],
    // },
    // {
    //   head: "Name Work",
    //   link: "links",
    //   images: [
    //     { img: img_work_1 },
    //     { img: img_work_2 },
    //     { img: img_work_1 },
    //     { img: img_work_2 },
    //   ],
    // },
  ];
  return (
    <div className="showing-of-work">
      <h1 className="header">Мои работы</h1>
      <div className="work-prew">
        {localState.map((item) => (
          <div className="work-prew__block" key={item.head}>
            <h3>{item.head}</h3>
            <div className="block-img">
              {item.images.map((e) => (
                <div className="image-work">
                  <img src={e.img} alt="NoN" />
                </div>
              ))}
              <div className="see-big">
                <a href={item.link} target="__block">
                  Переглянути
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
