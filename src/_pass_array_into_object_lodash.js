const colors = [{ id: 'green' }, { id: 'yellow' }, { id: 'blue' }];

_.mapKeys(colors, 'id');

// {
//     "green": { "id": "green" },
//     "yellow": { "id": "yellow" },
//     "blue": { "id": "blue" }
// }
