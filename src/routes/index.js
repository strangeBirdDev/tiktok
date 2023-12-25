// Layouts
import { HeaderOnly } from "@/components/Layout";
import { DefaultLayout } from "@/components/Layout";

import Home from "@/pages/Home";
import Following from "@/pages/Following";
import Profile from "@/pages/Profile";
import Upload from "@/pages/Upload";
import Search from "@/pages/Search";

// public route
const publicRoutes = [
    { path: "/", component: Home, layout: DefaultLayout },
    { path: "/following", component: Following, layout: DefaultLayout },
    { path: "/@:nickname", component: Profile, layout: DefaultLayout },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    { path: "/search", component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
