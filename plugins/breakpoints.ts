
export default defineNuxtPlugin(() => {
    const { current } = useBreakpoints();
    return { provide: { breakpoints: current } };
});
