import { DocumentNode, FieldNode, InlineFragmentNode, SelectionNode, Kind, visit, } from "graphql";
const collectTypes = (obj, types) => {
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++)
            collectTypes(obj[i], types);
    }
    else if (typeof obj === "object" && obj !== null) {
        for (const key in obj) {
            if (key === "__typename" && typeof obj[key] === "string") {
                types[obj[key]] = 0;
            }
            else {
                collectTypes(obj[key], types);
            }
        }
    }
    return types;
};
export const collectTypesFromResponse = (response) => Object.keys(collectTypes(response, {}));
const formatNode = (node) => {
    if (node.selectionSet &&
        !node.selectionSet.selections.some((node) => node.kind === Kind.FIELD &&
            node.name.value === "__typename" &&
            !node.alias)) {
        let formattedNode = {
            ...node,
            selectionSet: {
                ...node.selectionSet,
                selections: [
                    ...node.selectionSet.selections,
                    {
                        kind: Kind.FIELD,
                        name: {
                            kind: Kind.NAME,
                            value: "__typename",
                        },
                    },
                ],
            },
        };
        return formattedNode;
    }
};
export const formatDocument = (node) => {
    let result = visit(node, {
        Field: formatNode,
        InlineFragment: formatNode,
    });
    return result;
};
