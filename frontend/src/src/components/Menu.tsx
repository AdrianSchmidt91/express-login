import React from "react";
import { MegaMenu } from "primereact/megamenu";

export const Menu = (): React.ReactElement => {
  const items = [
    {
      label: "Übungen",
      icon: "pi pi-fw pi-video",
      items: [
        [
          {
            label: "Schulter",
            items: [{ label: "Seitheben" }],
          },
          {
            label: "Brust",
            items: [{ label: "Brustmaschine" }],
          },
        ],
      ],
    },
    {
      label: "Personen",
      icon: "pi pi-fw pi-users",
      items: [
        [
          {
            label: "Adrian",
            items: [{ label: "Trainingsplan" }],
          },
          {
            label: "Julia",
            items: [{ label: "Trainingsplan" }],
          },
        ],
      ],
    },
    {
      label: "Trainingstage",
      icon: "pi pi-fw pi-calendar",
      items: [
        [
          {
            label: "Event 1",
            items: [{ label: "Event 1.1" }, { label: "Event 1.2" }],
          },
          {
            label: "Event 2",
            items: [{ label: "Event 2.1" }, { label: "Event 2.2" }],
          },
        ],
      ],
    },
  ];

  return (
    <div>
      <MegaMenu model={items} />
    </div>
  );
};
