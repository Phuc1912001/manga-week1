import React, { useState, useEffect } from "react";
import prodApis from "../../api/home";
import CardManga from "../../components/cardManga";

const Page_Comming = () => {
    const [commingSoon, setCommingSoon] = useState([]);
    useEffect(() => {
        getCommingSoon();
    }, []);

    const getCommingSoon = async () => {
        const commingSoonResponse = await prodApis.index();
        console.log(commingSoonResponse.data);
        setCommingSoon(commingSoonResponse.data[3].data);
    };
    return (
        <div className="bg-black px-[60px] pb-[60px]">
            <div className="">
                <h2 className="text-[57px] leading-[64px] font-semibold text-[#FFFFFF] pt-[50px] pb-[60px]">
                    New Released Comic
                </h2>
            </div>
            <div className="grid grid-cols-5 gap-[20px]">
                {commingSoon.map((item, index) => (
                    <CardManga
                        key={index}
                        poster={item?.image_poster_link_goc}
                        title={item?.title_manga}
                        rate={item?.rate}
                        update={item.time_release}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page_Comming;
