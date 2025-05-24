import React from "react";

const cardsData = [
  {
    id: 1,
    title: "May 20, 2025",
    description: "Stitch Returns in Season 04",
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/BO6-SEASON-04-NARRATIVE-TOUT.jpg",
    hoverText:
      "Following a daring jailbreak conducted by his former adversary, Stitch’s clandestine resurrection is achieved and he returns to the fray with orders to crack the codes needed to uncover the Pantheon moles. Get the backstory on his intense rivalry turned uneasy alliance with Russell Adler and deploy as the menacing ex-Perseus agent arriving in the Season 04 Battle Pass.",
    more: "Read More ►",
  },

  {
    id: 2,
    title: "May 15, 2025",
    description: "Support C.O.D.E. Military Appreciation Month with USAA",
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-GY6-TOUT.jpg",
    hoverText:
      "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans with the C.O.D.E. United Force: Tracer Pack and the C.O.D.E. Got Your Six Event",
    more: "Read More ►",
  },

  {
    id: 3,
    title: "May 09, 2025",
    description: "Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
    image:
      "https://www.tonyhawkthegame.com/content/dam/atvi/tony-hawk/blog/chicago/el-rey-blog/THPS-ELREY-IMAGE-TOUT.jpg",
    hoverText:
      "THPS Fest at the El Rey Theater in Los Angeles celebrated the return of Tony Hawk’s Pro Skater 3 + 4 by providing a closer look at some of the levels, skaters, and other new features coming to the game. See what the event was all about, including previously revealed content arriving at launch on July 11.",
    more: "Read More ►",
  },

  {
    id: 4,
    title: "May 07, 2025",
    description: "#TeamRICOCHET Season 03 Recap for Black Ops 6 and Warzone",
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/ricochet/bo6-season-03-ricochet/COD-BO6-RICOCHET-S03R-TOUT-A.webp",
    hoverText: "#TeamRICOCHET Season 03 Recap and Update",
    more: "Read More ►",
  },

  {
    id: 5,
    title: "May 01, 2025",
    description: "C.O.D.E. celebrates Military Appreciation Month with USAA",
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-2025-IMAGE-TOUT.webp",
    hoverText:
      "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans with the C.O.D.E. United Force: Tracer Pack, the C.O.D.E. Got Your Six Event, Kane Brown High Road Challenge, and more.",
    more: "Read More ►",
  },

  {
    id: 6,
    title: "Apr 29, 2025",
    description: "Black Ops 6 Season 03 Reloaded: All the Details",
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-S03R-ANNOUNCEMENT-TOUT.webp",
    hoverText:
      "Season 03 Reloaded brings two new Multiplayer maps, Directed Mode for Shattered Veil, and new updates to Verdansk. Get new Loadout items like the Vendetta Perk and the Ladra SMG and participate in new events and more when the mid-season update launches on May 1!",
    more: "Read More ►",
  },
];

function Card({ title, description, image, more, hoverText }) {
  return (
    <div className="card group rounded-2xl shadow-lg overflow-hidden h-[528px] w-[400px] hover:scale-105 transition-transform duration-300">
      <img src={image} className="w-full h-60 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white mb-4">{description}</p>
        <p className="hidden group-hover:block text-sm text-gray-300 mb-2">
          {hoverText}
        </p>
        <p className="text-white cursor-pointer">{more}</p>
      </div>
    </div>
  );
}

function CardsSection() {
  return (
    <div className="py-10 ">
      <div className="flex flex-wrap justify-center gap-8">
        {cardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default CardsSection;
