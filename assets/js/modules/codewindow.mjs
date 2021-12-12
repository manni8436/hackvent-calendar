
export class CodeWindow {

  constructor(challenges, pages) {
    this._challenges = challenges

    this._wrapper = document.getElementById("code-window-wrapper");

    this._pages = {
      challengePage: document.getElementById("challenge-content"),
      outputPage: document.getElementById("output-content"),
      codePage: document.getElementById("code-content")
    };

    this._elements = {
      title: document.getElementById("challenge-title"),
      description: document.getElementById("challenge-description"),
      codePane: document.getElementById("code-pane"),
      output: document.getElementById("code-output")
    }

    // Setup code editor
    this._editor = ace.edit("code-pane");
    //this._editor.setTheme("ace/theme/monokai");
    this._editor.session.setMode("ace/mode/javascript");


    // Bind methods that may be used as callbacks
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.output = this.output.bind(this);
    this.submitCode = this.submitCode.bind(this);
  }

  _hideAllPages() {
    for (const elem in this._pages) {
      this._pages[elem].classList.remove("show");
    }
  }

  show() {
    // Prevent body from scrolling
    document.body.classList.add("code");
    // Add content to code window elements
    this._elements.title.innerText = this._challenges.challenge.title;
    this._elements.description.innerText = this._challenges.challenge.description;
    // Show the initial screen
    this._wrapper.classList.add("show");
    this.showPage("challenge");
  }

  showPage(page) {
    // Hide all pages
    this._hideAllPages();
    // Show the requested page
    this._pages[page + "Page"].classList.add("show");
    // Editor component can only be updated when shown. Should be updated to save user input
    if (page === "code") this._editor.setValue(this._challenges.challenge.initial);
  }

  close() {
    this._editor.setValue("");
    // Let the body scroll again
    document.body.classList.remove("code");
    this._wrapper.classList.remove("show");
    // Hide all the page wrappers
    this._hideAllPages();
    // Clear the challenge information
    this._elements.title.innerText = "";
    this._elements.description.innerText = "";
    this._elements.output.value = "";
  }

  loadChallenge(day) {
    this._challenges.loadChallenge(day, this.show, this.close);
  }

  submitCode() {
    this.showPage("output");
    this._elements.output.value = "";
    const code = this._editor.getValue();

    const success = this._challenges.evaluate(code, this.output);
    if (success) this.output("\nAll tests run: Challenge complete!");
    else this.output("\nChallenge failed!");
  }

  output(msg) {
    this._elements.output.value = (
      this._elements.output.value + msg
    );
  }
}
