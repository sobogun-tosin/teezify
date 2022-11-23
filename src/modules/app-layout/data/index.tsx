import { homePageRoute, libraryPageRoute, searchPageRoute } from "src/config";
import { CgHome, CgSearch } from "react-icons/cg";
import { BiLibrary } from "react-icons/bi";

export const SIDEBAR_DATA = [
  {
    title: "Home",
    icon: <CgHome />,
    url: homePageRoute,
  },
  {
    title: "Search",
    icon: <CgSearch />,
    url: searchPageRoute,
  },
  {
    title: "Your Library",
    icon: <BiLibrary />,
    url: libraryPageRoute,
  },
];
