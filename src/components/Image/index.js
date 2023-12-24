import React, { useState, forwardRef } from "react";
import classNames from "classnames";

import images from "@/assets/images";
import styles from "./Image.module.scss";

function Image({ className, alt, src, fallback: customFallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            ref={ref}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
