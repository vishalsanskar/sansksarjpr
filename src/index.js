import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import About from "./routes/about";
// import Services from "./routes/services";
// import WebDesign from "./routes/web-design";
// import WebDev from "./routes/web-dev";
// import Frontend from "./routes/frontend";
// import Php from "./routes/php";
// import NodeJs from "./routes/node";
// import SEO from "./routes/seo";
import Mission from "./routes/mission";
import Inspiration from "./routes/inspiration"
import Headofschool from "./routes/headofschool";
import Feestructure from "./routes/feestructure";
import Ourstaff from "./routes/ourstaff";
import Pyp from "./routes/pyp";
import Ibdp from "./routes/ibdp";
import Igcse from './routes/igcse'
import Policy from "./routes/policy";
import Ibdphandbooks from "./routes/ibdphandbooks";
import Cashandbooks from "./routes/cashandbooks";
import Tokhandbooks from "./routes/tokhandbooks";
import Eehandbooks from "./routes/eehandbooks";
import Syllabus from "./routes/syllabus";
import BookList from "./routes/bookList";
import Curriculum from "./routes/curriculum";
import Pyppoi from "./routes/pyppoi";
import Parentorientationforpyp from "./routes/parentorientationforpyp";
import Parentorientationibdp from "./routes/parentorientationibdp";
import Calendar from "./routes/calendar";
import Holidayhomework from "./routes/holidayhomework";
import Homeassignments from "./routes/homeassignments";
import Circular from "./routes/circular";
import Newsletter from "./routes/newsletter";
import Igceadmission from "./routes/igceadmission";
import Ibdpadmission from "./routes/ibdpadmission";
import Onlineregistration from "./routes/onlineregistration";
import Ibdpupdate from "./routes/ibdpupdate";
import Events from "./routes/events";
import Classexhibition from "./routes/classexhibition";
import Celebrations from "./routes/celebrations";
import News from "./routes/news";
import Videos from "./routes/videos";
import Casexperiences from "./routes/casexperiences";
import Schooltrips from "./routes/schooltrips";
import Visualarts from "./routes/visualarts";
import Onlinefess from "./routes/onlinefees";
import Achievements from "./routes/achievements";
import Placements from "./routes/placements";
import Careercounselling from "./routes/careercounselling";
import Contactus from "./routes/contactus";
import Ibdphandbook from "./routes/ibdp-handbook";
import Pdf1 from '../src/components/pdf/newsletter/ibpyp/Newsletter.pdf';



const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "mission",
        element: <Mission/>,
      },
      {
        path: "inspiration",
        element: <Inspiration/>,
      },
      {
        path: "headofschool",
        element: <Headofschool/>,
      },
      {
        path: "feestructure",
        element: <Feestructure/>,
      },
      {
        path: "ourstaff",
        element: <Ourstaff/>,
      },
      {
        path: "pyp",
        element: <Pyp/>,
      },
      {
        path: "igcse",
        element: <Igcse/>,
      },
      {
        path: "ibdp",
        element: <Ibdp/>,
      },
      {
        path: "policy",
        element: <Policy/>,
      },
      {
        path: "ibdphandbooks",
        element: <Ibdphandbooks/>,
      },
      {
        path: "cashandbooks",
        element: <Cashandbooks/>,
      },
      {
        path: "tokhandbooks",
        element: <Tokhandbooks/>,
      },
      {
        path: "eehandbooks",
        element: <Eehandbooks/>,
      },
      {
        path: "syllabus",
        element: <Syllabus/>,
      },
      {
        path: "bookList",
        element: <BookList/>,
      },
      {
        path: "curriculum",
        element: <Curriculum/>,
      },
      {
        path: "pyppoi",
        element: <Pyppoi/>,
      },
      {
        path: "parentorientationforpyp",
        element: <Parentorientationforpyp/>,
      },
      {
        path: "parentorientationibdp",
        element: <Parentorientationibdp/>,
      },
      {
        path: "calendar",
        element: <Calendar/>,
      },
      {
        path: "holidayhomework",
        element: <Holidayhomework/>,
      },
      {
        path: "homeassignments",
        element: <Homeassignments/>,
      },
      {
        path: "circular",
        element: <Circular/>,
      },
      {
        path: "newsletter",
        element: <Newsletter/>,
      },
      {
        path: "igceadmission",
        element: <Igceadmission/>,
      },
      {
        path: "ibdpadmission",
        element: <Ibdpadmission/>,
      },
      {
        path: "onlineregistration",
        element: <Onlineregistration/>,
      },
      {
        path: "ibdpupdate",
        element: <Ibdpupdate/>,
      },
      {
        path: "events",
        element: <Events/>,
      },
      {
        path: "classexhibition",
        element: <Classexhibition/>,
      },
      {
        path: "celebrations",
        element: <Celebrations/>,
      },
      {
        path: "news",
        element: <News/>,
      },
      {
        path: "videos",
        element: <Videos/>,
      },
      {
        path: "casexperiences",
        element: <Casexperiences/>,
      },
      {
        path: "schooltrips",
        element: <Schooltrips/>,
      },
      {
        path: "visualarts",
        element: <Visualarts/>,
      },
      {
        path: "onlinefess",
        element: <Onlinefess/>,
      },
      {
        path: "achievements",
        element: <Achievements/>,
      },
      {
        path: "placements",
        element: <Placements/>,
      },
      {
        path: "careercounselling",
        element: <Careercounselling/>,
      },
      {
        path: "contact us",
        element: <Contactus/>,
      },
      {
        path: "ibdp-handbook",
        element: <Ibdphandbook/>,
      },
      {
        path: "pdf",
        element: <Pdf1/>
      }

      // {
      //   path: "about",
      //   element: <About />,
      // },
      // {
      //   path: "mission",
      //   element: <Mission />,
      // },
      // {
      //   path: "inspiration",
      //   element: <WebDesign />,
      // },
      // {
      //   path: "headofschool",
      //   element: <Headofschool/>,
      // },
      // {
      //   path: "fee-structure",
      //   element: <Feestructure/>,
      // },
      // {
      //   path: "Ourstaff",
      //   element: <NodeJs />,
      // },
      // {
      //   path: "php",
      //   element: <Php />,
      // },
      // {
      //   path: "seo",
      //   element: <SEO />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
