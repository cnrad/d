// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    followers: string;
    stars: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const ghInfo = await fetch("https://api.github.com/users/cnrad").then(res => res.json());
    const starCount = await fetch("https://api.github-star-counter.workers.dev/user/cnrad").then(res => res.json());

    let followerCount = ghInfo.followers;

    res.status(200).json({ followers: followerCount, stars: starCount.stars });
}
