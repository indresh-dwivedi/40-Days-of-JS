const user = {
    name: "Indresh",
    clicks: 0,
    handleClick: function () {
        document.getElementById("clickBtn").addEventListener("click", () => {
            this.clicks++;
            console.log(`User ${this.name} clicked ${this.clicks} times`);
        });
    }
};

user.handleClick();
