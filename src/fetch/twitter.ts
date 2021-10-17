export default async function fetchTwitter(username: string) {
    const twitterInfo = await fetch(
        `https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=${username}`
    ).then(res => res.json());

    return JSON.stringify({ followers: twitterInfo[0].followers_count, name: twitterInfo[0].name });
}
