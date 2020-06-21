export const config = {
  spotify: {
    authorizationURL: "https://accounts.spotify.com/authorize",
    clientId: "5fb68c91edc442f996d9345890ce03a5",
    redirectUrl: `${window.location.origin}/authorize`,
    webAPI: "https://api.spotify.com/v1",
    scopes: ["user-read-email", "user-read-private", "streaming"],
  },
};

