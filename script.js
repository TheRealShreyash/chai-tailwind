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
  "chai-flex": { display: "flex" },
  "chai-grid": { display: "grid" },
  "chai-hidden": { display: "hidden" },
  "chai-block": { display: "block" },
  "chai-flex-col": { flexDirection: "column" },
  "chai-w-full": { width: "100%" },
  "chai-w-2": { width: "20px" },
  "chai-w-4": { width: "40px" },
  "chai-w-8": { width: "80px" },
  "chai-h-full": { height: "100%" },
  "chai-h-2": { height: "20px" },
  "chai-h-4": { height: "40px" },
  "chai-h-8": { height: "80px" },
  "chai-border-1": { border: "1px solid" },
  "chai-border-2": { border: "2px solid" },
  "chai-border-3": { border: "3px solid" },
  "chai-border-4": { border: "4px solid" },
  "chai-border-5": { border: "5px solid" },
  "chai-border-black": { borderColor: "black" },
  "chai-border-white": { borderColor: "white" },
  "chai-border-red": { borderColor: "red" },
  "chai-border-gray": { borderColor: "gray" },
  "chai-border-blue": { borderColor: "blue" },
  "chai-border-pink": { borderColor: "pink" },
  "chai-rounded-sm": { borderRadius: "2px" },
  "chai-rounded-md": { borderRadius: "8px" },
  "chai-rounded-lg": { borderRadius: "15px" },
  "chai-rounded-xl": { borderRadius: "20px" },
  "chai-gap-2": { gap: "2px" },
  "chai-gap-4": { gap: "4px" },
  "chai-gap-6": { gap: "6px" },
  "chai-gap-8": { gap: "8px" },
  "chai-gap-10": { gap: "10px" },
  "chai-text-center": { textAlign: "center" },
  "chai-font-bold": { fontWeight: "700" },
  "chai-cursor-pointer": { cursor: "pointer" },
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
