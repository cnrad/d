import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    followers: string;
    following: string;
    name: string;
    avatar: string;
};

type Error = {
    error: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
    const username = req.query["user"];
    if (!username) return res.status(400).json({ error: "No username provided!" });

    const twitterInfo = await fetch(`https://api.twitter.com/1.1/users/show.json?screen_name=${username}`, {
        headers: {
            Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
    }).then(res => res.json());

    return res.status(200).json({
        followers: twitterInfo.followers_count,
        following: twitterInfo.friends_count,
        name: twitterInfo.name,
        avatar: twitterInfo.profile_image_url,
    });
}
