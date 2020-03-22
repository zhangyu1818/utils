type Easings =
  | "linear"
  | "easeInQuad"
  | "easeOutQuad"
  | "easeInOutQuad"
  | "easeInCubic"
  | "easeOutCubic"
  | "easeInOutCubic"
  | "easeInQuart"
  | "easeOutQuart"
  | "easeInOutQuart"
  | "easeInQuint"
  | "easeOutQuint"
  | "easeInOutQuint";

type ExtractFuncType<T> = (value: string) => T;
type ElementsType<T extends Element = Element> = string | T[] | T;

type AnimateValue = string | number;

type CSSStyle = {
  [P in keyof CSSStyleDeclaration]?: [AnimateValue, AnimateValue];
};

type Keyframes = {
  property: string;
  strings: string[];
  numbers: number[][];
};

type assignStyles = {
  [key: string]: string;
};

type rAFType<T> = {
  all: Set<T>;
  add: (obj: T) => void;
};

type EasingFunc = {
  [key in Easings]: (t: number) => number;
};

interface BaseOptions {
  duration: number;
  easing?: Easings;
}

interface Options extends CSSStyle, BaseOptions {
  elements: ElementsType;
}

interface AnimationObject extends BaseOptions {
  element: Element;
  keyframes: Keyframes[];
  startTime: number;
  elapsedTime: number;
  easing: Easings;
  completed: () => void;
}

type RecomposeValue = (
  values: number[][],
  strings: string[],
  easing: number
) => string;

const easings: EasingFunc = {
  linear: t => t,
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInCubic: t => t * t * t,
  easeOutCubic: t => --t * t * t + 1,
  easeInOutCubic: t =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => 1 - --t * t * t * t,
  easeInOutQuart: t => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
  easeInQuint: t => t * t * t * t * t,
  easeOutQuint: t => 1 + --t * t * t * t * t,
  easeInOutQuint: t =>
    t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
};

// 提取匹配正则，匹配正负整数和小数
const extractRegExp = /-?\d*\.?\d+/g;
// 分割字符串，如"translate(100px)" => ["translate(", "px)"]
const extractStrings: ExtractFuncType<string[]> = value =>
  value.split(extractRegExp);
// 分割数字
const extractNumbers: ExtractFuncType<number[]> = value =>
  value.match(extractRegExp)!.map(Number);

// 数组值转string
const stringFormat = (value: AnimateValue[]) => value.map(String);

// 获取elements
const getElements = (elements: ElementsType) => {
  if (Array.isArray(elements)) return elements;
  else if (typeof elements === "string")
    return Array.from(document.querySelectorAll(elements));
  else if (elements && elements.nodeType !== undefined) return [elements];
  console.warn("elements is invalid");
  return [];
};

// 创建Keyframes
const createAnimationKeyframes = (keyframes: CSSStyle): Keyframes[] =>
  Object.entries(keyframes).map(([property, values]) => {
    if (values === undefined) throw new Error("property should have a value");
    const stringValues = stringFormat(values);
    const strings = extractStrings(stringValues[0]);
    const numbers = stringValues.map(extractNumbers);
    return { property, strings, numbers };
  });

// 记录时间
const trackTime = (obj: AnimationObject, now: number) => {
  if (!obj.startTime) obj.startTime = now;
  obj.elapsedTime = now - obj.startTime;
};

const getCurrentValue = (from: number, to: number, easing: number) =>
  from + (to - from) * easing;

const recomposeValue: RecomposeValue = ([from, to], strings, easing) =>
  strings.reduce((style, string, index) => {
    const previous = index - 1;
    const value = getCurrentValue(from[previous], to[previous], easing);
    return style + value + string;
  });

const createStyles = (keyframes: Keyframes[], easing: number) =>
  keyframes.reduce<assignStyles>((styles, { property, numbers, strings }) => {
    styles[property] = recomposeValue(numbers, strings, easing);
    return styles;
  }, {});

const getProgress = ({ elapsedTime, duration }: AnimationObject) =>
  duration > 0 ? Math.min(elapsedTime / duration, 1) : 1;

const rAF: rAFType<AnimationObject> = {
  all: new Set(),
  add(obj) {
    if (this.all.add(obj).size < 2) requestAnimationFrame(tick);
  }
};

const tick: FrameRequestCallback = now => {
  const { all } = rAF;
  all.forEach(current => {
    trackTime(current, now);
    const progress = getProgress(current);
    const { element, keyframes, easing, completed } = current;
    if (element)
      Object.assign(
        (element as HTMLElement).style,
        createStyles(keyframes, easings[easing](progress))
      );
    if (progress < 1) return;
    completed();
    all.delete(current);
  });

  if (all.size) requestAnimationFrame(tick);
};

const animate = (options: Options) =>
  new Promise(resolve => {
    const { elements, duration, easing = "linear", ...others } = options;
    getElements(elements).forEach(element => {
      const keyframes = createAnimationKeyframes(others);
      const animation = {
        element,
        keyframes,
        duration,
        easing,
        startTime: 0,
        elapsedTime: 0,
        completed: resolve
      };
      rAF.add(animation);
    });
  });

export const stop = (element: ElementsType) => {
  const nodes = getElements(element);
  rAF.all.forEach(obj => {
    if (~nodes.indexOf(obj.element)) rAF.all.delete(obj);
  });
};

export default animate;
