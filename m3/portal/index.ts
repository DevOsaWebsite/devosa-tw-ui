import dynamic from "next/dynamic";

export const Portal = dynamic(() => import("./portal").then(mod => mod.Portal));
