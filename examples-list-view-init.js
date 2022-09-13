const exampleView = document.querySelector("#example-view");
    
const switchView = (path) => {
    console.log(exampleView);
    exampleView.src = path;
}

const createListNode = (name, value) => {
    const node = document.createElement("label");
    node.className = "list-node";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "examples";
    radio.onchange = () => {
        switchView(`./examples/${name}/index.html`);
    }
    node.appendChild(radio);

    const div = document.createElement("div");
    node.appendChild(div);

    const divName = document.createElement("div");
    divName.innerText = name;
    div.appendChild(divName);

    const divDescr = document.createElement("div");
    divDescr.innerText = value.descr;
    div.appendChild(divDescr);

    return node;
}

const createListNodeSplit = ()=> {
    const divnodeSplit = document.createElement("div");
    divnodeSplit.className = "list-node-split";
    return divnodeSplit;
}

const initList = (examplesList) => {
    const list = document.querySelector("#list")
    list.appendChild(createListNodeSplit());
    for (const key in examplesList) {
        list.appendChild(createListNode(key, examplesList[key]));
        list.appendChild(createListNodeSplit());
    }
}

initList(examplesList);
