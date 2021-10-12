type Data = {
    followers: string;
};

export default async function fetchTwitter() {
    const twitterInfo = await fetch(
        "https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=notcnrad"
    ).then(res => res.json());

    return JSON.stringify({ followers: twitterInfo[0].followers_count });
}
