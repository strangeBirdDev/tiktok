import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmarkCircle,
    faSpinner,
    faEllipsisVertical,
    faLanguage,
    faQuestionCircle,
    faKeyboard,
    faCoins,
    faGear,
    faUser,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import images from "@/assets/images";
import { Wrapper as PopperWrapper } from "@/components/Popper";
import AccountItem from "@/components/AccountItem";
import Button from "@/components/Button";
import Menu from "@/components/Popper/Menu";
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from "@/components/Icons";
import Image from "@/components/Image";

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
const currentUser = true;

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
    const searchResults = [1, 2, 3];

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="logo-tiktok" />
                </div>
                <div>
                    <HeadlessTippy
                        render={(attrs) => (
                            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx("search-title")}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                        interactive
                        visible={searchResults.length > 0}
                    >
                        <div className={cx("search")}>
                            <input placeholder="Search accounts and videos" spellCheck={false} />
                            <button className={cx("clear")}>
                                <FontAwesomeIcon icon={faXmarkCircle} />
                            </button>
                            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
                            <button className={cx("search-btn")}>
                                <SearchIcon />
                            </button>
                        </div>
                    </HeadlessTippy>
                </div>
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
                            <Button primary>Log in</Button>
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
        </header>
    );
}

export default Header;
