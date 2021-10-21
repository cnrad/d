export default async function fetchTwitter(username: string) {
    const twitterInfo = await fetch(`https://api.twitter.com/1.1/users/show.json?screen_name=${username}`, {
        headers: {
            Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
    }).then(res => res.json());

    return JSON.stringify({
        followers: twitterInfo.followers_count ?? 0,
        following: twitterInfo.friends_count ?? 0,
        name: twitterInfo.name ?? "Profile Not Found",
        avatar: twitterInfo.profile_image_url?.replace("_normal", "") ?? "https://i.imgur.com/8eYnOFk.png",
        tweets: twitterInfo.statuses_count ?? 0
    });
}
