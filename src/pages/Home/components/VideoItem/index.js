import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./VideoItem.module.scss";
import Image from "@/components/Image";
import Button from "@/components/Button";
import InteractButton from "../InteractButton";
import { CollectIcon, CommentIcon, HeartIcon, ShareIcon } from "@/components/Icons";

const cx = classNames.bind(styles);

function VideoItem({ avatar, nickname, name, videoDes, videoSrc, likeCount, commentCount, shareCount, viewCount }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("account-info")}>
                <Image className={cx("avatar")} src={avatar} alt={nickname} />
                <div className={cx("video-info")}>
                    <div className={cx("account-header")}>
                        <div className={cx("account-name")}>
                            <h3 className={cx("nickname")}>{nickname}</h3>
                            <h4 className={cx("name")}>{name}</h4>
                        </div>
                        <Button outline>Follow</Button>
                    </div>
                    <div className={cx("video-des")}>{videoDes}</div>
                    <div className={cx("video-content")}>
                        <video className="video" src={videoSrc} width={326} height={583} loop />
                    </div>
                </div>
            </div>
            <div className={cx("action-sidebar")}>
                <InteractButton icon={<HeartIcon />} />
                <span className={cx("interact-count")}>{likeCount}</span>
                <InteractButton icon={<CommentIcon />} />
                <span className={cx("interact-count")}>{commentCount}</span>
                <InteractButton icon={<CollectIcon />} />
                <span className={cx("interact-count")}>{shareCount}</span>
                <InteractButton icon={<ShareIcon />} />
                <span className={cx("interact-count")}>{viewCount}</span>
            </div>
        </div>
    );
}

VideoItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    videoDes: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    shareCount: PropTypes.number.isRequired,
    viewCount: PropTypes.number.isRequired,
};

export default VideoItem;
