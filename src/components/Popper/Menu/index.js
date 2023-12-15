import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "@/components/Popper";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ items = [], children }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            render={(attrs) => (
                <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx("menu-wrapper")}>
                        <h2>{renderItems()}</h2>
                    </PopperWrapper>
                </div>
            )}
            placement="bottom-end"
            interactive
            delay={[0, 700]}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
