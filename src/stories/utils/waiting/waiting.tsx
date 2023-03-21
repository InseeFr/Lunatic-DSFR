import React from "react";
import "./waiting.scss";
import ReactComponent from "./preloader.svg";

function Logo() {
    return (
        <img alt="loading" className="hello">
            <ReactComponent />
        </img>
    );
}

function Waiting({ status, children }: { status: boolean; children: JSX.Element }) {
    if (status) {
        return (
            <div className="waiting">
                <Logo />
                <div className="content">{children}</div>
            </div>
        );
    }
    return null;
}

Waiting.defaultProps = {
    status: false,
};

export default React.memo(Waiting);
