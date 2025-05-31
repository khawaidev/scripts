// ✅ CLEANED VERSION OF FRAMER BUNDLED SCRIPT
// - Removed Framer-specific bindings (EditorBar, hydration, telemetry, badge)
// - Retained dynamic route loading

import {
    $ as W,
    Aa as J,
    Ba as q,
    Ca as K,
    Ga as Q,
    La as $, // used for breakpoints
    M as x,
    N as C,
    O as y,
    P as d,
    R as A,
    T as M,
    U as H,
    V as U,
    W as N,
    Y as G,
    Z as F,
    d as B,
    f as o
} from "./chunk-FI5MRLVS.mjs";

import {
    b as g,
    c as t
} from "./chunk-A3IIQ6X3.mjs";

const le = "default" in y ? x : y;
const f = { createRoot: le.createRoot, hydrateRoot: le.hydrateRoot };
const createAppRoot = f.createRoot;

const routes = {
    augiA20Il: {
        elements: {},
        page: d(() => import("./t2newCi1kQKi54fi8LT30YncvnlUusLcRPwhLz7Gnfs.3E7MGQSE.mjs")),
        path: "/"
    },
    I2uU3XKoV: {
        page: d(() => import("./LkLSs15Wi5Ciw4UjgGwRqGNbKCtJ8VDTqgPmEQmrzSM.XXA3UZKQ.mjs")),
        path: "/404"
    },
    EuciTyF4J: {
        page: d(() => import("./EuciTyF4J-62LIU2SE.mjs"))
    }
};

const locales = [{ code: "en", id: "default", name: "English", slug: "" }];

const siteId = "650556264e5c15efc4902441cf0b32e83543756b2bc762abbeb91e6467993581";

async function loadPage({ routeId, pathVariables = {}, localeId = "default" }) {
    const preload = routes[routeId].page.preload();
    const componentTree = o(Q, {
        isWebsite: true,
        routeId,
        pathVariables,
        routes,
        framerSiteId: siteId,
        localeId,
        locales,
        siteCanonicalURL: "https://waitlista.framer.website"
    });

    const wrapped = o(q, { children: componentTree, value: { editorBarOnPageEditing: false, pauseOffscreen: true, replaceNestedLinks: true } });
    const app = o(J, { children: wrapped });
    const routed = o(M, { children: app, value: { routes: {} } });

    await preload;
    return routed;
}

function resolveRoute() {
    const pathname = decodeURIComponent(location.pathname);
    const { routeId, localeId, pathVariables } = G(routes, pathname, true, locales);
    return { routeId, localeId, pathVariables };
}

async function main() {
    const mountEl = document.getElementById("main");
    const { routeId, localeId, pathVariables } = resolveRoute();
    const componentTree = await loadPage({ routeId, localeId, pathVariables });
    createAppRoot(mountEl).render(componentTree);
}

main();
