let VARIABLES = [];
let SELECTED_VARIABLE = null;
let SIGNIFICANT_FIGURES = 2;

function changeSignificantFigures() {
    SIGNIFICANT_FIGURES = Number(document.getElementById("selectSignificantFigures").value);
    loadVariables();
}

function getInfo() {
    let tab = document.getElementById("addTable");
    let NopInput = document.getElementById("NopInput");
    let NInput = document.getElementById("NInput");
    let vals = [];
    let uncs = []
    for (let i = 0; i < tab.rows.length; i++) {
        let val = Number(tab.rows[i].cells[0].children[0].value);
        let unc = Number(tab.rows[i].cells[1].children[0].value);
        vals.push(val);
        uncs.push(unc);
    }
    let mu = math.std(vals) / math.sqrt(vals.length);
    let Nop = (mu / math.max(uncs))**2;
    NopInput.setAttribute("value", Nop);
    NInput.setAttribute("value", vals.length);
}

function addRow(tab_id, data = [null, null]) {
    let tab = document.getElementById(tab_id);
    let row = tab.insertRow(-1);
    for (let i = 0; i < 2; i++) {
        let celVal = row.insertCell(i);
        celVal.setAttribute("class", "text-center");
        let inp = document.createElement("input");
        inp.setAttribute("type", "number");
        inp.setAttribute("class", "form-control");
        inp.setAttribute("placeholder", "0.0");
        inp.setAttribute("step", "1e-35");
        inp.setAttribute("value", data[i] === null || data[i] === undefined ? "" : data[i]);
        inp.setAttribute("required", "required")
        if (i == 1)
            inp.setAttribute("min", "1e-35");
        celVal.innerHTML = inp.outerHTML;
    }
}

function deleteRow(tab_id) {
    let tab = document.getElementById(tab_id);
    tab.deleteRow(-1);
}

function deleteAllRows(tab_id) {
    let tab = document.getElementById(tab_id);
    while (tab.rows.length > 0)
        tab.deleteRow(-1);
}

function highlightRow(row, tab, theVar) {
    if (row.className === "clickable-row") {
        for (let i = 0; i < tab.rows.length; i++) {
            tab.rows[i].setAttribute("class", "clickable-row");
        }
        row.setAttribute("class", "table-active");
        document.getElementById("editButton").setAttribute("data-bs-target", "#editModal");
        document.getElementById("deleteButton").setAttribute("data-bs-target", "#deleteModal");
        SELECTED_VARIABLE = theVar;
        document.getElementById("deleteForm").innerText = SELECTED_VARIABLE.name;
        document.getElementById("nameInputEdit").value = SELECTED_VARIABLE.name;
        deleteAllRows("editTable");
        for (let i = 0; i < SELECTED_VARIABLE.data.length; i++) {
            addRow("editTable", [SELECTED_VARIABLE.data[i][0], SELECTED_VARIABLE.data[i][1]]);
        }
        console.log(SELECTED_VARIABLE);
    } else {
        row.setAttribute("class", "clickable-row");
        document.getElementById("editButton").setAttribute("data-bs-target", "");
        document.getElementById("deleteButton").setAttribute("data-bs-target", "");
        deleteAllRows("editTable");
        SELECTED_VARIABLE = null;
    }
}

function loadVariable(theVar) {
    let tab = document.getElementById("variablesTable");
    let row = tab.insertRow(-1);
    row.setAttribute("class", "clickable-row");
    row.addEventListener("click", () => {
        highlightRow(row, tab, theVar);
    });
    let vl = [theVar["name"], theVar["value"], theVar["uncertainty"]];
    for (let i = 0; i < 3; i++) {
        let celVal = row.insertCell(i);
        celVal.setAttribute("class", "text-center");
        celVal.innerHTML = i === 0 ? vl[i] : vl[i].toPrecision(SIGNIFICANT_FIGURES);
    }
}

function loadVariables() {
    deleteAllRows("variablesTable");
    for (let i = 0; i < VARIABLES.length; i++) {
        loadVariable(VARIABLES[i]);
        document.getElementById("editButton").setAttribute("data-bs-target", "");
        document.getElementById("deleteButton").setAttribute("data-bs-target", "");
        SELECTED_VARIABLE = null;
        deleteAllRows("editTable");
    }
}

function validateName(name) {
    let names = [];
    for (let i = 0; i < VARIABLES.length; i++)
        names.push(VARIABLES[i].name);
    return !names.includes(name) && name.search("^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F][a-z0-9A-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F\uD835]*$") !== -1;
}

function validateAndFakeSubmit(event) {
    let form = document.getElementById('addForm');
    let addModal = bootstrap.Modal.getInstance(document.getElementById("addModal")); 
    let nameInput = document.getElementById("nameInputAdd");

    if (form.checkValidity() && validateName(nameInput.value)) {
        addVariable();
        event.preventDefault();
        addModal.hide();
        form.reset();
        deleteAllRows("addTable");
        addRow("addTable");
        return false;
    } else if (!validateName(nameInput.value)) {
        alert('"' + nameInput.value + '"is not a valid name');
        event.preventDefault();
        return false;
    } else {
        event.preventDefault();
        return false;
    }
}

function addVariable() {
    let name = document.getElementById("nameInputAdd").value;
    let tab = document.getElementById("addTable");
    let data = [];
    for (let i = 0; i < tab.rows.length; i++) {
        let val = Number(tab.rows[i].cells[0].children[0].value);
        let unc = Number(tab.rows[i].cells[1].children[0].value);
        data.push([val, unc]);
    }
    let [value, uncertainty] = computeValueAndUncertainty(data);
    let _id = VARIABLES.reduce((acc, value) => {
        return (acc = acc > value._id ? acc : value._id);
    }, 0) + 1;
    let note = "";
    let result = {
        name,
        data,
        value,
        uncertainty,
        note,
        _id
    };
    VARIABLES.push(result);
    loadVariables();
}

function editVariable(varId) {
    let name = document.getElementById("nameInputEdit").value;
    let tab = document.getElementById("editTable");
    let data = [];
    for (let i = 0; i < tab.rows.length; i++) {
        let val = Number(tab.rows[i].cells[0].children[0].value);
        let unc = Number(tab.rows[i].cells[1].children[0].value);
        data.push([val, unc]);
    }
    let [value, uncertainty] = computeValueAndUncertainty(data);
    let _id = varId;
    let note = "";
    let result = {
        name,
        data,
        value,
        uncertainty,
        note,
        _id
    };
    let i = 0;
    while (VARIABLES[i]._id !== varId) i++;
    VARIABLES[i] = result;
    loadVariables();
}

function deleteVariable(varId) {
    let i = 0;
    while (VARIABLES[i]._id !== varId) i++;
    VARIABLES.splice(i, 1);
    loadVariables();
    document.getElementById("editButton").setAttribute("data-bs-target", "");
    document.getElementById("deleteButton").setAttribute("data-bs-target", "");
    SELECTED_VARIABLE = null;
}

function computeValueAndUncertainty(data) {
    let val = null;
    let unc = null;
    if (data.length === 1) {
        val = data[0][0];
        unc = data[0][1];
    } else {
        val = [];
        unc = [];
        for (let i = 0; i < data.length; i++) {
            val.push(data[i][0]);
            unc.push(data[i][1]);
        }
        if (unc.every((item) => item === unc[0])) {
            unc = math.sqrt((math.std(val) / math.sqrt(val.length)) ** 2 + unc[0] ** 2);
            val = math.mean(val);
        } else {
            let temp_val = 0;
            let temp_unc = 0;
            for (let i = 0; i < val.length; i++) {
                temp_val += val[i] / unc[i] ** 2;
                temp_unc += 1 / unc[i] ** 2;
            }
            val = temp_val / temp_unc;
            unc = 1 / math.sqrt(temp_unc);
        }
    }
    return [val, unc];
}

function computePropagation() {
    let expr = document.getElementById("exprId").value;
    let scope = {};
    for (let i = 0; i < VARIABLES.length; i++) {
        scope[VARIABLES[i]["name"]] = VARIABLES[i]["value"];
        scope[VARIABLES[i]["name"] + "_uncertainty"] = VARIABLES[i]["uncertainty"];
    }
    let keys = Object.keys(scope);
    let val = math.evaluate(expr, scope);
    let uncExpr = "sqrt(";
    for (let i = 0; i < keys.length; i = i + 2) {
        if (i < keys.length - 2)
            uncExpr += "((" + math.derivative(expr, math.parse(keys[i])).toString() + ")*" + keys[i] + "_uncertainty)^2 + ";
        else
            uncExpr += "((" + math.derivative(expr, math.parse(keys[i])).toString() + ")*" + keys[i] + "_uncertainty)^2";
    }
    uncExpr += ")";
    let unc = math.evaluate(uncExpr, scope);
    return [val, unc];
}

function execute() {
    deleteAllRows("addTable");
    addRow("addTable", computePropagation());
}

function importSession() {
    let fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file");
    fileSelector.setAttribute("accept", ".json");
    fileSelector.addEventListener('input', (event) => {
        let file = event.target.files[0];
        let fh = new FileReader();
        fh.onload = function () {
            let variables_raw = fh.result;
            VARIABLES = JSON.parse(variables_raw);
            loadVariables();
        }
        fh.readAsText(file);
    });
    fileSelector.click();
}

function exportSession() {
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(VARIABLES));
    let downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", dataStr);
    downloadLink.setAttribute("download", "session.json");
    downloadLink.click();
}

