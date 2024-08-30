const { width } = useWindowSize();

export function useBreakpoints() {
  const md = computed(() => width.value >= 1400);
  const lg = computed(() => width.value >= 1600);
  const xl = computed(() => width.value >= 1800 - 16);

  class BreakpointsProxy {
    get md() { return md.value; }
    get lg() { return lg.value; }
    get xl() { return xl.value; }
  }

  return { md, lg, xl, current: new BreakpointsProxy() };
}