// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    followers: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const twitterInfo = await fetch(
        "https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=notcnrad"
    ).then(res => res.json());

    console.log(twitterInfo[0]);

    res.status(200).json({ followers: twitterInfo[0].followers_count });
}
