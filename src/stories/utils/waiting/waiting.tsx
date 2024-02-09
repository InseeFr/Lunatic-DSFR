import React from "react";
import { tss } from "tss-react/dsfr";
import "./waiting.scss";
import ReactComponent from "./preloader.svg";

function Logo() {
    return (
        <img alt="loading" className="hello">
            <ReactComponent />
        </img>
    );
}

function Waiting({ status = false, children }: { status: boolean; children: JSX.Element }) {
    const { classes } = useStyles();

    if (!status) {
        return;
    }

    return (
        <div className={classes.root}>
            <Logo />
            <div className={classes.content}>{children}</div>
        </div>
    );
}

const useStyles = tss.withName({ Waiting }).create({
    "root": {
        display: "block",
        position: "fixed",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(23, 59, 77, 0.8)",
        top: 0,
        "& img": {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "10%",
            marginTop: "120px",
        },
    },
    "content": {
        display: "block",
        width: "fit-content",
        marginLeft: "auto",
        marginRight: "auto",
    },
});

export default React.memo(Waiting);
