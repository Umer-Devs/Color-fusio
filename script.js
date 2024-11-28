let btn = document.getElementById("btn");
let main = document.getElementById("main");

let work = () => {
    for (let i = 1; i <= 32; i++) {
        let num = Math.floor(Math.random() * 16777215);
        let color = "#" + num.toString(16);

        let div = document.createElement("div");
        div.classList.add("h-[200px]", "w-[200px]", "rounded-md");

        div.innerHTML = `
            <div class="w-full h-[70%] bg-[${color}] rounded-md"></div>
            <div class="w-full h-[30%] flex items-center justify-between rounded-md">
                <p class="font-semibold text-lg">${color}</p>
                <img class="code h-[20px] w-[25px]" src="./copy-link-stroke-rounded.svg" alt="" title="copy">
            </div>
        `;

        
        div.querySelector(".code").addEventListener("click", () => {
            navigator.clipboard.writeText(color).then(() => {
                alert("Color copied to clipboard: " + color);
            });
        });

        main.appendChild(div);
    }
};

btn.addEventListener("click", () => {
    main.innerHTML = "";
    work();
});

work();
