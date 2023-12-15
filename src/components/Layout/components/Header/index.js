import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmarkCircle,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faLanguage,
    faQuestionCircle,
    faKeyboard,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import images from "@/assets/images";
import { Wrapper as PopperWrapper } from "@/components/Popper";
import AccountItem from "@/components/AccountItem";
import Button from "@/components/Button";
import Menu from "@/components/Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        Icon: <FontAwesomeIcon icon={faLanguage} />,
        title: "English",
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

function Header() {
    const [searchResults, setSeacrchResult] = useState([1, 2, 3]);

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="logo-tiktok" />
                </div>
                <Tippy
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
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx("action")}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>

                    <Menu items={MENU_ITEMS}>
                        <button className={cx("more-btn")}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
