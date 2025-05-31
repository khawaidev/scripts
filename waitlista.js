import {
    $ as W,
    Aa as J,
    Ba as q,
    Ca as K,
    Ga as Q,
    La as $,
    M as x,
    N as C,
    O as y,
    P as d,
    Q as z,
    R as A,
    T as M,
    U as H,
    V as U,
    W as N,
    X,
    Y as G,
    Z as F,
    _a as ee,
    ba as Y,
    d as B,
    f as o,
    i as O,
    j as S,
    k as R,
    l as L,
    n as T,
    s as D,
    sa as Z,
    t as V,
    wa as j
} from "./chunk-FI5MRLVS.mjs";
import "./chunk-HZL4YIMB.mjs";
import {
    b as g,
    c as t
} from "./chunk-A3IIQ6X3.mjs";
var le = "default" in y ? x : y,
    f = {},
    te = le;
f.createRoot = te.createRoot;
f.hydrateRoot = te.hydrateRoot;
var b = f.createRoot,
    re = f.hydrateRoot;
var u = {
        augiA20Il: {
            elements: {
                AUbGYwpg1: "hero",
                FahyXcYcI: "faq",
                HRF60kacA: "testimonials",
                ldf1FnL81: "advantages",
                MAot3Xjy5: "milestones",
                o1VbzXnw5: "cta",
                s16yyZxws: "partners",
                ZoH46eB_R: "integrations"
            },
            page: d(() => import("./t2newCi1kQKi54fi8LT30YncvnlUusLcRPwhLz7Gnfs.3E7MGQSE.mjs")),
            path: "/"
        },
        I2uU3XKoV: {
            elements: {},
            page: d(() => import("./LkLSs15Wi5Ciw4UjgGwRqGNbKCtJ8VDTqgPmEQmrzSM.XXA3UZKQ.mjs")),
            path: "/404"
        },
        EuciTyF4J: {
            page: d(() => import("./EuciTyF4J-62LIU2SE.mjs"))
        }
    },
    E = [{
        code: "en",
        id: "default",
        name: "English",
        slug: ""
    }],
    v = {},
    oe = "650556264e5c15efc4902441cf0b32e83543756b2bc762abbeb91e6467993581";
async function de({
    routeId: n,
    pathVariables: l,
    localeId: m
}) {
    let e = u[n].page.preload(),
        s = o(Q, {
            isWebsite: !0,
            routeId: n,
            pathVariables: l,
            routes: u,
            collectionUtils: v,
            framerSiteId: oe,
            notFoundPage: d(() => import("./LkLSs15Wi5Ciw4UjgGwRqGNbKCtJ8VDTqgPmEQmrzSM.XXA3UZKQ.mjs")),
            isReducedMotion: void 0,
            localeId: m,
            locales: E,
            preserveQueryParams: void 0,
            siteCanonicalURL: "https://waitlista.framer.website",
            EditorBar: typeof t > "u" ? void 0 : (() => {
                if (!/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(g.userAgent)) return d(async () => {
                    let {
                        createEditorBar: r
                    } = await import("https://edit.framer.com/init.mjs");
                    return {
                        default: r({
                            dependencies: {
                                __version: 1,
                                framer: {
                                    useCurrentRoute: A,
                                    useLocaleInfo: H,
                                    useRouter: z
                                },
                                react: {
                                    createElement: o,
                                    memo: S,
                                    useCallback: L,
                                    useEffect: T,
                                    useRef: D,
                                    useState: V
                                },
                                "react-dom": {
                                    createPortal: C
                                }
                            }
                        })
                    }
                })
            })()
        }),
        c = o(q, {
            children: s,
            value: {
                editorBarOnPageEditing: !1,
                pauseOffscreen: !0,
                replaceNestedLinks: !0
            }
        }),
        a = o(J, {
            children: c
        }),
        p = o(M, {
            children: a,
            value: {
                routes: {}
            }
        });
    return await e, p
}
var I = typeof document < "u";
if (I) {
    t.__framer_importFromPackage = (l, m) => () => o(W, {
        error: 'Package component not supported: "' + m + '" in "' + l + '"'
    }), t.process = {
        ...t.process,
        env: {
            ...t.process ? t.process.env : void 0,
            NODE_ENV: "production"
        }
    }, t.__framer_events = t.__framer_events || [], Y();
    let n = document.getElementById("main");
    "framerHydrateV2" in n.dataset ? ae(!0, n) : ae(!1, n)
}

function ue() {
    I && t.__framer_events.push(arguments)
}
async function ae(n, l) {
    function m(e, s, c = !0) {
        if (e.caught || t.__framer_hadFatalError) return;
        let a = s?.componentStack;
        if (c) {
            if (console.warn(`Recoverable error has happened. Please check any custom code or code overrides to fix server/client mismatches:
`, e, a), Math.random() > .01) return
        } else console.error(`Fatal crash has happened. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/:
`, e, a);
        ue(c ? "published_site_load_recoverable_error" : "published_site_load_error", {
            message: String(e),
            componentStack: a,
            stack: a ? void 0 : e instanceof Error && typeof e.stack == "string" ? e.stack : null
        })
    }
    try {
        let e, s, c, a;
        if (n) {
            let r = JSON.parse(l.dataset.framerHydrateV2);
            e = r.routeId, s = r.localeId, c = r.pathVariables, a = r.breakpoints, e = F(u, e)
        } else {
            F(u, void 0);
            let r = G(u, decodeURIComponent(location.pathname), !0, E);
            e = r.routeId, s = r.localeId, c = r.pathVariables
        }
        let p = de({
            routeId: e,
            localeId: s,
            pathVariables: c
        });
        typeof t < "u" && (async () => {
            let r = u[e],
                ne = "default",
                h = E.find(({
                    id: i
                }) => s ? i === s : i === ne).code,
                w = null;
            if (r?.collectionId && v) {
                let i = await v[r.collectionId]?.(),
                    [P] = Object.values(c);
                i && typeof P == "string" && (w = await i.getRecordIdBySlug(P, h || void 0) ?? null)
            }
            let k = Intl.DateTimeFormat().resolvedOptions(),
                se = k.timeZone,
                ce = k.locale;
            await new Promise(i => {
                document.prerendering ? document.addEventListener("prerenderingchange", i, {
                    once: !0
                }) : i()
            }), t.__framer_events.push(["published_site_pageview", {
                framerSiteId: oe ?? null,
                routePath: r?.path || "/",
                collectionItemId: w,
                framerLocale: h || null,
                webPageId: r?.abTestingVariantId ?? e,
                abTestId: r?.abTestId,
                referrer: document.referrer || null,
                url: t.location.href,
                hostname: t.location.hostname || null,
                pathname: t.location.pathname || null,
                hash: t.location.hash || null,
                search: t.location.search || null,
                timezone: se,
                locale: ce
            }, "eager"]), await K(), document.dispatchEvent(new CustomEvent("framer:pageview", {
                detail: {
                    framerLocale: h || null
                }
            }))
        })();
        let _ = await p;
        n ? (ee("framer-rewrite-breakpoints", () => {
            $(a), t.__framer_onRewriteBreakpoints?.(a)
        }), R(() => {
            X(), N(), U(), re(l, _, {
                onRecoverableError: m
            })
        })) : b(l, {
            onRecoverableError: m
        }).render(_)
    } catch (e) {
        throw m(e, void 0, !1), e
    }
}(function() {
    I && R(() => {
        b(document.getElementById("__framer-badge-container")).render(o(B, {}, o(Z(j), {
            className: "__framer-badge",
            __framer__threshold: .5,
            __framer__animateOnce: !0,
            __framer__opacity: 0,
            __framer__targetOpacity: 1,
            __framer__rotate: 0,
            __framer__x: 0,
            __framer__y: 10,
            __framer__scale: 1,
            __framer__transition: {
                type: "spring",
                ease: [.44, 0, .56, 1],
                duration: .3,
                delay: 1,
                stiffness: 350,
                damping: 40,
                mass: 1.5
            },
            __framer__rotateX: 0,
            __framer__rotateY: 0,
            __framer__perspective: 1200
        }, o(O(() => import("./PX9hIOIVM-HXGT6V44.mjs"))))))
    })
})();
export {
    de as getPageRoot
};
//# sourceMappingURL=script_main.67VIXKWV.mjs.map
