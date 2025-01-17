import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DashNav from "../../components/dash/DashNav";
import DarkModeToggle from "../../components/DarkModeToggle";
import PersonalProjectCard from "../../components/project/PersonalProjectCard";
import { withAuth } from "./../../server/middlewares/auth.middleware";
import NotificationsLink from "../../components/dash/NotificationsLink";
import Logo from "../../components/Logo";
import { DashNavMobile, MenuMobile } from "../../components/dash/DashNavMobile";
import bars from "../../public/assets/dash/bars-solid.svg";
import { Icon } from "@iconify/react";

export default function PersonalProjects({ name, projects, unread }) {
  // NOTE: The project cards are inside /components/project/PersonalProjectCard, so the unpublish, publish, and delete functions will be there as well
  const [menu, setMenu] = useState(true);

  const handleBars = () => {
    setMenu(r => !r);
  };

  return (
    <div className="xs:grid xs:grid-cols-12 dark:bg-[#202020]">
      <div className="mxs:hidden col-span-1 mx-auto">
        <DashNav active="/personal-projects" />
      </div>
      <div className="mxs:px-0 mxs:pt-4 dark:bg-[#202020] dark:text-white col-span-11 pl-32 pt-10 pr-10 content-center min-w-full min-h-screen">
        <div className="flex flex-col">
          <header className="flex items-center justify-center xs:pb-10 mxs:justify-between mxs:px-5">
            <h1 className="mxs:hidden mx-auto font-semibold text-42px">Projects</h1>
            <Logo className="xs:hidden w-[80px] xs:w-[120px] pt-1" />
            <div className="text-right flex items-end justify-end xs:mt-3 mxs:mb-0.5">
              <DarkModeToggle
                className="h-[22px] xs:h-[30px]"
                darkClassName="h-[22px] xs:h-[30px]"
              />
              <NotificationsLink />
              <div onClick={handleBars} className="xs:hidden relative w-[22px] -mb-1 ml-1">
                <Image src={bars} alt="bars-solid" />
              </div>
            </div>
          </header>
          <MenuMobile menu={menu} onClick={handleBars} />
        </div>
        <h1 className="xs:hidden mx-auto font-semibold text-36px mt-12 text-center">Projects</h1>
        <hr className="xs:mb-5 border-t-[1.4px] border-solid border-[#C9C9C9]" />
        <section className="mxs:px-4 mxs:pt-4 pt-7 px-7">
          <p className="mxs:text-16px mxs:mb-4">
            Hey <span className="text-fruit-salad">{name}</span>, here are all the cool things
            you’ve built, launched, designed, and shared with The Dynamics Community. We’re proud of
            you!
          </p>
          <div className="flex md:justify-end justify-center items-center gap-x-5 ">
            <Link href="/app/create-project">
              <button className="mxs:mb-[26px] mxs:text-16px mxs:rounded button-small button-orange-peel ">
                Add new
              </button>
            </Link>
            <Link href="/project-gallery">
              <button className="mxs:mb-[26px] mxs:text-16px mxs:rounded button-small button-deep-sky-blue flex items-center">
                View gallery{" "}
                <span className="ml-1">
                  <Icon
                    icon="ci:external-link"
                    color="white"
                    inline={true}
                    width={26}
                    height={26}
                  />
                </span>
              </button>
            </Link>
          </div>

          {projects.map((project, key) => (
            <PersonalProjectCard key={key} {...project} />
          ))}
        </section>
      </div>
      <div className="xs:hidden mt-40">
        <DashNavMobile />
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  // TODO: Alter to work with backend
  const user = await withAuth(req => req.$user)(req, res);

  return {
    props: {
      name: user.firstName,

      projects: [
        {
          name: "Web scraper",
          description:
            "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
          image:
            "https://s3-alpha-sig.figma.com/img/ed76/0bd2/dc09e6a239152f3692e81f49e87d94ed?Expires=1652054400&Signature=W2SlpLtGHfaojO7jy~8a9edb8-CpirVJVvEFCPrKewoLEH9Z8GL0GsecHR~Q4S4gTd6vk~myv6Mr7jEdMb4QnHjlPJeGqtgPwNKzZW9EK7lydNkJ1T3rAal6zVuRsr4LGkVIwa-np~CmcpehZ5nJNo2BBvyQ29wGDzPDFafpK57XCI83p9cHNiKTFzhZ9W6Hao8uYeUjl~-D49Xv3K3eGHdPeWohDDqNsNkw-8jtVAdkXBrGmT2wtFAC4T~0-XxUgx-Jax3gSrUQotz8fKMkkWhNUhPeFrytc-B26DWiRS~oYE5Lcc3DccQfbkmo5sa-7MThTxHfL6AGwng~rADD-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          published: true,
          date: "11:00 am, Today",
          id: "123"
        },
        {
          name: "Codetivate",
          description:
            "The world’s largest diversity-focused hackhon web application built for this fall 2022",
          image:
            "https://s3-alpha-sig.figma.com/img/78d4/efac/c44a334a75277618bda0bcfd3c0ea43f?Expires=1652054400&Signature=eAv5pxdVnGiyKNsohkY8n-Ulc4dJiVwXc43FnRHvaJFZGU3xgAYaaMmqAIS6WplIZcN-~ETERileQNRQnfvDaSOMu6j3xtddsWj~qP-22112KEBvOYodasgJhsnnn1q1xz339SQ3lSS1ktHeR96ecMlTZcf~mr3guCOTryo7opIfW84aOcDEfuCnco8nv5I2sTVILUnql~SnDHhtPlYfx4hRizgYPritRQZLABQI5vvTiY6mzS6Xt0MDZBLae3shGMQdJv-iBZSZGIt-O7JwO9q5B8GyuMlvyWaKA~sEQhgXc~bDzMnrRlcDg0wPSrLUoEuTowMuIKEwZX4GimAzFA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          published: true,
          date: "February 28, 2022",
          id: "456"
        },
        {
          name: "Lorum Ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          image:
            "https://s3-alpha-sig.figma.com/img/351b/8a4f/c18dfbda233aa2436e53dcd3628893ee?Expires=1652054400&Signature=DC4EgBfws52~dl3UsDTWorTaQV~rQOY4~yAEa6A4TNVe4wCkhM1QSQuITEU7cl7jGks00vRIN7BTta1UziJSE5aHohocgGSJpwe8OsIoskReTZIyRgd1oeml~Zr5Rw8USFLvXHwg3W-QqaChPnRCwtk5lEiJeihEY0-loviXXZ6wsaDT8WDt7sXSDsCF7L7lUenGfRoCZCEWY9sUSwm5YfcwKFslmjkkY04au06UjSc4NYQo8KeprNek7Egu~7SIN7AXafT1PqHUYtLpQVxtT5UyXH6rdLnyX3oXd5Xs7bJ-mp1T0wSbiJuDMrkX~bvIJ2J5UZDAdgeqGIWuH9yPsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          published: false,
          date: "January 1, 2022",
          id: "789"
        }
      ]
    }
  };
}
