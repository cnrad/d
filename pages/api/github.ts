import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    followers: string;
    following: string;
    stars: string;
    repos: string;
    avatar: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const ghInfo = await fetch("https://api.github.com/users/cnrad").then(res => res.json());
    const starCount = await fetch("https://api.github-star-counter.workers.dev/user/cnrad").then(res => res.json());

    return res.status(200).json({
        followers: ghInfo.followers,
        following: ghInfo.following,
        stars: starCount.stars,
        repos: ghInfo.public_repos,
        avatar: ghInfo.avatar_url,
    });
}
