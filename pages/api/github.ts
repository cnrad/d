import { NextApiRequest, NextApiResponse } from "next";

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
    console.log(username);
    if (!username) return res.status(400).json({ error: "No username provided!" });

    const ghInfo = await fetch(`https://api.github.com/users/${username}`).then(res => res.json());
    const starCount = await fetch(`https://api.github-star-counter.workers.dev/user/${username}`).then(res =>
        res.json()
    );

    return res.status(200).json({
        followers: ghInfo.followers,
        following: ghInfo.following,
        stars: starCount.stars,
        repos: ghInfo.public_repos,
        avatar: ghInfo.avatar_url,
        name: ghInfo.name,
    });
}
