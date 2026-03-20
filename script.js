const tailwindConfig = {
  "chai-p-2": { padding: "2px" },
  "chai-p-4": { padding: "4px" },
  "chai-p-8": { padding: "8px" },
  "chai-p-10": { padding: "10px" },
  "chai-text-red": { color: "red" },
  "chai-text-black": { color: "black" },
  "chai-text-white": { color: "white" },
  "chai-bg-black": { backgroundColor: "black" },
  "chai-bg-red": { backgroundColor: "red" },
  "chai-bg-pink": { backgroundColor: "pink" },
  "chai-text-sm": { fontSize: "20px" },
  "chai-text-md": { fontSize: "30px" },
  "chai-text-lg": { fontSize: "50px" },
  "chai-text-xl": { fontSize: "60px" },
};

const para = document.querySelector(".paragraph");
const classes = [...para.classList];

classes.forEach((c) => {
  if (tailwindConfig[c]) {
    const styles = tailwindConfig[c];
    Object.assign(para.style, styles);
    console.log(`[CHAI-TAILWIND] applied ${JSON.stringify(styles)}`);
    para.classList.remove(c);
  }
});
