import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    followers: string;
    name: string;
};

type Error = {
    error: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
    const username = req.query["user"];
    console.log(username);
    if (!username) return res.status(400).json({ error: "No username provided!" });

    const twitterInfo = await fetch(
        `https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=${username}`
    ).then(res => res.json());

    return res.status(200).json({ followers: twitterInfo[0].followers_count, name: twitterInfo[0].name });
}
