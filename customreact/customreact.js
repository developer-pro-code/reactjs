function customRender(reactElement, root){
    const element = document.createElement(reactElement.type)
    // element.setAttribute('href', reactElement.props.href)
    // element.setAttribute('target', reactElement.props.target)
    for (const prop in reactElement.props) {
        element.setAttribute(prop, reactElement.props['prop'])
    }
    element.innerHTML = reactElement.children
    root.appendChild(element)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'this is a custom generated react element'
}

const root = document.getElementById('root')

customRender(reactElement, root)