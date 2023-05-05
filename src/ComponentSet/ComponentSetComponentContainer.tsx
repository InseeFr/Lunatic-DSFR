import classnames from "classnames";

export function ComponentSetComponentContainer(props) {
    const { children, className } = props;
    console.log(className);
    return (
        <div
            className={classnames("lunatic-component-set-component", "fr-fieldset__element", className)}
        >
            {children}
        </div>
    );
}

export default ComponentSetComponentContainer;
