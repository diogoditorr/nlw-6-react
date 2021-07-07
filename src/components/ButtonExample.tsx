type ButtonExampleProps = {
    text?: string
}

export function ButtonExample(props: ButtonExampleProps) {
    return (
        <button>
            { props.text || "Clique aqui" }
        </button>
    );
}
