"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portal = void 0;
const react_1 = __importDefault(require("react"));
const react_dom_1 = require("react-dom");
const utils_1 = require("../../lib/utils");
const styles = {
    root: "portal-root",
    open: "portal-open fixed w-screen h-screen overflow-auto inset-0 z-[3000]",
};
const Portal = ({ children, open, id }) => {
    const [portal, setPortal] = react_1.default.useState(null);
    react_1.default.useEffect(() => {
        const div = document.createElement("div");
        div.className = (0, utils_1.cn)(styles.root);
        div.setAttribute("aria-hidden", "true");
        div.setAttribute("aria-labelledby", `${id}-title`);
        div.setAttribute("aria-describedby", `${id}-description`);
        div.setAttribute("role", "presentation");
        div.setAttribute("id", id);
        if (typeof window !== "undefined") {
            document.body.appendChild(div);
            setPortal(div);
        }
    }, [id]);
    react_1.default.useEffect(() => {
        if (!portal)
            return;
        const bodyClassList = document.body.classList;
        const elementClassList = portal.classList;
        const addOpenClassNames = styles.open.split(" ");
        if (open) {
            addOpenClassNames.forEach(className => {
                elementClassList.add(className);
            });
            portal.setAttribute("aria-hidden", "false");
            bodyClassList.add("overflow-hidden");
        }
        if (!open) {
            bodyClassList.remove("overflow-hidden");
            setTimeout(() => {
                addOpenClassNames.forEach(className => {
                    elementClassList.remove(className);
                });
                portal.setAttribute("aria-hidden", "true");
            }, 300);
        }
    }, [open, portal]);
    return portal ? (0, react_dom_1.createPortal)(children, portal, id) : null;
};
exports.Portal = Portal;
