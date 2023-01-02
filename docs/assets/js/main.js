let SELECTED_VARIABLE = null;
let SIGNIFICANT_FIGURES = 5;

  const fileSelector = document.getElementById('file-selector');
  fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
      file = fileList[0];
  });

function changeSF() {
    SIGNIFICANT_FIGURES = Number(document.getElementById("selectSignificantFigures").value);
    loadVariables(variables);
}

function addRow(tab_id, data=[null, null]) {
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
     inp.setAttribute("value", data[i]);
     inp.setAttribute("required", "required");
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
        document.getElementById("deleteForm").innerText =  SELECTED_VARIABLE.name;
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
  row.style.cursor = "pointer";
  row.setAttribute("class", "clickable-row");
  row.addEventListener("click" , () => {
      highlightRow(row, tab, theVar);
  }); 
  let vl = [theVar["name"], theVar["value"], theVar["uncertainty"]];
  for (let i = 0; i < 3; i++) {
     let celVal = row.insertCell(i);
     celVal.setAttribute("class", "text-center");
     celVal.innerHTML = i === 0 ? vl[i] : vl[i].toPrecision(SIGNIFICANT_FIGURES);
  }
}

function loadVariables(theVars) {
  deleteAllRows("variablesTable");
  for (let i = 0; i < theVars.length; i++) {
      loadVariable(theVars[i]);
      document.getElementById("editButton").setAttribute("data-bs-target", "");
      document.getElementById("deleteButton").setAttribute("data-bs-target", "");
      SELECTED_VARIABLE = null;
      deleteAllRows("editTable");
  }
}

function addVariable() {
    let name = document.getElementById("nameInputAdd").value;
    let tab = document.getElementById("addTable");
    let data = [];
    for (let i = 0; i < tab.rows.length; i++) {
        let val = Number(tab.rows[i].cells[0].children[0].value)
        let unc = Number(tab.rows[i].cells[1].children[0].value)
        data.push([val, unc]);
    }
    [value, uncertainty] = computeValueAndUncertainty(data);
    let _id = variables.length + 1;
    let note = "";
    let result = {name, data, value, uncertainty, note, _id}
    variables.push(result);
    loadVariables(variables);
}

function editVariable(varId) {
    let name = document.getElementById("nameInputEdit").value;
    let tab = document.getElementById("editTable");
    let data = [];
    for (let i = 0; i < tab.rows.length; i++) {
        let val = Number(tab.rows[i].cells[0].children[0].value)
        let unc = Number(tab.rows[i].cells[1].children[0].value)
        data.push([val, unc]);
    }
    [value, uncertainty] = computeValueAndUncertainty(data);
    let _id = varId;
    let note = "";
    let result = {name, data, value, uncertainty, note, _id}
    let i = 0;
    while (variables[i]._id !== varId) i++;
    variables[i] = result;
    loadVariables(variables);
}

function deleteVariable(varId, theVars) {
  let i = 0;
  while (theVars[i]._id !== varId) i++;
  theVars.splice(i, 1);
  loadVariables(theVars);
  document.getElementById("editButton").setAttribute("data-bs-target", "");
  document.getElementById("deleteButton").setAttribute("data-bs-target", "");
  SELECTED_VARIABLE = null;
}

function computeValueAndUncertainty(data) {
    let val = [];
    let unc = [];
    for (let i = 0; i < data.length; i++) {
        val.push(data[i][0]);
        unc.push(data[i][1]);
    }
    unc = math.sqrt((math.std(val)/math.sqrt(val.length))**2 + math.mean(unc)**2);
    val = math.mean(val);
    return [val, unc]
}

function computePropagation() {
    let expr = document.getElementById("exprId").value;
    let scope = {};
    for (let i = 0; i < variables.length; i++) {
        scope[variables[i]["name"]] = variables[i]["value"]
        scope[variables[i]["name"] + "_uncertainty"] = variables[i]["uncertainty"]
    }
    let keys = Object.keys(scope);
    let val = math.evaluate(expr, scope)
    let uncExpr = "sqrt("
    for (let i = 0; i < keys.length; i=i+2) {
        if (i < keys.length-2)
            uncExpr += "((" + math.derivative(expr, keys[i]).toString() + ")*" + keys[i] + "_uncertainty)^2 + ";
        else
            uncExpr += "((" + math.derivative(expr, keys[i]).toString() + ")*" + keys[i] + "_uncertainty)^2";
    }
    uncExpr += ")"
    let unc = math.evaluate(uncExpr, scope);
    return [val, unc];
}

function execute() {
    deleteAllRows("addTable");
    addRow("addTable", computePropagation());
}
function importSession() {
    let fr = new FileReader();
    fr.onload=function(){variables_raw = fr.result
    variables = JSON.parse(variables_raw);
    loadVariables(variables);}
    fr.readAsText(file);
}

function exportSession() {
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(variables));
    let dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", "session.json");
    dlAnchorElem.click();
}


