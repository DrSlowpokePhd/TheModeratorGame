class Posts {
    constructor() {
        this.script;
        this.request = new XMLHttpRequest();
        this.dialogue = this.request.open("GET", "posts.json", true);
        this.request.responseType = 'json';
        this.request.setRequestHeader('Cache-Control', 'no-cache');
        this.request.send();
        this.request.onload = () => {
            this.script = this.request.response;
        }
    }
}
