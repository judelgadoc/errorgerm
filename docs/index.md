---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<!-- Add your site or application content here -->
<div class="container-fluid">
  <h1>Propagation of Uncertainty Calculator</h1>
  <button type="button" class="btn btn-primary" onclick="importSession()">Import</button>
  <button type="button" class="btn btn-primary" onclick="exportSession()">Export</button>
  <br>
  <br>
  <h2>Variables</h2>
  <div class="row no-gutters">
    <div class="col-12 col-sm text-left">
      <button type="button" id="addButton" class="btn" data-bs-toggle="modal" data-bs-target="#addModal"><img src="{{ '/assets/images/add.svg' | relative_url }}" title="Add new variable" alt="a" width="20" height="20"></button>
      <button type="button" id="editButton" class="btn" data-bs-toggle="modal" data-bs-target=""><img src="{{ '/assets/images/edit.svg' | relative_url }}" title="Edit selected variable" alt="E" width="20" height="20"></button>
      <button type="button" id="deleteButton" class="btn" data-bs-toggle="modal" data-bs-target=""><img src="{{ '/assets/images/delete.svg' | relative_url }}" title="Delete selected variable" alt="D" width="20" height="20"></button>
    </div>
    <div class="col-md-6 hidden-lg-down"></div>
    <div class="col-12 col-sm">
      <div class="float-lg-right">
        <label for="selectSignificantFigures">Significant figures:</label>
        <select class="form-select" aria-label="Default select example" name="sf" onchange="changeSignificantFigures()" id="selectSignificantFigures">
          <option>1</option>
          <option selected>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
        </select>
      </div>
    </div>
  </div>
  <div class="table-wrapper">
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th class="text-center">Name</th>
          <th class="text-center">Value</th>
          <th class="text-center">Uncertainty</th>
        </tr>
      </thead>
      <tbody id="variablesTable">
      </tbody>
    </table>
  </div>

  <h2>Operation</h2>
  <div class="row">
    <div class="col-12 col-md-9">
      <input class="form-control" id="exprId" type="text" name="expre" placeholder="Mathematical expression" required>
    </div>
    <div class="col-12 col-md-3">
      <button type="button" id="excButton" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal" onclick="execute()"  style="width: 100%">Execute</button>
    </div>
  </div>
</div>


<!-- Modal -->
<div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title fs-5" id="exampleModalLabel">Add new variable</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form class="needs-validation" id="addForm" onsubmit="validateAndFakeSubmit(event)">
      <div class="modal-body">
        <label for="nameInputAdd">Name</label>
        <input type="text" class="form-control" id="nameInputAdd" placeholder="Name" name="name" required>
        <img src="{{ '/assets/images/add.svg' | relative_url }}" title="Add row" alt="A" width="20" height="20" onclick="addRow('addTable')" style="cursor: pointer">
        <img src="{{ '/assets/images/minus.svg' | relative_url }}" title="Delete row" alt="D" width="20" height="20" onclick="deleteRow('addTable')" style="cursor: pointer">
        <img src="{{ '/assets/images/info.svg' | relative_url }}" title="Info" alt="I" width="20" height="20" data-bs-toggle="modal" data-bs-target="#infoModal" onclick="getInfo()" style="cursor: pointer">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th class="text-center">Value</th>
                <th class="text-center">Uncertainty</th>
              </tr>
            </thead>
            <tbody id="addTable">
              <tr>
                <td class="text-center"><input type="number" class="form-control" placeholder="0.0" step="1e-15" required></td>
                <td class="text-center"><input type="number" class="form-control" placeholder="0.0" step="1e-15" min="1e-35" required></td>
              </tr>
            </tbody>
          </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
      </form>
    </div>
  </div>
</div>


<div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title fs-5" id="exampleModalLabel">Info</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label for="NopInput">\( N_{op} \)</label>
        <input type="number" class="form-control" id="NopInput" placeholder="0" name="NopInput" readonly>
        <label for="NInput">\( N \)</label>
        <input type="number" class="form-control" id="NInput" placeholder="0" name="NInput" readonly>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title fs-5" id="exampleModalLabel">Edit variable</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label for="nameInputAdd">Name</label>
        <input type="text" class="form-control" id="nameInputEdit" placeholder="Name" name="name" required>
        <img src="{{ '/assets/images/add.svg' | relative_url }}" title="Add row" alt="A" width="20" height="20" onclick="addRow('editTable')" style="cursor: pointer">
        <img src="{{ '/assets/images/minus.svg' | relative_url }}" title="Delete row" alt="D" width="20" height="20" onclick="deleteRow('editTable')" style="cursor: pointer">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th class="text-center">Value</th>
                <th class="text-center">Uncertainty</th>
              </tr>
            </thead>
            <tbody id="editTable">
              <tr>
                <td class="text-center"><input type="number" class="form-control" placeholder="0.0" step="1e-15" required></td>
                <td class="text-center"><input type="number" class="form-control" placeholder="0.0" step="1e-15" required></td>
              </tr>
            </tbody>
          </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="editVariable(SELECTED_VARIABLE._id)">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title fs-5" id="exampleModalLabel">Delete variable</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Are you sure you want to delete variable "<span id="deleteForm">test</span>"?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="deleteVariable(SELECTED_VARIABLE._id)">Yes</button>
      </div>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/math.min.js' | relative_url }}"></script>
<script src="{{ '/assets/js/plugins.js' | relative_url }}"></script>
<script src="{{ '/assets/js/main.js' | relative_url }}"></script>

