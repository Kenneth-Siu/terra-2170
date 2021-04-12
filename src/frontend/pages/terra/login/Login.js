import React from "react";
import "./Login.scss";
import TerraSymbol from "../../../../../data/terraSymbol.svg";
import GoogleLogo from "../../../../../data/googleIcon.svg";
import FacebookLogo from "../../../../../data/facebookIcon.svg";
import DiscordLogo from "../../../../../data/discordIcon.svg";
import GithubLogo from "../../../../../data/githubIcon.svg";
import loginSplash from "../../../../../data/loginSplash.jpg";

export default function Login() {
    return (
        <>
            <title>Log in · Terra 2170</title>
            <main className="login-page">
                <div className="background-image-container">
                    <img className="background-image" src={loginSplash} />
                </div>
                <div className="container">
                    <TerraSymbol className="terra-symbol" />
                    <h1>Hello! What should I call you?</h1>
                    <div className="login-buttons-container">
                        <a className="google login-button" href="/api/login/google">
                            <GoogleLogo />
                            Sign in with Google
                        </a>
                        <a className="facebook login-button" href="/api/login/facebook">
                            <FacebookLogo />
                            Sign in with Facebook
                        </a>
                        <a className="discord login-button" href="/api/login/discord">
                            <DiscordLogo />
                            Sign in with Discord
                        </a>
                        <a className="github login-button" href="/api/login/github">
                            <GithubLogo />
                            Sign in with GitHub
                        </a>
                    </div>
                    <p>
                        Why do you need to sign in? There are a number of reasons. One of the main reasons is that this
                        is an easy way to help make sure you're not a spam-bot. It also means you can easily recognise
                        who you're drafting with and save your drafts to come back to.
                    </p>
                    <p>
                        The only personal information I store is your display name as generated by the service provider
                        you choose to log in with. Your display name is publically visible. By logging in, you give your
                        consent for this information to be used in this way.
                    </p>
                    <p>
                        If you want me to delete your data, just let me know via Reddit, /u/frost_maze, or my email if
                        you know it.
                    </p>
                    <p>
                        This section of the website also uses cookies to store your login session and your preferences
                        on card sorting during any individual draft. I do not use the information for anything else. By
                        logging in, you give your consent for this information to be stored in cookies in this way.
                    </p>
                </div>
            </main>
        </>
    );
}
