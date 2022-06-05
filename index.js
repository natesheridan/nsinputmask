// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<div class="card">
  <h2>Form Typechecker and Formatter</h2>
  <div class="row">
    <div class="col">
      <div class="form-group">
        <label>First Name</label>
        <input type="text">
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Surname</label>
        <input type="text">
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Email</label>
        <input type="text">
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Phone</label>
        <input type="text">
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Message</label>
        <textarea></textarea>
      </div>
    </div>

    <div class="col">
      <input type="submit" value="Submit">
    </div>
  </div>
</div`;


