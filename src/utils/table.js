export function createTable (parameters) {
    const { tr , td } = parameters;

    let tdBody = ``;
    td.forEach(element => {
        tdBody += `<td>${element}</td>`
    });

    let trBody = ``;
    tr.forEach(element => {
        trBody += `<th class="text-left">${element}</th>`
    });

    const html = `
        <v-table theme="dark">

            <thead>
            <tr>
                ${trBody}
            </tr>
            </thead>

            <tbody>
            <tr>
                ${tdBody}
            </tr>
            </tbody>
            
        </v-table>
    `

    return html;
}