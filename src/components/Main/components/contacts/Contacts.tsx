import React from "react";
import image_user from "../../../../img/user_img.jpg";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

// const HeadTeg = (props: any) => {
//   return (
//     <h2>
//       {props.head}: <p> {props.param}</p>
//     </h2>
//   );
// };

export const Contacts = (props: any) => {
  return (
    <div className="contacts">
      <div className="left">
        <h2>
          Name: <p> Dimon </p>
        </h2>
        <h2>
          Location: <p> Ukraine</p>{" "}
        </h2>
        <h2>
          Specialty: <p>Programmer</p>
        </h2>
      </div>
      <div>
        <div className="block__image-user">
          <img src={image_user} alt="" />
        </div>
        <h3 className="status-programer">Junior</h3>
      </div>
      <div className="right">
        <h2 className="fa fa-plus-circle">
          <SendTwoToneIcon color="primary" />
          <p className="telegram">Michael_D_I</p>
        </h2>
        <h2>
          <PhoneIphoneIcon color="secondary" /> <p> 0962863614</p>
        </h2>
        <h2>
          <MailOutlineIcon color="action" /> <p> dimonmezey@gmail.com </p>{" "}
        </h2>
      </div>
    </div>
  );
};
