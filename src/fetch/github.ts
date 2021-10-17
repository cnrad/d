export default async function fetchGithub(username: string) {
    const ghInfo = await fetch(`https://api.github.com/users/${username}`).then(res => res.json());
    const starCount = await fetch(`https://api.github-star-counter.workers.dev/user/${username}`).then(res =>
        res.json()
    );

    return JSON.stringify({
        followers: ghInfo.followers,
        following: ghInfo.following,
        stars: starCount.stars,
        repos: ghInfo.public_repos,
        avatar: ghInfo.avatar_url,
        name: ghInfo.name,
    });
}
