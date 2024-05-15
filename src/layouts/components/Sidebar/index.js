import PropTypes from "prop-types";
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
import SuggestedAccounts from "../SuggestedAccounts";

const cx = classNames.bind(styles);

function Sidebar({ className }) {
    return (
        <aside className={cx("wrapper", className)}>
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

            <SuggestedAccounts heading="Suggested Accounts" />
            <SuggestedAccounts heading="Following accounts" />
        </aside>
    );
}

Sidebar.propTypes = {
    className: PropTypes.string,
};

export default Sidebar;
