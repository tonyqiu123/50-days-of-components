first day! lets start simple.

how i would create a button component that can be used in any project:
id first consider functionalities then the props.

FUNCTIONALITIES:
primary, secondary, success, destructive, cancel, disabled, and warning styled options.
loading... styling
allows devs to customize onError and onSuccess
full width or hug-content width

that already covers 99% of use cases. now onto props.

PROPS:
text: string
variant?: 'primary' | 'destructive' | 'cancel' | 'warning' | 'success';
isDisabled?: boolean
isFullWidth?: boolean
handleClick?: () => Promise<void>

BUILD DETAILS:
devs can customize onError and onSuccess simply by including the handling logic in the onClick function prop. (eg.
const async exampleOnClick() {
    try {
        await fetch(url)
        redirect user
    } catch(error) {
        console.err(error))
    }
}
loading styling is true while the button executes the prop function, then false once the function fails or passes