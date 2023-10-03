document.addEventListener("mousemove", (event)=>{
    const x = event.clientX + "px";
    const y = event.clientY + "px";
    document.querySelector(".blend-layer img").style.setProperty("--x", x);
    document.querySelector(".blend-layer img").style.setProperty("--y", y);
});

//# sourceMappingURL=index.7c0ccee6.js.map
