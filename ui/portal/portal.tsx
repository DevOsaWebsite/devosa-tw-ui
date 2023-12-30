"use client";

import React from "react";
import { createPortal } from "react-dom";

import { cn } from "../../lib/utils";

const styles = {
	root: "portal-root",
	open: "portal-open fixed w-screen h-screen overflow-auto inset-0 z-[3000]",
};

export type TPortalProps = React.HTMLAttributes<HTMLDivElement> & {
	id: string;
	open: boolean;
};

export const Portal = ({ children, open, id }: TPortalProps) => {
	const [portal, setPortal] = React.useState<HTMLDivElement | null>(null);

	React.useEffect(() => {
		const div = document.createElement("div");

		div.className = cn(styles.root);
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

	React.useEffect(() => {
		if (!portal) return;

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

	return portal ? createPortal(children, portal, id) : null;
};
