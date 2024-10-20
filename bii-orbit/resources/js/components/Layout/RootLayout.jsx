'use client'
import clsx from 'clsx'
import { Link } from "@inertiajs/react";
import {Container} from "./Container.jsx";
import {useTranslation} from "react-i18next";
import { usePathname } from 'next/navigation'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import {createContext, useContext, useEffect, useId, useRef, useState,} from 'react'
import Location from "./Navigation/Mobile/Location.jsx";

const RootLayoutContext = createContext(null)

function XIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="#00464B" aria-hidden="true" {...props}>
            <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
            <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
        </svg>
    )
}

function MenuIcon(props) {
    return (
        <svg viewBox="0 0 24 24"
             aria-hidden="true" {...props}>
            <path d="M2 6h20v2H2zM2 16h20v2H2z" />
        </svg>
    )
}

function Header({
                    panelId,
                    icon: Icon,
                    expanded,
                    onToggle,
                    toggleRef,
                    invert = false,
                    t
                }) {
    let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)

    return (
        <Container>
            <div className="flex items-center justify-between">
                <Link
                    aria-label="Home"
                    href={route('home')}
                    onMouseEnter={() => setLogoHovered(true)}
                    onMouseLeave={() => setLogoHovered(false)}
                >
                    <img
                        src="/images/logo/bii_logo.png"
                        className="w-[150px]"
                        alt={t('logo_alt')}
                    />
                </Link>
                <div className="flex items-center gap-x-8 md:hidden">
                    <button
                        ref={toggleRef}
                        type="button"
                        onClick={onToggle}
                        aria-expanded={expanded ? 'true' : 'false'}
                        aria-controls={panelId}
                        className={clsx(
                            'group -m-2.5 rounded-full p-2.5 transition',
                            invert ? 'hover:bg-white/10' : 'hover:bg-neutral-950/10',
                        )}
                        aria-label="Toggle navigation"
                    >
                        <Icon
                            className={clsx(
                                'h-6 w-6',
                                invert
                                    ? 'fill-[#00464B] group-hover:fill-neutral-200'
                                    : 'fill-neutral-950 group-hover:fill-neutral-700',
                            )}
                        />
                    </button>
                </div>
            </div>
        </Container>
    )
}

function NavigationRow({ children }) {
    return (
        <div className="even:mt-px sm:bg-neutral-950">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
            </Container>
        </div>
    )
}

function NavigationItem({ href, children }) {
    return (
        <Link
            href={href}
            className="group relative isolate -mx-6 bg-menu text-primary px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:pl-16"
        >
            {children}
            <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
        </Link>
    )
}

function Navigation() {
    return (
        <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
            <NavigationRow>
                <NavigationItem href="/work">Our Work</NavigationItem>
                <NavigationItem href="/about">About Us</NavigationItem>
            </NavigationRow>
            <NavigationRow>
                <NavigationItem href="/process">Our Process</NavigationItem>
                <NavigationItem href="/blog">Blog</NavigationItem>
            </NavigationRow>
        </nav>
    )
}

function RootLayoutInner({ children }) {
    let panelId = useId()
    let [expanded, setExpanded] = useState(false)
    let openRef = useRef(null)
    let closeRef = useRef(null)
    let navRef = useRef(null)
    let shouldReduceMotion = useReducedMotion()
    const { t } = useTranslation();

    useEffect(() => {
        function onClick(event) {
            if (
                event.target instanceof HTMLElement &&
                event.target.closest('a')?.href === window.location.href
            ) {
                setExpanded(false)
            }
        }

        window.addEventListener('click', onClick)

        return () => {
            window.removeEventListener('click', onClick)
        }
    }, [])

    return (
        <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
            <header>
                <div
                    className="absolute left-0 right-0 top-0 pt-4 z-40"
                    aria-hidden={expanded ? 'true' : undefined}
                    inert={expanded ? '' : undefined}
                >
                    <Header
                        t={t}
                        panelId={panelId}
                        icon={MenuIcon}
                        toggleRef={openRef}
                        expanded={expanded}
                        onToggle={() => {
                            setExpanded((expanded) => !expanded)
                            window.setTimeout(() =>
                                closeRef.current?.focus({ preventScroll: true }),
                            )
                        }}
                    />
                </div>

                <motion.div
                    layout
                    id={panelId}
                    style={{ height: expanded ? 'auto' : '0rem' }}
                    className="relative z-50 overflow-hidden bg-neutral-950"
                    aria-hidden={expanded ? undefined : 'true'}
                    inert={expanded ? undefined : ''}
                >
                    <motion.div layout className="bg-neutral-800">
                        <div
                            ref={navRef}
                            className="bg-menu pb-16 pt-4"
                        >
                            <Header
                                t={t}
                                invert
                                panelId={panelId}
                                icon={XIcon}
                                toggleRef={closeRef}
                                expanded={expanded}
                                onToggle={() => {
                                    setExpanded((expanded) => !expanded)
                                    window.setTimeout(() =>
                                        openRef.current?.focus({ preventScroll: true }),
                                    )
                                }}
                            />
                        </div>

                        <Navigation />

                        <Location
                            t={t}
                        />
                    </motion.div>
                </motion.div>
            </header>

            <motion.div
                layout
                className="relative flex flex-auto overflow-hidden bg-white shadow-md pt-6"
            >
                <motion.div
                    layout
                    className="relative isolate flex w-full flex-col pt-9"
                >
                </motion.div>
            </motion.div>

            <main className="flex-auto md:hidden md:w-full w-11/12 mx-auto pt-6 sm:pt-0">
                {children}
            </main>
        </MotionConfig>
    )
}

export function RootLayout({ children }) {
    let pathname = usePathname()
    let [logoHovered, setLogoHovered] = useState(false)

    return (
        <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
            <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
        </RootLayoutContext.Provider>
    )
}
