import React, { useState, useEffect } from "react";
import prodApis from "../api/home";
import CardManga from "./cardManga";

const ComicRecent = () => {
    const [comicRecent, setComicRecent] = useState([]);
    useEffect(() => {
        getComicRecent();
    }, []);

    const getComicRecent = async () => {
        const comicRecentResponse = await prodApis.index();
        console.log(comicRecentResponse.data);
        setComicRecent(comicRecentResponse.data[4].data);
    };

    const firstFiveItem = comicRecent.slice(0, 5);
    return (
        <div className="grid grid-cols-5 gap-[20px] px-[60px] pb-[60px]">
            {firstFiveItem.map((item, index) => (
                <CardManga
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

export default ComicRecent;
