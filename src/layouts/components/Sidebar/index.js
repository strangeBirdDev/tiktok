import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";

import config from "@/config";
import Menu from "../Menu";
import MenuItem from "../Menu/MenuItem";
import {
    HomeSolidIcon,
    LiveSolidIcon,
    UsersSolidIcon,
    HomeRegularIcon,
    UsersRegularIcon,
    LiveRegularIcon,
} from "@/components/Icons";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx("wrapper")}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeRegularIcon />}
                    activeIcon={<HomeSolidIcon />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UsersRegularIcon />}
                    activeIcon={<UsersSolidIcon />}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveRegularIcon />}
                    activeIcon={<LiveSolidIcon />}
                ></MenuItem>
            </Menu>
        </aside>
    );
}

export default Sidebar;
