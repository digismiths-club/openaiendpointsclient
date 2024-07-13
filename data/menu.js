import { HiOutlineHome, HiOutlineCog, HiSearch } from "react-icons/hi";
import { AiOutlineTeam } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { TbMessageChatbot } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";
import {
    MdOutlineAccountCircle,
    MdHelpOutline,
    MdOutlineFeedback,
} from "react-icons/md";
import { RiWindyFill } from "react-icons/ri";


export const menuOptions = [
    { name: "Home", to: "/dashboard/account-summary", Icon: HiOutlineHome },
    { name: "ChatBot", to: "/dashboard/chatbot", Icon: TbMessageChatbot },
    { name: "DNS", to: "/dashboard/dns", Icon: FaGlobe },
    { name: "Reports", to: "/dashboard/reports", Icon: TbReportAnalytics },
    { name: "Flows", to: "/dashboard/flows", Icon: RiWindyFill },
];
export const menuOptionsTwo = [
    { name: "Settings", to: "/dashboard#", Icon: HiOutlineCog },
    { name: "Get Help", to: "/dashboard#", Icon: MdHelpOutline },
    { name: "Submit feedback", to: "/dashboard#", Icon: MdOutlineFeedback },
];