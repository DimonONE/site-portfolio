import React from "react";

import { Contacts } from "./components/contacts/Contacts";
import { InfoAboutMe } from "./components/info-about-me/InfoAboutMe";
import { ShowingOfWork } from "./components/showing-of-work/ShowingOfWork";

export const Main = (props: any) => {
  return (
    <main className="main">
      <Contacts />
      <InfoAboutMe />
      <ShowingOfWork />
    </main>
  );
};
