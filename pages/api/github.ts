import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    followers: string;
    following: string;
    stars: string;
    repos: string;
    avatar: string;
    name: string;
};

type Error = {
    error: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
    const username = req.query["user"];
    if (!username) return res.status(400).json({ error: "No username provided!" });

    let data = `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`;
    let buff = Buffer.from(data);
    let base64auth = buff.toString("base64");

    const ghInfo = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
            Authorization: `Basic ${base64auth}`,
        },
    }).then(res => res.json());

    console.log(ghInfo);

    const starCount = await fetch(`https://api.github-star-counter.workers.dev/user/${username}`).then(res =>
        res.json()
    );

    return res.status(200).json({
        followers: ghInfo.followers ?? 0,
        following: ghInfo.following ?? 0,
        stars: starCount.stars ?? 0,
        repos: ghInfo.public_repos ?? 0,
        avatar: ghInfo.avatar_url ?? "https://i.imgur.com/8eYnOFk.png",
        name: ghInfo.name ?? "Profile Not Found"
    });
}
