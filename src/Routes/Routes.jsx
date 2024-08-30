import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../View/Layout/Layout";
import Home from "../View/Pages/Home/Home";
import About from '../View/Pages/About/index';
import Rendering2d from '../View/Pages/2D_Rendering/index';
import Errorpage from "../View/Pages/Errorpage";
import Team from "../View/Pages/team";
import ThreeDWalkthrough from "../View/Pages/Services/3D-Walkthroughs";
import FourDStimulation from "../View/Pages/Services/4D-Stimulations";
import TwoDtothreeDModelingService from "../View/Pages/Services/2Dto3D-modeling";
import SupplementalModeling from "../View/Pages/Services/Supplemental-Modeling";
import PointCloudto3DModeling from "../View/Pages/Services/Point-Cloud-to-3D-Modeling";
import ClashDetection from "../View/Pages/Services/Clash-DetectionandCoordination";
import BIMExecuionPlanning from "../View/Pages/Services/BIM-Execution-Planning";
import ShopDrawingCreation from "../View/Pages/Services/Shop-Drawing-Creation";
import TwoDOverlayService from "../View/Pages/Services/2D-Overlay";
import RFIChangeOrderService from "../View/Pages/Services/RFI-Change-Order-Date-in-PM-Software";

const Routes =()=>{
    const element = useRoutes([
        {
            path:'/',
            element: <Layout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/about',
                    element:<About/>
                },
                {
                    path:'/visualisation/2D&3D-rendering',
                    element:<Rendering2d/>
                },
                {
                    path:'/visualisation/3D-Walkthrough-Flythrough',
                    element:<ThreeDWalkthrough/>
                },
                {
                    path:'/visualisation/4D-Simulations',
                    element:<FourDStimulation/>
                },
                {
                    path:'/modeling/2D-to-3D-modeling',
                    element:<TwoDtothreeDModelingService/>
                },
                {
                    path:'/modeling/supplemental-modeling',
                    element:<SupplementalModeling/>
                },
                {
                    path:'/modeling/point-cloud-to-3D-modeling',
                    element:<PointCloudto3DModeling/>
                },
                {
                    path:'/BIM-Management/clash-detection-and-coordination',
                    element:<ClashDetection/>
                },
                {
                    path:'/BIM-Management/BIM-execution-planning',
                    element:<BIMExecuionPlanning/>
                },
                {
                    path:'/shop-drawing-creation',
                    element:<ShopDrawingCreation/>
                },
                {
                    path:'/2D-overlay',
                    element:<TwoDOverlayService/>
                },
                {
                    path:'/RFI-order-date-in-PM-software',
                    element:<RFIChangeOrderService/>
                },
                {
                    path:'/team',
                    element:<Team/>
                },
                // {
                //     path:'/podcast',
                //     element:<Podcast/>
                // },
                // {
                //     path:'/portfolio',
                //     element:<Portfolio/>
                // },
                // {
                //     path:'/contact',
                //     element:<Contact/>
                // }            
            ]
        },
        {
          path:'/404',
          element:<Errorpage/>
        },
        {
          path: "*",
          element: <Navigate to="/404"/>,
        }
    ])
    return element;
}

export default Routes;