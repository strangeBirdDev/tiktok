import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./SuggestedAccounts.module.scss";
import AccountItem from "./AccountItem";
import * as usersServices from "@/services/usersServices";

const cx = classNames.bind(styles);

function SuggestedAccounts({ heading }) {
    const [suggestedAccounts, setSuggestedAccounts] = useState([]);
    const [showSuggestedAccounts, setShowSuggestedAccounts] = useState([]);
    const [isSeeAll, setIsSeeAll] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await usersServices.getSuggestedAccounts(1, 20);
            setSuggestedAccounts(res.data);
            setShowSuggestedAccounts(res.data.slice(0, 5));
        };

        fetchApi();
    }, []);

    const handleToggleSeeAll = () => {
        if (!isSeeAll) {
            setShowSuggestedAccounts(suggestedAccounts);
            setIsSeeAll(true);
        } else {
            setShowSuggestedAccounts(suggestedAccounts.slice(0, 5));
            setIsSeeAll(false);
        }
    };

    return (
        <div className={cx("wrapper")}>
            <h2 className={cx("heading")}>{heading}</h2>
            {showSuggestedAccounts.map((account) => (
                <AccountItem
                    key={account.id}
                    avatar={account.avatar}
                    name={`${account.first_name} ${account.last_name}`}
                    nickname={account.nickname}
                    tick={account.tick}
                    statistics={{ followers: account.followers_count, likes: account.likes_count }}
                />
            ))}
            <p className={cx("see-all-btn")} onClick={handleToggleSeeAll}>
                {isSeeAll ? "See less" : "See all"}
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    heading: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
