

export function setTechnology(text) {
    console.log('text', text)
    return {
        type: "SET_TECHNOLOGY",
        tech: text
    };
}
