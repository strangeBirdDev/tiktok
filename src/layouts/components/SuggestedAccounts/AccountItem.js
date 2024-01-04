import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import Image from "@/components/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import PopperWrapper from "@/components/Popper/Wrapper";
import styles from "./SuggestedAccounts.module.scss";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

function AccountItem({ avatar, tick, name, nickname, statistics }) {
    const renderPreview = (attr) => {
        return (
            <div className={cx("account-preview")} tabIndex={-1} {...attr}>
                <PopperWrapper className={cx("popper-wrapper")}>
                    <AccountPreview
                        avatar={avatar}
                        name={name}
                        tick={tick}
                        nickname={nickname}
                        statistics={statistics}
                    />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy render={renderPreview} interactive placement="bottom" offset={[-20, 0]} delay={[800, 0]}>
                <Link to={`/@${nickname}`} className={cx("account-item")}>
                    <Image className={cx("avatar")} src={avatar} alt={nickname} />
                    <div className={cx("account-info")}>
                        <h4 className={cx("nickname")}>
                            {nickname}
                            <span className={cx("icon")}>{tick && <FontAwesomeIcon icon={faCheckCircle} />}</span>
                        </h4>
                        <p className={cx("name")}>{name}</p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    avatar: PropTypes.string,
    tick: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    statistics: PropTypes.object.isRequired,
};

export default AccountItem;
