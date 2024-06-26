import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsisVertical,
    faLanguage,
    faQuestionCircle,
    faKeyboard,
    faCoins,
    faGear,
    faUser,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./Header.module.scss";
import images from "@/assets/images";
import Button from "@/components/Button";
import Menu from "@/components/Popper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "@/components/Icons";
import Image from "@/components/Image";
import Search from "../Search";
import { Link } from "react-router-dom";
import config from "@/config";
import LoginModal from "../LoginModal";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        Icon: <FontAwesomeIcon icon={faLanguage} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                { type: "language", code: "en", title: "English" },
                { type: "language", code: "vn", title: "Việt Nam" },
            ],
        },
    },
    {
        Icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        Icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];

// Handle logic
const handleMenuChange = (item) => {
    switch (item.type) {
        case "language":
            //handle change language
            break;
        default:
    }
};

// Handle authorize
const currentUser = false;

const userMenu = [
    {
        Icon: <FontAwesomeIcon icon={faUser} />,
        title: "View profile",
        to: "/@hoaa",
    },
    {
        Icon: <FontAwesomeIcon icon={faCoins} />,
        title: "Get coins",
        to: "/coin",
    },
    {
        Icon: <FontAwesomeIcon icon={faGear} />,
        title: "Settings",
        to: "/settings",
    },
    ...MENU_ITEMS,
    {
        Icon: <FontAwesomeIcon icon={faSignOut} />,
        title: "Log out",
        to: "/logout",
        separate: true,
    },
];

function Header() {
    const [openModal, setOpenModal] = useState(false);

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Link to={config.routes.home} className={cx("logo")}>
                    <img src={images.logo} alt="logo-tiktok" />
                </Link>

                <Search />

                <div className={cx("action")}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom" delay={[0, 200]}>
                                <button className={cx("actions-btn")}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Messages" placement="bottom" delay={[0, 200]}>
                                <button className={cx("actions-btn")}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" delay={[0, 200]}>
                                <button className={cx("actions-btn")}>
                                    <InboxIcon />
                                    <span className={cx("badge")}>18</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary onClick={() => setOpenModal(true)}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx("user-avatar")}
                                src={require("@/assets/images/avatar_tiktoker.jpg")}
                                alt="user-avatar"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
            {openModal ? <LoginModal onClose={handleCloseModal} /> : ""}
        </header>
    );
}

export default Header;
