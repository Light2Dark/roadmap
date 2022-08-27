import { useEffect, EffectCallback, DependencyList, useRef } from "react"

// THE 2 FUNCTIONS BELOW ARE SO THAT THEME PREFERENCES PERSISTS OVER MULTIPLE USER VISITS
const getThemePreferences = () => {
    // if user has dark theme preference on this website, use it
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        return true
    } else {
        return false
    }
}

// sets theme preference on this website, toggle used to ensure the correct standard is met
const toggleThemePreferences = () => {
    if (localStorage.theme === "dark") {
        localStorage.theme = "light"
    } else {
        localStorage.theme = "dark"
    }
}

// React hook that is similar to useEffect but does not run on initial render
const useNonInitialEffect = (effect: EffectCallback, deps?: DependencyList) => {
    const initialRender = useRef(true);

    useEffect(() => {
        //let effectReturns: void | (() => void | undefined) = () => {};
        let effectReturns: any = () => {};

        if (initialRender.current) {
            initialRender.current = false;
        } else {
            effectReturns = effect();
        }

        if (effectReturns && typeof effectReturns === "function") {
            return effectReturns;
        }
    }, deps);
};

export {getThemePreferences, toggleThemePreferences, useNonInitialEffect}