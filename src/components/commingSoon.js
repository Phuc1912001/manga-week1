import React from "react";

import CardComming from "./cardComming";
import useFetch from "../hooks/useFetch";

const CommingSoon = () => {
    const commingSoon = useFetch(3);

    const firstThreeItem = commingSoon.slice(0, 3);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] lg:px-[60px] lg:pb-[60px]">
            {firstThreeItem.map((item, index) => (
                <CardComming
                    key={index}
                    poster={item?.image_poster_link_goc}
                    title={item?.title_manga}
                    rate={item?.rate}
                    update={item.time_release}
                />
            ))}
        </div>
    );
};

export default CommingSoon;
