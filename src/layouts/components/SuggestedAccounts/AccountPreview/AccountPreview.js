import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./AccountPreview.module.scss";
import Image from "@/components/Image";
import Button from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview({ avatar, name, nickname, tick, statistics }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("heading")}>
                <Image className={cx("avatar")} src={avatar} alt={nickname} />
                <Button primary>Follow</Button>
            </div>
            <div className={cx("body")}>
                <strong>
                    {name} {tick && <FontAwesomeIcon className={cx("icon")} icon={faCheckCircle} />}
                </strong>
                <p>{nickname}</p>
                <p className={cx("statistics")}>
                    <strong className={cx("value")}>{statistics.followers} </strong>
                    <span className={cx("label")}>Followers</span>
                    <strong className={cx("value")}>{statistics.likes} </strong>
                    <span className={cx("label")}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tick: PropTypes.bool.isRequired,
    nickname: PropTypes.string.isRequired,
    statistics: PropTypes.object.isRequired,
};

export default AccountPreview;
